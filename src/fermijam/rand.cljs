(ns fermijam.rand)

(defn pick-n [n xs]
  (take n (shuffle xs)))

(defn pick-n-with-replacement [n xs]
  (repeatedly n #(rand-nth xs)))
