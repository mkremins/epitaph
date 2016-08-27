(ns fermijam.civs
  (:require [clojure.string :as str]
            [fermijam.language :refer [gen-language gen-word]]
            [fermijam.rand :refer [pick-n]]))

;;; crises

(defmulti desc-for-crisis #(-> %2))

(defmethod desc-for-crisis :asteroid [civ _ stardate]
  (str "In " stardate ", " (get-in civ [:vocab :planet])
       " collided with a " (rand-nth ["wandering" "wayward"]) " "
       (rand-nth ["asteroid" "comet" "planetoid"]) ", resulting in "
       "a mass extinction event which obliterated all traces of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :volcano [civ _ stardate]
  (str "In " stardate ", a massive volcanic eruption on "
       (get-in civ [:vocab :planet])
       " covered the sky with ash and blotted out the sun. "
       "The ensuing nuclear winter threw the planet's delicate ecosystem "
       "wildly out of balance, bringing about the end of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :food-illness [civ _ stardate]
  (str "In " stardate ", a plague infected the primary food source of the "
       (:name civ) ". Its unusually deadly nature, coupled with its rapid spread "
       "through the " (:name civ) " population, left less than 10% of the "
       (:name civ) " alive, causing a population bottleneck which eventually "
       "brought about the total collapse of " (:name civ) " civilization."))

(defmethod desc-for-crisis :overhunting [civ _ stardate]
  (str "Due to the extreme effectiveness of stone tools in hunting "
       (get-in civ [:vocab :beast]) ", the " (:name civ) " managed to "
       "hunt the " (get-in civ [:vocab :beast]) " species to extinction. "
       "Being reliant on the " (get-in civ [:vocab :beast]) " for food, the "
       (:name civ) " then suffered a famine which brought about the end of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :overfishing [civ _ stardate]
  (str "As the " (:name civ) " population increased, they began to overfish "
       "the waters of " (get-in civ [:vocab :planet]) ". By " stardate
       ", they had driven the " (get-in civ [:vocab :fish]) " species to extinction. "
       "The ensuing famine brought about a total collapse of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :crop-failure [civ _ stardate]
  (str "In " stardate ", a combination of " (rand-nth ["inclement" "poor"])
       " weather and pestilence caused a near-total failure of the "
       (get-in civ [:vocab :crop]) " crop. Being overreliant on "
       (get-in civ [:vocab :crop]) " cultivation for food, the " (:name civ)
       " then suffered a massive famine which brought about the end of "
       (:name civ) " civilization."))

(defmethod desc-for-crisis :forest-fire [civ _ stardate]
  (str "In " stardate ", a cooking fire started by one of the " (:name civ)
       " jumped to the forest, where it quickly blazed out of control. "
       "When the fire finally burned itself out, the forest had been almost "
       "completely destroyed, and the ecosystem of " (get-in civ [:vocab :planet])
       " went into a state of free-fall. This caused a total collapse of "
       (:name civ) " civilization."))

(defn extinct [civ crisis stardate]
  (-> civ
      (assoc :extinct? true)
      (update :events conj
        {:desc (desc-for-crisis civ crisis stardate) :extinction? true})))

;;; techs

(def all-techs
  [{:name :tool-making
    :crisis-chance {:overhunting +10
                    :overfishing -5
                    :crop-failure -5}}
   {:name :agriculture
    :crisis-chance {:overhunting -5
                    :overfishing -5
                    :crop-failure +10}}
   {:name :fishing
    :crisis-chance {:overhunting -5
                    :overfishing +10
                    :crop-failure -5}}
   {:name :writing
    :crisis-chance {:war-over-metal -5}}
   {:name :fire
    :prereqs #{:tool-making}
    :crisis-chance {:forest-fire +2
                    :food-illness -3}}])

(defmulti desc-for-tech (fn [_ tech _] (:name tech)))

(defmethod desc-for-tech :tool-making [civ _ stardate]
  (str "The " (:name civ) " use stone tools for many things, "
       "including as weapons when hunting the wild "
       (get-in civ [:vocab :beast]) "."))

(defmethod desc-for-tech :agriculture [civ _ stardate]
  (str "The " (:name civ) " have begun to cultivate crops. "
       "They are especially fond of " (get-in civ [:vocab :crop])
       ", a kind of "
       (rand-nth ["fast-growing" "slow-growing" "sweet" "sour" "hardy"
                  "tasty" "fleshy" "bitter" "colorful" "chewy" "tough"])
       " "
       (rand-nth ["fruit" "stalk" "leaf" "cactus" "flower" "vine"])
       " that grows well in the soil of " (get-in civ [:vocab :planet]) "."))

(defmethod desc-for-tech :fishing [civ _ stardate]
  (str "The " (:name civ) " have learned how to catch water-dwelling creatures, "
       "such as the " (get-in civ [:vocab :fish]) ", for food."))

(defmethod desc-for-tech :writing [civ _ stardate]
  (str "The " (:name civ) " have developed a simple system of writing, "
       "which they use primarily for "
       (rand-nth ["poetry" "record-keeping" "storytelling" "worship"]) "."))

(defmethod desc-for-tech :fire [civ _ stardate]
  (str "The " (:name civ) " have learned the secrets of fire. "
       "They use it to cook their food, and to light their villages at night."))

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
        species-name (str/capitalize (gen-word language))
        [trait1 trait2 trait3] (pick-n 3 all-traits)
        system (str/capitalize (gen-word language))
        planet (str/capitalize (gen-word language))
        language-name (str/capitalize (gen-word language))]
    {:name species-name
     :system system
     :language language
     :knowledge #{}
     :events [{:desc (str "We first became aware of the " species-name " in " stardate ". "
                          "They are " trait1 ", " trait2 ", and " trait3 ". ")}
              {:desc (str "The " species-name " "
                          (rand-nth ["reside on" "inhabit"])
                          " the "
                          (rand-nth ["abundant" "arid" "barren" "chilly" "cold" "dry" "dusty"
                                     "frigid" "humid" "lush" "misty" "overgrown" "rainy" "rocky"
                                     "sparse" "steamy" "stormy" "temperate" "torrid" "verdant"
                                     "warm" "wet" "windy"])
                          " planet " planet
                          " in the " system " system. "
                          "They speak a language which is known as " language-name ".")}]
     :vocab {:beast (gen-word language)
             :crop (gen-word language)
             :fish (gen-word language)
             :planet planet
             :language language-name}
     :crisis-chance {:asteroid +1
                     :volcano +1
                     :food-illness +3}}))
