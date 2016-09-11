(ns epitaph.civs
  (:require [clojure.string :as str]
            [epitaph.events :refer [event-info]]
            [epitaph.language :refer [gen-language gen-word]]
            [epitaph.rand :refer [pick-n]]
            [epitaph.techs :refer [all-techs]]))

;;; event descriptions

(defn replace-all [s replacements]
  (if-let [[key val] (first replacements)]
    (let [val (cond (vector? val) (rand-nth val)
                    (fn? val) (val)
                    :else val)]
      (recur (.. s (split key) (join val)) (rest replacements)))
    s))

(defn recursively-replace-all [s replacements]
  (let [s' (replace-all s replacements)]
    (if (= s' s)
      s
      (recur s' replacements))))

(defn make-description [civ event stardate]
  (recursively-replace-all
    (str/join (:desc event))
    (assoc (merge (:vocab civ) (:vocab event)) "$STARDATE" stardate)))

;;; generic event processing

(defn has-prereqs? [civ event]
  (every? #(contains? (:knowledge civ) %) (:prereqs event)))

(defn process-event [civ event stardate]
  (-> civ
      (update :knowledge conj (:name event))
      (update :events conj {:desc (make-description civ event stardate)})
      (update :event-chances #(merge-with + % (:event-chances event)))
      (merge (:set-vars event))))

(defn invite [civ stardate]
  (-> civ
      (assoc :state :joined)
      (dissoc :event-chances)
      (update :events conj
        {:desc (make-description civ
                 {:desc ["In $STARDATE, the $CIV joined us."]}
                 stardate)})))

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
     :state :normal
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
     :vocab {"$BEAST" (gen-word language)
             "$CITY" (gen-caps-name)
             "$CIV" species
             "$CONQUEROR" (str (gen-caps-name)
                               (when (> (rand) 0.5)
                                 (str " the "
                                      (rand-nth ["Conqueror" "Great" "Magnificent" "Merciful" "Ruthless"]))))
             "$CROP" (gen-word language)
             "$FISH" (gen-word language)
             "$PET" (gen-word language)
             "$PLANET" planet
             "$RELIGION" (gen-caps-word)
             "$SYSTEM" system}
     :tech-chance (/ 1 90)
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
  (when (= (:state civ) :normal)
    (->> all-techs
         (remove #(contains? (:knowledge civ) (:name %)))
         (filter #(has-prereqs? civ %)))))

(defn maybe-select-event [civ]
  (loop [event-chances (possible-event-chances civ)]
    (if-let [[event chance] (first event-chances)]
      (if (< (rand) chance)
        event
        (recur (rest event-chances)))
      ;; if no event selected, maybe (1/100 chance) select a tech
      (let [techs (possible-techs civ)]
        (when (and (seq techs) (< (rand) (:tech-chance civ)))
          (rand-nth techs))))))

(defn civ-tick [civ stardate]
  (case (:state civ)
    :extinct
      (update civ :cycles-since-extinction (fnil inc 0))
    :normal
      (let [event (maybe-select-event civ)]
        (cond-> civ event (process-event event stardate)))
    ;else
      civ))
