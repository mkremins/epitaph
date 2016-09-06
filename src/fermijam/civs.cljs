(ns fermijam.civs
  (:require [clojure.string :as str]
            [fermijam.language :refer [gen-language gen-word]]
            [fermijam.rand :refer [pick-n]]))

;;; non-tech event table

(def event-info
  {;; initial extinction events
   :asteroid
   {:name :asteroid
    :extinction? true}
   :volcano
   {:name :volcano
    :extinction? true}
   :gamma-ray-burst
   {:name :gamma-ray-burst
    :extinction? true}
   :food-illness
   {:name :food-illness
    :extinction? true}
   ;; food-related extinction events
   :overhunting
   {:name :overhunting
    :extinction? true}
   :overfishing
   {:name :overfishing
    :extinction? true}
   :crop-failure
   {:name :crop-failure
    :extinction? true}
   ;; second-tier tech-related extinction events
   :forest-fire
   {:name :forest-fire
    :extinction? true}
   :war-over-metal
   {:name :war-over-metal
    :extinction? true}
   :city-plague
   {:name :city-plague
    :extinction? true}
   :sea-plague
   {:name :sea-plague
    :extinction? true}
   ;; early flavor events
   :pets
   {:name :pets}
   :large-city
   {:name :large-city
    :event-chances {:city-fortress (/ +3 1000)
                    :city-holy (/ +3 1000)
                    :city-trade (/ +3 1000)}}
   :conqueror
   {:name :conqueror
    :event-chances {:city-fortress (/ +10 1000)}}
   :religion
   {:name :religion
    :event-chances {:city-holy (/ +10 1000)}}
   ;; city flavor events (mutually exclusive)
   :city-fortress
   {:name :city-fortress
    :prereqs #{:large-city}
    :event-chances {:city-holy -1
                    :city-trade -1}}
   :city-holy
   {:name :city-holy
    :prereqs #{:large-city}
    :event-chances {:city-fortress -1
                    :city-trade -1}}
   :city-trade
   {:name :city-trade
    :prereqs #{:large-city}
    :event-chances {:city-fortress -1
                    :city-holy -1}}})

;;; tech table

