(ns fermijam.civs
  (:require [clojure.string :as str]
            [fermijam.language :refer [gen-language gen-word]]
            [fermijam.rand :refer [pick-n]]))

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

(def all-techs
  {"tool-making"
   {:name "tool-making"
    :crisis-chance {:overhunting +2
                    :overfishing -1
                    :crop-failure -1}}
   "agriculture"
   {:name "agriculture"
    :crisis-chance {:overhunting -1
                    :overfishing -1
                    :crop-failure +2}}
   "fishing"
   {:name "fishing"
    :crisis-chance {:overhunting -1
                    :overfishing +2
                    :crop-failure -1}}
   "writing"
   {:name "writing"
    :crisis-chance {:war-over-metal -1}}
   "fire"
   {:name "fire"
    :prereqs #{"tool-making"}
    :crisis-chance {:forest-fire +3
                    :food-illness -3}}})

(defmulti desc-for-tech identity)

(defmethod desc-for-tech "tool-making" [_]
  ["The " [:name] " use stone tools for many things, including as weapons "
   "when hunting the wild " [:vocab :beast] "."])

(defmethod desc-for-tech "agriculture" [_]
  ["The " [:name] " have begun to cultivate crops. They are especially "
   "fond of " [:vocab :crop] ", a kind of "
   (rand-nth ["fast-growing" "slow-growing" "sweet" "sour" "hardy"
              "tasty" "fleshy" "bitter" "colorful" "chewy" "tough"])
   " "
   (rand-nth ["fruit" "stalk" "leaf" "cactus" "flower" "vine"])
   " that grows well in the soil of their native land."])

(defmethod desc-for-tech "fishing" [_]
  ["The " [:name] " have learned how to catch water-dwelling creatures, "
   "such as the " [:vocab :fish] ", for food."])

(defmethod desc-for-tech "writing" [_]
  ["The " [:name] " have developed a simple system of writing, "
   "which they use primarily for "
   (rand-nth ["poetry" "record-keeping" "storytelling" "worship"])
   "."])

(defmethod desc-for-tech "fire" [_]
  ["The " [:name] " have learned the secrets of fire. "
   "They use it to cook their food, and to light their villages at night."])

(defn tech-info [tech]
  (assoc (all-techs tech) :desc (desc-for-tech tech)))

(defn has-prereqs? [civ tech]
  (every? #(contains? (:knowledge civ) %) (:prereqs (tech-info tech))))

(defn possible-techs [civ]
  (->> (keys all-techs)
       (remove #(contains? (:knowledge civ) %))
       (filter #(has-prereqs? civ %))))

(defn discover [civ tech stardate]
  (let [info (tech-info tech)]
    (-> civ
        (update :knowledge conj tech)
        (update :instability (partial + 20))
        (update :crisis-chance merge-with (:crisis-chance info))
        (update :events conj
          {:stardate stardate
           :title (str "discovered " tech)
           :desc (->> (for [part (:desc info)]
                        (if (vector? part) (get-in civ part) part))
                      (str/join))}))))

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
     :instability 0
     :events [{:desc (str "We first became aware of the " species-name " in " stardate ". "
                          "They are " trait1 ", " trait2 ", and " trait3 ". ")}
              {:desc (str "The " species-name " "
                          (rand-nth ["reside on" "inhabit"])
                          " the "
                          (rand-nth ["abundant" "barren" "cold" "dry" "dusty" "humid" "lush"
                                     "misty" "overgrown" "rainy" "rocky" "sparse" "stormy"
                                     "torrid" "verdant" "warm" "wet" "windy"])
                          " planet " planet
                          " in the " system " system. "
                          "They speak a language which is known as " language-name ".")}]
     :vocab {:beast (gen-word language)
             :crop (gen-word language)
             :fish (gen-word language)
             :planet planet
             :language language-name}}))
