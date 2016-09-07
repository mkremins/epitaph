(ns epitaph.language
  (:require [clojure.string :as str]
            [epitaph.rand :refer [biased-rand-nth pick-n restricted]]))

(def all-consonants
  ["b" "b" "c" "c" "d" "d" "g" "g" "h" "h" "k" "k" "m" "m" "n" "n" "l" "p" "p"
   "q" "s" "t" "t" "v" "v" "x" "y" "z"])

(def all-vowels
  ["a" "e" "i" "o" "u"
   "a" "e" "i" "o" "u"
   "a" "e" "i" "o" "u"
   "a" "e" "i" "o" "u"
   "A" "E" "I" "O" "U"])

(def all-sibilants
  ["f" "s" ""])

(def all-liquids
  ["j" "l" "r" "w" "" ""])

(def all-separators
  ["" "" "'" "-"])

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
   [:v] [:v] [:v] [:v]
   [:s :cs :v :ce] [:s :cs :v :ce]
   [:s :cs :v] [:s :cs :v]
   [:s :l :v] [:s :l :v]
   [:s :l :v :ce] [:s :l :v :ce]])

(defn gen-word* [language]
  (let [{:keys [start-consonants end-consonants vowels
                separator liquids sibilants]} language]
    (-> (->> (biased-rand-nth (:word-structures language))
             (map (fn [part]
                    (case part
                      :cs (biased-rand-nth start-consonants)
                      :ce (biased-rand-nth end-consonants)
                      :l (biased-rand-nth liquids)
                      :s (biased-rand-nth sibilants)
                      :v (biased-rand-nth vowels)
                      :b separator)))
             (str/join))
        (str/replace #"['-]$" "") ; eliminate trailing separators
        (str/replace #"(.)\1" #(str (first (%1 1)))) ; eliminate doubles
        (str/replace #"A|E|I|O|U" (:vowel-orthography language))
        (str/replace #"-" "‑")))) ; non-breaking hyphens

(def gen-word
  (restricted #(> (count %) 1) gen-word*))

(defn gen-word-structure []
  (->> (pick-n (rand-nth [2 2 2 2 2 2 3 4]) all-syllable-structures)
       (mapv #(cond-> % (zero? (rand-int 5)) (conj :b))) ; syllable boundaries
       (reduce into)))

(defn gen-language []
  {:start-consonants  (pick-n (rand-nth [3 3 3 3 4]) all-consonants)
   :end-consonants    (pick-n (rand-nth [3 3 3 3 4]) all-consonants)
   :vowels            (pick-n (rand-nth [3 3 3 3 4]) all-vowels)
   :separator         (rand-nth all-separators)
   :liquids           (pick-n (rand-nth [1 1 1 1 1 1 1 2 2 3]) all-liquids)
   :sibilants         (pick-n (rand-nth [1 1 1 1 2]) all-sibilants)
   :word-structures   (repeatedly 3 gen-word-structure)
   :vowel-orthography (rand-nth all-vowel-orthographies)})
