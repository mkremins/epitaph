(ns epitaph.rand)

(defn biased-rand-nth
  "Like `clojure.core/rand-nth`, but biased towards earlier items in `xs`."
  [xs]
  (let [r (rand)
        r (* r r)] ; square to bias towards the low end
    (nth xs (js/Math.floor (* r (count xs))))))

(defn pick-n [n xs]
  (take n (shuffle xs)))

(defn pick-n-with-replacement [n xs]
  (repeatedly n #(rand-nth xs)))

(defn restrict
  "Repeatedly runs `gen`, a generator fn, until the output passes `pred`, then
  returns the passing output. Extra `args`, if provided, are passed to `gen`."
  [pred gen & args]
  (loop [x (apply gen args)]
    (if (pred x) x (recur (apply gen args)))))

(defn restricted
  "Returns a generator fn that behaves like `gen`, but will only output values
  that pass `pred`. Uses `restrict` internally."
  [pred gen]
  (fn [& args] (apply restrict pred gen args)))
