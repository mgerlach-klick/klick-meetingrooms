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

(secretary/set-config! :prefix "#")

(defonce rooms (atom {}))

(defn ^:export set-rooms [json]
  (->> (js->clj json :keywordize-keys true)
       (reset! rooms)))

(def application
  (js/document.getElementById "app"))

(defn set-html! [el content]
  (aset el "innerHTML" content))

(defn room-header [room]
  (str (:name room) " (" (:floor room) ")" ))

(defn generate-room [room]
  [:div
   [:h4.header (room-header room)]
   [:div.section
    [:p.flow-text
     "\n                      Emily Carr is located on the 4th floor, opposite of the gym.\n                  "]]
   [:div.section
    [:p.flow-text
     "\n                      Emily Carr is located on the 4th floor, opposite of the gym.\n                  "]]
   [:div.slider
    [:ul.slides
     [:li
      [:img {:src "resources/b3dd9e4248471785ec25bce216cdfd70.jpg"}]
     ]
     [:li
      [:img {:src "resources/b3dd9e4248471785ec25bce216cdfd70.jpg"}]
    ]]]])


(defn show-room [el room-id]
  (prn 'ROOMID room-id)
  (set-html! el
             ;; (str "<h2>" room-id "</h2")
             (.stringify js/JSON (clj->js (get-in @rooms [:rooms room-id])))
             ;; (generate-room  room-id)
             ))

(defn ^:export set-room-id [room-id]
  (secretary/dispatch! (str "/room/" room-id)))

(defroute "/room/:room" {room :room}
  (show-room application (keyword room)))

(defroute home-path "/" []
  (set-html! application "<h1>OMG! YOU'RE HOME!</h1>"))

;; Catch all
(defroute "*" []
  (set-html! application "<h1>LOL! YOU LOST!</h1>"))

;; Quick and dirty history configuration.
(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))

(defn main
  ""
  []
  (prn 'WEEEEEE)
  )