(def all-techs
  [{:name :toolmaking
    :event-chances {:overhunting (/ +4 1000)
                    :overfishing (/ -3 1000)
                    :crop-failure (/ -3 1000)
                    :food-illness (/ +1 1000)
                    :pets (/ +3 1000)
                    :conqueror (/ +1 1000)}}
   {:name :agriculture
    :event-chances {:overhunting (/ -3 1000)
                    :overfishing (/ -3 1000)
                    :crop-failure (/ +4 1000)
                    :pets (/ +4 1000)}}
   {:name :fishing
    :event-chances {:overhunting (/ -3 1000)
                    :overfishing (/ +4 1000)
                    :crop-failure (/ -3 1000)
                    :food-illness (/ +1 1000)}}
   {:name :writing
    :event-chances {:war-over-metal (/ -1 1000)
                    :conqueror (/ +3 1000)
                    :religion (/ +1 1000)}}
   {:name :astronomy
    :event-chances {:religion (/ +1 1000)}}
   {:name :fire
    :prereqs #{:toolmaking}
    :event-chances {:forest-fire (/ +2 1000)
                    :food-illness (/ -3 1000)}}
   {:name :metalworking
    :prereqs #{:fire}
    :event-chances {:war-over-metal (/ +3 1000)
                    :conqueror (/ +4 1000)}}
   {:name :construction
    :prereqs #{:toolmaking :agriculture}
    :event-chances {:large-city (/ +1 1000)
                    :city-plague (/ +2 1000)
                    :war-over-metal (/ -1 1000)
                    :forest-fire (/ -2 1000)
                    :conqueror (/ +2 1000)
                    :pets (/ +1 1000)
                    :religion (/ +3 1000)}}
   {:name :mathematics
    :prereqs #{:writing :astronomy}}
   {:name :sailing
    :prereqs #{:astronomy :construction :fishing}
    :event-chances {:sea-plague (/ +2 1000)
                    :large-city (/ +1 1000)
                    :war-over-metal (/ -2 1000)
                    :city-trade (/ +7 1000)}}
   {:name :architecture
    :prereqs #{:construction :mathematics}
    :event-chances {:large-city (/ +5 1000)
                    :city-fire (/ -1 1000)
                    :religion (/ +5 1000)}}
   {:name :plumbing
    :prereqs #{:construction :metalworking}
    :event-chances {:large-city (/ +3 1000)
                    :city-plague (/ -2 1000)
                    :sea-plague (/ -1 1000)}}
   {:name :optics
    :prereqs #{:mathematics :metalworking}}
   {:name :alchemy
    :prereqs #{:mathematics :metalworking}}])

;;; generic event processing

(defmulti desc-for-event (fn [_ event _] (:name event)))

(defn has-prereqs? [civ event]
  (every? #(contains? (:knowledge civ) %) (:prereqs event)))

(defn process-event [civ event stardate]
  (-> civ
      (update :knowledge conj (:name event))
      (update :events conj {:desc (desc-for-event civ event stardate)})
      (update :event-chances #(merge-with + % (:event-chances event)))
      (cond-> (:extinction? event) (assoc :extinct? true))))

;;; descriptions for non-tech events

(defmethod desc-for-event :asteroid [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", " (vocab :planet) " collided with a "
       (rand-nth ["wandering" "wayward"]) " "
       (rand-nth ["asteroid" "comet" "planetoid"]) ", resulting in "
       "a mass extinction event which obliterated all traces of "
       (:name civ) " civilization."))

(defmethod desc-for-event :volcano [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a massive volcanic eruption filled the skies of "
       (vocab :planet) " with ash and blotted out the sun. "
       "The ensuing volcanic winter threw the planet's delicate ecosystem "
       "wildly out of balance, bringing about the end of "
       (:name civ) " civilization."))

(defmethod desc-for-event :gamma-ray-burst [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a gamma-ray burst – caused by the explosion of a star "
       "roughly " (+ 900 (* 100 (rand-int 80))) " "
       (rand-nth ["light-years" "parsecs"]) " from the " (vocab :system)
       " system – showered " (vocab :planet) " in high energy electromagnetic "
       "radiation. The planet's atmospheric ozone layer shielded planetary life "
       "from immediate harm, but was dramatically depleted in the process. "
       "Stripped of its protection against ordinary UV radiation, the planet's "
       "ecosystem gradually collapsed, ushering in the end of " (:name civ)
       " civilization."))

(defmethod desc-for-event :food-illness [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a food-borne illness began to spread rapidly through "
       "the " (:name civ) " population. Less than 10% of the " (:name civ) " "
       "survived the plague, causing a population bottleneck which eventually "
       "brought about the total collapse of " (:name civ) " civilization."))

(defmethod desc-for-event :overhunting [{:keys [vocab] :as civ} _ stardate]
  (str "Due to the extreme effectiveness of stone tools in hunting "
       (vocab :beast) ", the " (:name civ) " managed to hunt the "
       (vocab :beast) " species to extinction. "
       "Being reliant on the " (vocab :beast) " for food, the " (:name civ)
       " then suffered a famine which brought about the end of "
       (:name civ) " civilization."))

(defmethod desc-for-event :overfishing [{:keys [vocab] :as civ} _ stardate]
  (str "As the " (:name civ) " population increased, they began to overfish "
       "the waters of " (vocab :planet) ". By " stardate
       ", they had driven the " (vocab :fish) " species to extinction. "
       "The ensuing famine brought about a total collapse of "
       (:name civ) " civilization."))

(defmethod desc-for-event :crop-failure [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a combination of " (rand-nth ["inclement" "poor"])
       " weather and pestilence caused a near-total failure of the "
       (vocab :crop) " crop. Being overreliant on "  (vocab :crop)
       " cultivation for food, the " (:name civ)
       " then suffered a massive famine which brought about the end of "
       (:name civ) " civilization."))

(defmethod desc-for-event :forest-fire [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a cooking fire started by one of the " (:name civ)
       " jumped to the forest, where it quickly blazed out of control. "
       "When the fire finally burned itself out, the forest had been almost "
       "completely destroyed, disrupting the ecosystem of " (vocab :planet)
       " enough to cause a total collapse of " (:name civ) " civilization."))

(defmethod desc-for-event :war-over-metal [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", due to the growing importance of metal-forged weapons "
       "in warfare and the scarcity of metal deposits on " (vocab :planet) ", "
       "a massive and bloody conflict erupted over control of these deposits. "
       "Over 80% of the " (:name civ) " population was wiped out in the fighting, "
       "a loss from which " (:name civ) " civilization was ultimately unable "
       "to recover."))

(defmethod desc-for-event :city-plague [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a virulent new plague spread swiftly through the "
       "largest and densest centers of " (:name civ) " population. Living in "
       "such close proximity, the city-dwelling " (:name civ) " were almost "
       "entirely wiped out by the disease, a loss from which " (:name civ) " "
       "civilization was ultimately unable to recover."))

(defmethod desc-for-event :sea-plague [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", a number of " (:name civ) " "
       (rand-nth ["explorers" "traders"]) " returned from across the sea "
       "bearing symptoms of an unfamiliar illness. Having no immunity to the "
       "germs that caused the disease, the majority of the " (:name civ)
       " population was wiped out by the ensuing plague."))

(defmethod desc-for-event :pets [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have domesticated a species of small "
       (rand-nth ["flying" "feathered" "fluffy" "furry" "scaly" "winged"]) " "
       (rand-nth ["animals" "creatures" "predators"]) " known as " (vocab :pet)
       ". The pets assist their " (:name civ) " owners with "
       (rand-nth ["hunting" "navigation" "pest control"]) " in exchange for "
       "food and shelter."))

(defmethod desc-for-event :large-city [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", the " (:name civ) " population reached 25 million "
       "individuals. Many of these " (rand-nth ["dwell" "live" "reside"]) " "
       "within permanent cities, the largest of which is known as "
       (vocab :city) " and has a population of " (+ 15 (rand-int 80)) ",000."))

(defmethod desc-for-event :conqueror [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", many of the "
       (rand-nth ["disparate" "fractious" "warring"]) " " (:name civ) " "
       (rand-nth ["city-states" "clans" "kingdoms" "tribes" "villages"]) " "
       "were united under a single banner by an individual known as "
       (vocab :conqueror)
       (when (> (rand) 0.5)
         (str " the "
              (rand-nth ["Conqueror" "Great" "Magnificent" "Merciful" "Ruthless"])))
       ". "
       (rand-nth [(str "The resulting empire has its capital at " (vocab :city)
                       " and ")
                  (str "The city of " (vocab :city) " "
                       (rand-nth ["becomes" "is declared" "is made" "is named"])
                       " the capital of the resulting empire, which ")])
       "rules over approximately " (+ 5 (rand-int 40)) "% of the entire "
       (:name civ) " population. "
       (rand-nth [(str "Like many other " (:name civ) " states, ")
                  (str "Unusually for the " (:name civ) ", ")])
       "it is governed by "
       (rand-nth
         ["direct democratic vote"
          (str "a council of "
               (rand-nth ["aristocrats" "clerics" "elders" "oligarchs" "war leaders"]))
          "a hereditary monarch"
          "an elected tyrant"])
       "."))

(defmethod desc-for-event :religion [{:keys [vocab] :as civ} _ stardate]
  (str "In " stardate ", " (rand-nth ["a rapidly growing" "an emerging"]) " "
       "religion known as " (vocab :religion) " "
       (rand-nth ["became" "was declared"]) " the official religion of the "
       "largest " (:name civ) " state. Adherents of " (vocab :religion) " "
       "wear "
       (rand-nth [(str (rand-nth ["distinctive" "striking"]) " "
                       (rand-nth ["beaded" "black" "blue" "brown" "dark"
                                  "embroidered" "gray" "green" "patterned"
                                  "purple" "scarlet" "red" "white"]))
                  (str (rand-nth ["plain" "simple"]) " "
                       (rand-nth ["black" "blue" "brown" "dark" "gray" "green"
                                  "purple" "scarlet" "red" "white"]))
                  (rand-nth ["brightly colored"
                             (str (rand-nth ["dazzlingly" "distinctive"]) " "
                                  "colorful")
                             (str (rand-nth ["distinctive " ""]) "concealing")
                             "elaborately decorated"
                             "intricately patterned"])])
       " "
       (rand-nth ["caps" "cloaks" "clothes" "clothing" "coats" "fabrics" "hats"
                  "hoods" "masks" "robes" "shawls"])
       " to mark themselves as believers."))

(defmethod desc-for-event :city-fortress [{:keys [vocab] :as civ} _ stardate]
  (str "Following a long series of failed attempts to "
       (rand-nth ["attack" "besiege" "capture" "conquer"])
       " the city, " (vocab :city) " has become renowned among the "
       (:name civ) " as an impenetrable fortress. The image of its "
       "distinctive " (rand-nth ["ramparts" "towers" "walls"]) " has been "
       "widely adopted in " (:name civ) " "
       (rand-nth ["art" "culture" "literature" "oratory"]) " as a symbol of "
       (rand-nth ["resilience" "safety" "strength"]) "."))

(defmethod desc-for-event :city-holy [{:keys [vocab] :as civ} _ stardate]
  (str "Due to its role as the birthplace of several major " (:name civ) " "
       "religions, including the especially prominent " (vocab :religion) " "
       "faith, the city of " (vocab :city) " is regarded by many of the "
       (:name civ) " as a holy site. "
       (rand-nth
         [(str "The "
               (rand-nth [(str "highest-ranking " (vocab :religion) " "
                               (rand-nth ["bishop" "official" "priest"]) " in ")
                          "archbishop of "
                          "high priest of "])
               (vocab :city) " is considered the de facto leader of the "
               (vocab :religion) " church as a whole, and pilgrimages to the "
               "city are commonplace.")
          (str "Leaders from all around the world "
               (rand-nth ["journey to" "make trips to" "travel to" "visit"])
               " the city "
               (rand-nth ["in hopes of currying" "in order to curry"]) " favor "
               "with the leaders of their people's religion of choice.")])))

(defmethod desc-for-event :city-trade [{:keys [vocab] :as civ} _ stardate]
  (let [things (rand-nth ["armor" "ceramics" "clothing" "fabrics" "glassware"
                          "jewelry" "pottery" "textiles" "weapons"])]
    (str "The city of " (vocab :city) " has become renowed among the "
         (:name civ) " as a center of commerce and trade. In particular, the "
         (rand-nth ["delicate" "durable" "elegant" "fine" "high-quality"
                    "intricately decorated" "sturdy"])
         " " things " produced there " (if (= (last things) "s") "are" "is")
         " highly sought after by traders around the world.")))

;;; descriptions for techs

(defmethod desc-for-event :toolmaking [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " use stone tools for many things, "
       "including as weapons when hunting the wild " (vocab :beast) "."))

(defmethod desc-for-event :agriculture [{:keys [vocab] :as civ} _ stardate]
  (let [a-kind-of-x
        (str "a kind of "
             (rand-nth ["bitter" "chewy" "colorful" "fleshy" "hardy" "sour"
                        "sweet" "tasty" "tough"])
             " "
             (rand-nth ["cactus" "flower" "fruit" "fungus" "grain" "leaf"
                        "lichen" "moss" "mushroom" "nut" "root" "seaweed"
                        "seedpod" "stalk" "vegetable" "vine"]))]
    (str "The " (:name civ) " have begun to cultivate crops"
         (rand-nth [", including "
                    ". One especially popular crop is "
                    ". They are especially fond of "])
         (rand-nth [(str a-kind-of-x " known as " (vocab :crop))
                    (str (vocab :crop) ", " a-kind-of-x)])
         (when (< (rand) (/ 1 3))
           (str " that grows well "
                (rand-nth
                  [(str "in the "
                        (rand-nth ["dense forests" "deserts" "dominant climate"
                                   "fertile soil" "forests" "grasslands"
                                   "jungles" "soil" "rainforests" "rocky soil"
                                   "scrublands"])
                        " of")
                   (str "on the "
                        (rand-nth ["floodplains" "plains" "riverbanks"])
                        " of")])
                " " (vocab :planet)))
         ".")))

(defmethod desc-for-event :fishing [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have learned how to catch water-dwelling creatures "
       "such as the " (vocab :fish) ", which are now "
       (rand-nth ["an important" "a staple"]) " part of the " (:name civ) " diet."))

(defmethod desc-for-event :writing [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have developed a simple system of writing, "
       "which they use primarily for "
       (rand-nth ["poetry" "record-keeping" "storytelling" "worship"]) "."))

(defmethod desc-for-event :astronomy [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have begun to watch the skies and recognize patterns "
       "in the movements of stars, which they use to navigate over great distances "
       "and keep track of time."))

(defmethod desc-for-event :fire [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have mastered the control of fire. "
       "They use it to cook their food, and to light their villages at night."))

(defmethod desc-for-event :metalworking [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have discovered how to forge molten metal into "
       "jewelry, tools, weapons, and armor."))

(defmethod desc-for-event :construction [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have begun to construct permanent dwellings and "
       "other structures using materials such as wood and stone."))

(defmethod desc-for-event :mathematics [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have developed a sophisticated understanding of "
       "basic mathematics, such as arithmetic, algebra, and geometry."))

(defmethod desc-for-event :sailing [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have learned how to build ships and sail them "
       "across the oceans of " (vocab :planet) " to explore and trade over "
       "increasingly greater distances."))

(defmethod desc-for-event :architecture [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have begun to make use of more sophisticated "
       "construction techniques, relying on sturdy structural elements such "
       "as arches and buttresses to support larger and larger buildings."))

(defmethod desc-for-event :plumbing [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have built elaborate pipe and sewer systems to "
       "supply their larger settlements, such as " (vocab :city) ", with "
       "fresh water and a hygenic means of waste disposal."))

(defmethod desc-for-event :optics [{:keys [vocab] :as civ} _ stardate]
  (str "The " (:name civ) " have begun to use lenses and mirrors made from "
       "polished crystal, glass, and water to redirect and focus light."))

(defmethod desc-for-event :alchemy [{:keys [vocab] :as civ} _ stardate]
  (str "Some of the " (:name civ) " have begun to experiment with alchemy, "
       "systematically searching for new ways of combining and manipulating "
       "ingredients to yield useful chemicals, compounds, and medicines."))

;;; generate civs

(def all-traits
  ["adaptable" "adventurous" "aloof" "analytical" "arrogant" "artistic" "avaricious" "anxious"
   "belligerent" "boisterous" "bold" "brusque"
   "clannish" "creative" "curious"
   "daring" "delicate" "devout" "diligent" "diminutive" "duplicitous"
   "elegant" "enduring" "enterprising" "enthusiastic"
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
        gen-caps-name #(if (zero? (rand-int 5))
                         (str (gen-caps-word) " " (gen-caps-word))
                         (gen-caps-word))
        species (gen-caps-word)
        [trait1 trait2 trait3] (pick-n 3 all-traits)
        system (gen-caps-name)
        planet (gen-caps-name)]
    {:name species
     :language language
     :knowledge #{}
     :events [{:desc (str "We first became aware of the " species " in " stardate ". "
                          "They " (rand-nth ["inhabit" "reside on"]) " the "
                          (rand-nth ["abundant" "arid" "barren" "chilly" "cold" "dry" "dusty"
                                     "frigid" "humid" "lush" "misty" "overgrown" "rainy" "rocky"
                                     "sparse" "steamy" "stormy" "temperate" "torrid" "verdant"
                                     "warm" "wet" "windy"])
                          " planet " planet " in the " system " system. "
                          "They are " trait1 ", " trait2 ", and " trait3 ". ")}]
     :vocab {:beast (gen-word language)
             :city (gen-caps-name)
             :conqueror (gen-caps-name)
             :crop (gen-word language)
             :fish (gen-word language)
             :pet (gen-word language)
             :planet planet
             :religion (gen-caps-word)
             :system system}
     :event-chances {:asteroid (/ +1 1000)
                     :volcano (/ +1 1000)
                     :food-illness (/ +1 1000)
                     :gamma-ray-burst (/ +1 3000)
                     :pets (/ +1 1000)}
     :notification-pitch (rand-nth ["C4" "D4" "E4" "F4" "G4" "A4" "B4"
                                    "C5" "D5" "E5" "F5" "G5" "A5" "B5"])}))

;;; update civs each tick

(defn possible-event-chances [civ]
  (->> (:event-chances civ)
       (filter #(pos? (second %)))
       (map #(-> [(event-info (first %)) (second %)]))
       (remove #(contains? (:knowledge civ) (:name (first %))))
       (filter #(has-prereqs? civ (first %)))
       (shuffle)))

(defn possible-techs [civ]
  (->> all-techs
       (remove #(contains? (:knowledge civ) (:name %)))
       (filter #(has-prereqs? civ %))))

(defn maybe-select-event [civ]
  (loop [event-chances (possible-event-chances civ)]
    (if-let [[event chance] (first event-chances)]
      (if (< (rand) chance)
        event
        (recur (rest event-chances)))
      ;; if no event selected, maybe (1/100 chance) select a tech
      (let [techs (possible-techs civ)]
        (when (and (seq techs) (< (rand) (/ 1 100)))
          (rand-nth techs))))))

(defn civ-tick [civ stardate]
  (if (:extinct? civ)
    (update civ :cycles-since-extinction (fnil inc 0))
    (let [event (maybe-select-event civ)]
      (cond-> civ event (process-event event stardate)))))
