(ns fermijam.app
  (:require [clojure.string :as str]
            [fermijam.civs :refer [discover extinct gen-civ possible-techs]]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defn scale
  "Converts the number `x` from the scale `[old-min old-max]` to the scale
   `[new-min new-max]`."
  [x [old-min old-max] [new-min new-max]]
  (let [old-range (- old-max old-min)
        new-range (- new-max new-min)]
    (+ (/ (* (- x old-min) new-range) old-range) new-min)))

(defonce app-state
  (let [stardate (+ 2200 (rand-int 700))]
    (atom {:civs [(gen-civ stardate)]
           :stardate stardate
           :last-intervened 0})))

(defn can-intervene? [state]
  (< (+ (:last-intervened state) 10) (:stardate state)))

(defn maybe-select-crisis [civ]
  (loop [crisis-chance (seq (:crisis-chance civ))]
    (when-let [[crisis chance-in-1000] (first crisis-chance)]
      (if (and (pos? chance-in-1000)
               (< (rand-int 1000) chance-in-1000))
        crisis
        (recur (rest crisis-chance))))))

(defn civ-tick [civ stardate]
  (if (:extinct? civ)
    (update civ :cycles-since-extinction (fnil inc 0))
    (if-let [crisis (maybe-select-crisis civ)]
      (extinct civ crisis stardate)
      (let [techs (possible-techs civ)]
        ;; 1/100 chance of a non-extinct civ advancing on its own each tick
        (cond-> civ (and (seq techs) (zero? (rand-int 100)))
                    (discover (rand-nth techs) stardate))))))

(defn tick []
  (om/transact! (om/root-cursor app-state)
    (fn [state]
      (let [new-stardate (inc (:stardate state))
            civs (mapv #(civ-tick % new-stardate) (:civs state))
            ;; 1/50 chance to spawn a new civ if all are extinct, 1/250 chance otherwise
            new-civ-chance (if (every? :extinct? civs) 20 4)
            civs (cond-> civs (< (rand-int 1000) new-civ-chance)
                              (conj (gen-civ new-stardate)))]
        (assoc state :civs civs :stardate new-stardate)))))

(defcomponent event-view [data owner]
  (render [_]
    (dom/p {:class "event"} (:desc data))))

(defcomponent civ-view [data owner]
  (render [_]
    (dom/div {:class (cond-> "civ" (:extinct? data) (str " extinct"))
              :style {:opacity (when (:extinct? data)
                                 (-> (:cycles-since-extinction data)
                                     (scale [0 200] [0.75 0.03])
                                     (max 0.03)
                                     (str)))}}
      (dom/div {:class "profile"}
        (dom/h3 {:class "name"} (:name data))
        (dom/p {:class "system"} (str (:system data) " system")))
      ;; events
      (dom/div {:class "events"}
        (om/build-all event-view (:events data)))
      ;; enlighten
      (when (and (not (:extinct? data)) (seq (possible-techs data)))
        (dom/div {:class "enlighten"}
          (dom/p "We could teach them the secrets of ")
          (for [part (interpose ", or of " (possible-techs data))]
            (if (map? part)
              (let [tech part]
                (dom/a {:href "#"
                        :on-click (fn [e]
                                    (.preventDefault e)
                                    (om/transact! data []
                                      #(discover % tech (:stardate @app-state)))
                                    (om/transact! (om/root-cursor app-state) []
                                      #(assoc % :last-intervened (:stardate %))))}
                  (name (:name tech))))
              (dom/span part))))))))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class (cond-> "app" (not (can-intervene? data))
                                   (str " cannot-intervene"))}
      (dom/p {:class "stardate"}
        (dom/span (str "Stardate " (:stardate data)))
        (when (pos? (:last-intervened data))
          (dom/span {}
            " | Last intervened in "
            (dom/span {:class "last-intervened"} (:last-intervened data)))))
      (dom/div {:class "civs"}
        (om/build-all civ-view (:civs data))))))

(defn init []
  (enable-console-print!)
  (om/root app app-state {:target (js/document.getElementById "app")})
  (js/setInterval tick 500))

(init)
