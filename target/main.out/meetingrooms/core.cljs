(ns meetingrooms.core
  (:require [ajax.core :refer [GET POST]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [hiccups.runtime :as hiccupsrt]

            [clojure.string :as str])
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:import goog.History))

(enable-console-print!)

(defonce history (doto (History.)
                    (events/listen
                     EventType/NAVIGATE
                     (fn [event]
                       (secretary/dispatch! (.-token event))))
                    (.setEnabled true)))

(secretary/set-config! :prefix "#")

(defonce rooms (atom {}))

(def jquery (js* "$"))

(def application
  (js/document.getElementById "app"))


(defn ^:export set-rooms [json]
  (->> (js->clj json :keywordize-keys true)
       (reset! rooms)))

(defn get-room [room-id]
  (get-in @rooms [:rooms room-id]))

(defn n-th [n]
  (str n
       (let [rem (mod n 100)]
         (if (and (>= rem 11) (<= rem 13))
           "th"
           (condp = (mod n 10)
             1 "st"
             2 "nd"
             3 "rd"
             "th")))))

(defn set-html! [el content]
  (aset el "innerHTML" content))

(defn room-header [room]
  (str (:name room) " (" (n-th (:floor room)) " " (:tower room)")"))

(defn generate-room [room]
  (prn room)
  [:div

   [:h4.header (room-header room)]

   (when-let [aliases (:aliases room)]
     (when-not (empty? aliases)
       [:p.grey-text "aka: " (apply str (interpose ", " aliases))]))

   [:div.section
    [:p.flow-text
     (:description room)]]

   (when-let [images (:pictures room)]
     (when-not (empty? images)
       [:div.slider
        [:ul.slides
         (for [img images]
           [:li
            [:img {:src (str "/resources/pics/" img)}]])]]))])


(defn show-room [el room-id]
  (set-html! el
             (html (generate-room (get-room room-id))))

  (-> (jquery ".slider")
      (.slider (clj->js {"full_width" false
                         "indicators" (> (count (:pictures (get-room room-id))) 1)}))))

(defn ^:export set-room-id [room-id]
  (.setToken history (str "/room/" room-id)))

(defroute room-path "/room/:room" [room]
  (show-room application (keyword room)))

(defroute home-path "/" []
  (set-html! application (html [p.flowtext "Just search for the meeting room by tapping on the search bar above! It supports fuzzy search and as soon as there is only one option left it will automatically load the result! I hope this is helpful! "])))

;; Catch all
(defroute "*" []
  (set-html! application (html [p.flowtext "There doesn't seem to be anything here!"])))

(defn main
  ""
  []
  (prn "reloading" (str window.location.hash))
  (secretary/dispatch! (str window.location.hash)) ;; for reloads
  )
