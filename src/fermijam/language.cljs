(ns fermijam.language
  (:require [clojure.string]
            [fermijam.rand :refer [pick-n]]))

(def all-consonants
  ["b" "c" "d" "g" "h" "k" "m" "n" "l" "p" "q" "s" "t" "v" "x" "y" "z"])

(def all-vowels
  ["a" "e" "i" "o" "u"
   "a" "e" "i" "o" "u"
   "a" "e" "i" "o" "u"
   "a" "e" "i" "o" "u"
   "A" "E" "I" "O" "U"])

(def all-sibilants
  ["f" "s"])

(def all-liquids
  ["j" "l" "r" "w"])

(def all-separators
  ["" "" "" "" "" "" "" "" "-" "'"])

(def all-vowel-orthographies
  [; "normal" orthography (chosen ~half the time)
   {"A" "a" "E" "e" "I" "i" "O" "o" "U" "u"}
   {"A" "a" "E" "e" "I" "i" "O" "o" "U" "u"}
   {"A" "a" "E" "e" "I" "i" "O" "o" "U" "u"}
   {"A" "a" "E" "e" "I" "i" "O" "o" "U" "u"}
   {"A" "a" "E" "e" "I" "i" "O" "o" "U" "u"}
   ; "special" orthographies (1/10 chance of each)
   {"A" "á" "E" "é" "I" "í" "O" "ó" "U" "ú"}
   {"A" "ä" "E" "ë" "I" "ï" "O" "ö" "U" "ü"}
   {"A" "â" "E" "ê" "I" "î" "O" "ô" "U" "û"}
   {"A" "aa" "E" "ee" "I" "ii" "O" "oo" "U" "uu"}
   {"A" "å" "E" "e" "I" "i" "O" "ø" "U" "u"}])
 
(def all-syllable-structures
  [[:cs :v :ce] [:cs :v :ce] [:cs :v :ce] [:cs :v :ce] [:cs :v :ce]
   [:cs :v :v :ce] [:cs :v :v :ce] [:cs :v :v :ce]
   [:cs :v :v] [:cs :v :v]
   [:cs :v] [:cs :v] [:cs :v] [:cs :v] [:cs :v]
   [:v :ce] [:v :ce] [:v :ce] [:v :ce]
   [:cs :l :v :ce] [:cs :l :v :ce]
   [:cs :l :v] [:cs :l :v]
   [:cs :v :l :ce] [:cs :v :l :ce]
   [:v] [:v] [:v] [:v]])

(defn gen-word* [language]
  (let [{:keys [start-consonants end-consonants vowels
                separators liquids sibilants]} language]
    (-> (->> (rand-nth (:word-structures language))
             (map (fn [part]
                    (case part
                      :cs (rand-nth start-consonants)
                      :ce (rand-nth end-consonants)
                      :l (rand-nth liquids)
                      :s (rand-nth sibilants)
                      :v (rand-nth vowels)
                      :b (rand-nth separators))))
             (clojure.string/join))
        (clojure.string/replace #"(.)\1" #(str (first (%1 1)))) ; eliminate doubles
        (clojure.string/replace #"A|E|I|O|U" (:vowel-orthography language)))))

(defn gen-word [language]
  (loop [word (gen-word* language)]
    (if (> (count word) 1)
      word
      (recur (gen-word* language)))))

(defn gen-word-structure []
  (->> (pick-n (+ 1 (rand-int 3) (rand-int 2)) all-syllable-structures)
       (interpose [:b]) ; syllable boundaries
       (reduce into)))

(defn gen-language []
  {:start-consonants  (pick-n (+ 3 (rand-int 3)) all-consonants)
   :end-consonants    (pick-n (+ 3 (rand-int 3)) all-consonants)
   :vowels            (pick-n (+ 3 (rand-int 3)) all-vowels)
   :separators        (pick-n 5 all-separators)
   :liquids           (pick-n (+ 1 (rand-int 3)) all-liquids)
   :sibilants         (pick-n (+ 1 (rand-int 2)) all-sibilants)
   :word-structures   (repeatedly (+ 3 (rand-int 3)) gen-word-structure)
   :vowel-orthography (rand-nth all-vowel-orthographies)})

(defn test []
  (let [language (gen-language)]
    (doseq [word (repeatedly 10 #(gen-word language))]
      (println word))))

(defn test-names []
  (let [language (gen-language)
        pairs (repeatedly 10 #(-> [(gen-word language) (gen-word language)]))]
    (doseq [[a b] pairs]
      (println (str (clojure.string/capitalize a) " " (clojure.string/capitalize b))))))
