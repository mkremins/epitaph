(ns fermijam.civs
  (:require [clojure.string :as str]
            [fermijam.language :refer [gen-language gen-word]]
            [fermijam.rand :refer [pick-n]]))

;;; crises

(defmulti desc-for-crisis #(-> %2))

(defmethod desc-for-crisis :asteroid [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", " (vocab :planet) " collided with a "
       (rand-nth ["wandering" "wayward"]) " "
       (rand-nth ["asteroid" "comet" "planetoid"]) ", resulting in "
       "a mass extinction event which obliterated all traces of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :volcano [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a massive volcanic eruption filled the skies of "
       (vocab :planet) " with ash and blotted out the sun. "
       "The ensuing volcanic winter threw the planet's delicate ecosystem "
       "wildly out of balance, bringing about the end of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :gamma-ray-burst [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a gamma-ray burst – caused by the explosion of a star "
       "roughly " (+ 900 (* 100 (rand-int 80))) " "
       (rand-nth ["light-years" "parsecs"]) " from the " (vocab :system)
       " system – showered " (vocab :planet) " in high energy electromagnetic "
       "radiation. The planet's atmospheric ozone layer shielded planetary life "
       "from immediate harm, but was dramatically depleted in the process. "
       "Stripped of its protection against ordinary UV radiation, the planet's "
       "ecosystem gradually collapsed, ushering in the end of " (:name civ)
       " civilization."))

(defmethod desc-for-crisis :food-illness [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a food-borne illness began to spread rapidly through "
       "the " (:name civ) " population. Less than 10% of the " (:name civ) " "
       "survived the plague, causing a population bottleneck which eventually "
       "brought about the total collapse of " (:name civ) " civilization."))

(defmethod desc-for-crisis :overhunting [{:keys [vocab] :as civ} _ stardate]
  (str "Due to the extreme effectiveness of stone tools in hunting "
       (vocab :beast) ", the " (:name civ) " managed to hunt the "
       (vocab :beast) " species to extinction. "
       "Being reliant on the " (vocab :beast) " for food, the " (:name civ)
       " then suffered a famine which brought about the end of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :overfishing [{:keys [vocab] :as civ} _ stardate]
  (str "As the " (:name civ) " population increased, they began to overfish "
       "the waters of " (vocab :planet) ". By " stardate
       ", they had driven the " (vocab :fish) " species to extinction. "
       "The ensuing famine brought about a total collapse of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :crop-failure [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a combination of " (rand-nth ["inclement" "poor"])
       " weather and pestilence caused a near-total failure of the "
       (vocab :crop) " crop. Being overreliant on "  (vocab :crop)
       " cultivation for food, the " (:name civ)
       " then suffered a massive famine which brought about the end of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :forest-fire [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a cooking fire started by one of the " (:name civ)
       " jumped to the forest, where it quickly blazed out of control. "
       "When the fire finally burned itself out, the forest had been almost "
       "completely destroyed, disrupting the ecosystem of " (vocab :planet)
       " enough to cause a total collapse of " (:name civ) " civilization."))

(defmethod desc-for-crisis :war-over-metal [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", due to the growing importance of metal-forged weapons "
       "in warfare and the scarcity of metal deposits on " (vocab :planet) ", "
       "a massive and bloody conflict erupted over control of these deposits. "
       "Over 80% of the " (:name civ) " population was wiped out in the fighting, "
       "a loss from which " (:name civ) " civilization was ultimately unable "
       "to recover."))

(defmethod desc-for-crisis :city-plague [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a virulent new plague spread swiftly through the "
       "largest and densest centers of " (:name civ) " population. Living in "
       "such close proximity, the city-dwelling " (:name civ) " were almost "
       "entirely wiped out by the disease, a loss from which " (:name civ) " "
       "civilization was ultimately unable to recover."))

(defmethod desc-for-crisis :sea-plague [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a number of " (:name civ) " "
       (rand-nth ["explorers" "traders"]) " returned from across the sea "
       "bearing symptoms of an unfamiliar illness. Having no immunity to the "
       "germs that caused the disease, the majority of the " (:name civ)
       " population was wiped out by the ensuing plague."))

(defn extinct [civ crisis stardate]
  (-> civ
      (assoc :extinct? true)
      (update :events conj
        {:desc (desc-for-crisis civ crisis stardate) :extinction? true})))

;;; techs

(def all-techs
  [{:name :toolmaking
    :crisis-chance {:overhunting (/ +4 1000)
                    :overfishing (/ -3 1000)
                    :crop-failure (/ -3 1000)}}
   {:name :agriculture
    :crisis-chance {:overhunting (/ -3 1000)
                    :overfishing (/ -3 1000)
                    :crop-failure (/ +4 1000)}}
   {:name :fishing
    :crisis-chance {:overhunting (/ -3 1000)
                    :overfishing (/ +4 1000)
                    :crop-failure (/ -3 1000)}}
   {:name :writing
    :crisis-chance {:war-over-metal (/ -2 1000)}}
   {:name :astronomy}
   {:name :fire
    :prereqs #{:toolmaking}
    :crisis-chance {:forest-fire (/ +2 1000)
                    :food-illness (/ -2.5 1000)}}
   {:name :metalworking
    :prereqs #{:fire}
    :crisis-chance {:war-over-metal (/ +3 1000)}}
   {:name :construction
    :prereqs #{:toolmaking :agriculture}
    :crisis-chance {:city-plague (/ +2 1000)
                    :war-over-metal (/ -1 1000)
                    :forest-fire (/ -2 1000)}}
   {:name :mathematics
    :prereqs #{:writing :astronomy}}
   {:name :sailing
    :prereqs #{:astronomy :construction :fishing}
    :crisis-chance {:sea-plague (/ +2 1000)}}
   {:name :plumbing
    :prereqs #{:construction :metalworking}
    :crisis-chance {:city-plague (/ -2 1000)
                    :sea-plague (/ -1 1000)}}
   {:name :optics
    :prereqs #{:mathematics :metalworking}}])

(defmulti desc-for-tech (fn [_ tech _] (:name tech)))

(defmethod desc-for-tech :toolmaking [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " use stone tools for many things, "
       "including as weapons when hunting the wild " (vocab :beast) "."))

(defmethod desc-for-tech :agriculture [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have begun to cultivate crops. "
       "They are especially fond of " (vocab :crop) ", a kind of "
       (rand-nth ["bitter" "chewy" "colorful" "fleshy" "hardy" "sour" "sweet"
                  "tasty" "tough"])
       " "
       (rand-nth ["cactus" "flower" "fruit" "fungus" "grain" "leaf" "lichen"
                  "moss" "mushroom" "nut" "root" "seedpod" "stalk" "vine"])
       " that grows well in the dominant climate of " (vocab :planet) "."))

(defmethod desc-for-tech :fishing [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have learned how to catch water-dwelling creatures "
       "such as the " (vocab :fish) ", which are now "
       (rand-nth ["an important" "a staple"]) " part of the " (:name civ) " diet."))

(defmethod desc-for-tech :writing [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have developed a simple system of writing, "
       "which they use primarily for "
       (rand-nth ["poetry" "record-keeping" "storytelling" "worship"]) "."))

(defmethod desc-for-tech :astronomy [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have begun to watch the skies and recognize patterns "
       "in the movements of stars, which they use to navigate over great distances "
       "and keep track of time."))

(defmethod desc-for-tech :fire [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have mastered the control of fire. "
       "They use it to cook their food, and to light their villages at night."))

(defmethod desc-for-tech :metalworking [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have discovered how to forge molten metal into "
       "jewelry, tools, weapons, and armor."))

(defmethod desc-for-tech :construction [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have begun to construct permanent dwellings and "
       "other structures using materials such as wood and stone."))

(defmethod desc-for-tech :mathematics [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have developed a sophisticated understanding of "
       "basic mathematics, such as arithmetic, algebra, and geometry."))

(defmethod desc-for-tech :sailing [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have learned how to build ships and sail them "
       "across the oceans of " (vocab :planet) " to explore and trade over "
       "increasingly greater distances."))

(defmethod desc-for-tech :plumbing [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have built elaborate pipe and sewer systems to "
       "supply their larger settlements, such as " (vocab :city) ", with "
       "fresh water and a hygenic means of waste disposal."))

(defmethod desc-for-tech :optics [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have begun to use lenses and mirrors made from "
       "polished crystal, glass, and water to redirect and focus light."))

(defn possible-techs [civ]
  (->> all-techs
       (remove #(contains? (:knowledge civ) (:name %)))
       (filter #(every? (partial contains? (:knowledge civ)) (:prereqs %)))))

(defn discover [civ tech stardate]
  (-> civ
      (update :knowledge conj (:name tech))
      (update :crisis-chance #(merge-with + % (:crisis-chance tech)))
      (update :events conj {:desc (desc-for-tech civ tech stardate)})))

;;; civs

(def all-traits
  ["adaptable" "adventurous" "aloof" "analytical" "arrogant" "artistic" "avaricious" "anxious"
   "belligerent" "boisterous" "bold" "brusque"
   "clannish" "creative" "curious"
   "daring" "delicate" "devout" "diligent" "diminutive" "duplicitous"
   "elegant" "enduring" "enthusiastic"
   "fearful" "flamboyant"
   "gentle"
   "harmless" "honest" "honorable" "humble"
   "industrious" "intelligent"
   "kind"
   "loquacious"
   "meticulous" "moral"
   "nimble" "noble" "nomadic"
   "obsequious" "obsessive" "outgoing"
   "passionate" "passive" "playful" "polite" "possessive" "proud"
   "regretful" "reliable" "resilient"
   "sedentary" "serious" "solitary" "stoic" "studious" "sturdy" "subtle"
   "taciturn" "tenacious" "thrifty" "timid"
   "vengeful"
   "warlike" "wise"])

(defn gen-civ [stardate]
  (let [language (gen-language)
        gen-caps-word #(str/capitalize (gen-word language))
        species-name (gen-caps-word)
        [trait1 trait2 trait3] (pick-n 3 all-traits)
        system (gen-caps-word)
        planet (gen-caps-word)]
    {:name species-name
     :language language
     :knowledge #{}
     :events [{:desc (str "We first became aware of the " species-name " in " stardate ". "
                          "They " (rand-nth ["inhabit" "reside on"]) " the "
                          (rand-nth ["abundant" "arid" "barren" "chilly" "cold" "dry" "dusty"
                                     "frigid" "humid" "lush" "misty" "overgrown" "rainy" "rocky"
                                     "sparse" "steamy" "stormy" "temperate" "torrid" "verdant"
                                     "warm" "wet" "windy"])
                          " planet " planet " in the " system " system. "
                          "They are " trait1 ", " trait2 ", and " trait3 ". ")}]
     :vocab {:beast (gen-word language)
             :crop (gen-word language)
             :fish (gen-word language)
             :system system
             :planet planet
             :city (if (zero? (rand-int 5))
                     (str (gen-caps-word) " " (gen-caps-word))
                     (gen-caps-word))}
     :crisis-chance {:asteroid (/ +1 1000)
                     :volcano (/ +1 1000)
                     :food-illness (/ +2.5 1000)
                     :gamma-ray-burst (/ +1 3000)}}))
