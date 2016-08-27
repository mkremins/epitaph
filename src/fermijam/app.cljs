(ns fermijam.app
  (:require [clojure.string :as str]
            [fermijam.civs :refer [discover gen-civ possible-techs]]
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
  (atom {:civs (vec (repeatedly 3 #(gen-civ 2500)))
         :stardate 2500}))

(defn gen-extinction-event [civ stardate]
  {:stardate stardate
   :title "went extinct"
   :extinction? true
   :desc (rand-nth
           [(str "The home planet of the " (:name civ)
                 " collided with a wandering asteroid, resulting in a mass extinction event"
                 " which obliterated all traces of " (:name civ) " civilization.")])})

(defn extinct [civ event]
  (-> civ
      (assoc :extinct? true)
      (update :events conj event)))

(defn civ-tick [civ stardate]
  (cond-> civ
    :always
      (update :instability #(max 0 (dec %)))
    (:extinct? civ)
      (update :cycles-since-extinction (fnil inc 0))
    ;; 1/100 chance of a non-extinct civ advancing on its own each tick
    (and (not (:extinct? civ))
         (zero? (rand-int 100))
         (seq (possible-techs civ)))
      (discover (rand-nth (possible-techs civ)) stardate)
    ;; 1/500 chance of a civ going extinct from random fate each tick
    (and (not (:extinct? civ)) (zero? (rand-int 500)))
      (extinct (gen-extinction-event civ stardate))))

(defn tick []
  (om/transact! (om/root-cursor app-state)
    (fn [state]
      (let [new-stardate (inc (:stardate state))
            civs (mapv #(civ-tick % new-stardate) (:civs state))
            ;; 1/100 chance of introducing a new civ each tick
            civs (cond-> civs (zero? (rand-int 100)) (conj (gen-civ new-stardate)))]
        {:civs civs
         :stardate new-stardate}))))

(defcomponent event-view [data owner]
  (render [_]
    (dom/div {:class (cond-> "event" (:extinction? data) (str " extinction"))}
      (dom/p {:class "title"
              :on-click #(om/transact! data :expanded? not)}
        (str (if (:expanded? data) "-" "+") " " (:stardate data) ": " (:title data)))
      (when (:expanded? data)
        (dom/p {:class "desc"} (:desc data))))))

(defcomponent civ-view [data owner]
  (render [_]
    (dom/div {:class (cond-> "civ" (:extinct? data) (str " extinct"))
              :style {:opacity (when (:extinct? data)
                                 (-> (:cycles-since-extinction data)
                                     (scale [0 100] [0.5 0.03])
                                     (max 0.03)
                                     (str)))}}
      (dom/div {:class "profile"}
        (dom/h3 {:class "name"} (:name data))
        (dom/p {:class "system"} (str (:system data) " system"))
        (dom/p {:class "traits"}
          (str/join ", " (:traits data))))
      (dom/div {:class "enlighten"}
        (dom/p "We shall teach them the secrets of...")
        (for [tech (possible-techs data)]
          (dom/a {:href "#"
                  :on-click (fn [e]
                              (.preventDefault e)
                              (om/transact! data []
                                #(discover % tech (:stardate @app-state))))}
            (str tech "."))))
      (dom/div {:class "events"}
        (dom/h4 "History")
        (om/build-all event-view (:events data))))))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (dom/p {:class "stardate"} (str "Stardate " (:stardate data)))
      (dom/div {:class "civs"}
        (om/build-all civ-view (:civs data))))))

(defn init []
  (enable-console-print!)
  (om/root app app-state {:target (js/document.getElementById "app")})
  (js/setInterval tick 500))

(init)
