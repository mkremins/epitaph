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

(def tech-info
  {"tool-making"
   {:name "tool-making"
    :desc ["The " [:name] " have discovered how to make stone tools. "
           "This greatly aids them in hunting the wild " [:vocab :beast] "."]
    :crisis-chance {:overhunting +2
                    :overfishing -1
                    :crop-failure -1}}
   "agriculture"
   {:name "agriculture"
    :desc ["The " [:name] " have begun to cultivate crops. They are especially "
           "fond of " [:vocab :crop] ", a kind of "
           (rand-nth ["fast-growing" "slow-growing" "sweet" "sour" "hardy"
                      "tasty" "fleshy" "bitter" "colorful" "chewy" "tough"])
           " "
           (rand-nth ["fruit" "stalk" "leaf" "cactus" "flower" "vine"])
           " that grows well in the soil of their native land."]
    :crisis-chance {:overhunting -1
                    :overfishing -1
                    :crop-failure +2}}
   "fishing"
   {:name "fishing"
    :desc ["The " [:name] " have learned how to catch water-dwelling creatures, "
           "such as the " [:vocab :fish] ", for food."]
    :crisis-chance {:overhunting -1
                    :overfishing +2
                    :crop-failure -1}}
   "writing"
   {:name "writing"
    :desc ["The " [:name] " have developed a simple system of writing, "
           "which they now use for record-keeping."]
    :crisis-chance {:war-over-metal -1}}
   "fire"
   {:name "fire"
    :desc ["The " [:name] " have learned the secrets of fire."]
    :prereqs #{"tool-making"}
    :crisis-chance {:forest-fire +3}}})

(defn has-prereqs? [civ tech]
  (every? #(contains? (:knowledge civ) %) (:prereqs (tech-info tech))))

(defn possible-techs [civ]
  (->> (keys tech-info)
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
        species-name (str/capitalize (gen-word language))]
    {:name species-name
     :system (str/capitalize (gen-word language))
     :language language
     :traits (pick-n 3 all-traits)
     :knowledge #{}
     :instability 0
     :events [{:stardate stardate
               :title "first appeared"
               :desc (str "The " species-name " came to our attention.")}]
     :vocab {:beast (gen-word language)
             :crop (gen-word language)
             :fish (gen-word language)}}))
