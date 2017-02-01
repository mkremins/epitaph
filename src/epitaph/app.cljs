(ns epitaph.app
  (:require [clojure.string :as str]
            [epitaph.civs :refer [civ-tick gen-civ invite possible-techs process-event]]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(def synth
  (.toMaster (js/Tone.Synth.)))

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
           :sound-on? true})))

(defn play-notification-sound! [pitch]
  (when (:sound-on? @app-state)
    (.triggerAttackRelease synth pitch "8n")))

(defn get-notification-pitch [old-civs new-civs]
  (cond
    (> (count new-civs) (count old-civs))
      (:notification-pitch (peek new-civs))
    (> (count (filter #(= (:state %) :extinct) new-civs))
       (count (filter #(= (:state %) :extinct) old-civs)))
      "C3"
    :else
      (let [civs-with-new-events
            (->> (range (count old-civs))
                 (filter #(> (count (:events (nth new-civs %)))
                             (count (:events (nth old-civs %)))))
                 (map new-civs))]
        (when (seq civs-with-new-events)
          (rand-nth (mapv :notification-pitch civs-with-new-events))))))

(defn tick []
  (om/transact! (om/root-cursor app-state)
    (fn [state]
      (let [new-stardate (inc (:stardate state))
            civs (mapv #(civ-tick % new-stardate) (:civs state))
            ;; new civs more likely to spawn if all existing civs are "finished"
            new-civ-chance (if (every? #(not= (:state %) :normal) civs) (/ 1 15) (/ 1 180))
            civs (cond-> civs (< (rand) new-civ-chance)
                              (conj (gen-civ new-stardate)))]
        (when-let [pitch (get-notification-pitch (:civs state) civs)]
          (play-notification-sound! pitch))
        (assoc state :civs civs :stardate new-stardate)))))

(defcomponent event-view [data owner]
  (render [_]
    (dom/p {:class "event"} (:desc data))))

(defcomponent civ-view [data owner]
  (render [_]
    (dom/div {:class (str "civ " (name (:state data)))
              :style {:opacity (when (= (:state data) :extinct)
                                 (-> (:cycles-since-extinction data)
                                     (scale [0 (+ 160 (* 20 (count (:events data))))]
                                            [0.75 0.1])
                                     (max 0.1)
                                     (str)))}}
      (dom/div {:class "profile"}
        (dom/h3 {:class "name"} (:name data)))
      ;; events
      (dom/div {:class "events"}
        (om/build-all event-view (:events data)))
      ;; enlighten
      (case (:state data)
        :normal
          (when (seq (possible-techs data))
            (let [date (:stardate data)
                  date-allowed-to-intervene (+ (:last-intervened data) 30)]
              (dom/div {:class "enlighten"}
                (if (< date date-allowed-to-intervene)
                  (dom/p {}
                    "We have recently interfered with the development of "
                    (:name data) " civilization. Further interference is forbidden"
                    " until " date-allowed-to-intervene ".")
                  (dom/p {}
                    "We could teach them the secrets of "
                    (for [part (interpose ", or of " (possible-techs data))]
                      (if (map? part)
                        (let [tech part]
                          (dom/a {:href "#"
                                  :on-click (fn [e]
                                              (.preventDefault e)
                                              (play-notification-sound! (:notification-pitch data))
                                              (om/transact! data []
                                                #(-> (process-event % tech date)
                                                     (assoc :last-intervened date))))}
                            (str/replace (name (:name tech)) #"-" " ")))
                        (dom/span part)))
                    ".")))))
        :pending-invite
          (let [date (:stardate data)]
            (dom/div {:class "enlighten"}
              (dom/p {:class "invite"}
                "We could "
                (dom/a {:on-click (fn [e]
                                    (.preventDefault e)
                                    (om/transact! data [] #(invite % date)))}
                  "invite them in")
                ".")))
        ;else
          nil))))

(defcomponent info-box [data owner]
  (render [_]
    (dom/div {:class "modal-overlay"
              :on-click #(om/update! data :show-info? false)}
      (dom/div {:class "info-box"
                :on-click #(.stopPropagation %)}
        (dom/div {:class "right"}
          (dom/a {:class "icon-cross"
                  :on-click #(om/update! data :show-info? false)}))
        (dom/h2 "About")
        (dom/p {}
          "Hi! I’m "
          (dom/a {:href "https://mkremins.github.io"} "Max Kreminski")
          ", the creator of Epitaph. If you enjoyed playing Epitaph, you can:")
        (dom/ul {}
          (dom/li {}
            "Follow me on "
            (dom/a {:href "https://twitter.com/maxkreminski"} "Twitter")
            " or "
            (dom/a {:href "https://mkremins.itch.io"} "itch.io")
            " for updates on this and other projects")
          (dom/li {}
            "Support me by "
            (dom/a {:href "https://mkremins.itch.io/epitaph"} "making a donation")
            " on itch.io")
          (dom/li {}
            "Check out the game’s "
            (dom/a {:href "https://github.com/mkremins/epitaph"} "source code")))
        (dom/p {} "Thanks for playing!")))))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (when (:show-info? data)
        (om/build info-box data))
      (dom/div {:class "top-bar"}
        (dom/p {} (str "Stardate " (:stardate data)))
        (dom/div {:class "right"}
          (dom/a {:class (if (:sound-on? data) "icon-sound-on" "icon-sound-off")
                  :on-click #(om/transact! data :sound-on? not)})
          (dom/a {:class "icon-info"
                  :on-click #(om/update! data :show-info? true)})))
      (dom/div {:class "civs"}
        (om/build-all civ-view
          (->> (:civs data)
               (map #(assoc % :stardate (:stardate data)))
               (reverse))
          {:key :name})))))

(defn init []
  (enable-console-print!)
  (om/root app app-state {:target (js/document.getElementById "app")})
  (play-notification-sound! (:notification-pitch (first (:civs @app-state))))
  (js/setInterval tick 1000))

(init)
