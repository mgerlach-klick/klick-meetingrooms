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
  (when n
    (str n
         (let [rem (mod n 100)]
           (if (and (>= rem 11) (<= rem 13))
             "th"
             (condp = (mod n 10)
               1 "st"
               2 "nd"
               3 "rd"
               "th"))))))

(defn set-html! [el content]
  (aset el "innerHTML" content))

(defn room-header [room]
  [:h4.header  {:style "display: inline" } (:name room)
   [:br.hide-on-med-and-up]
   [:h5.grey-text  {:style "display: inline" }
    " ("
    (when (:floor room)
      (str
       (n-th (:floor room))
       " "))
    (when (:tower room)
      (:tower room))
    ")"]])

(defn generate-room [room-id]
  (let [room (get-room room-id)]
    (prn room)
    [:div

     (room-header room)

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
              [:img {:src (str "/resources/pics/" img)}]])]]))

     (when-let [more (:moreinfo room)]
       (when-not (empty? more)
         [:ul "More information:"
          (for [info more]
            [:li
             [:a {:href info} info ]])]))

     [:hr]
     [:a.right {:href (str "mailto:mgerlach@klick.com?subject=Meetingrooms%20" room-id)}
      "Contribute to make this page better!"]
     ]))


(defn show-room [el room-id]
  (set-html! el
             (html (generate-room room-id)))

  (-> (jquery ".slider")
      (.slider (clj->js {"full_width" false
                         "indicators" false}))))

(defn ^:export set-room-id [room-id]
  (.setToken history (str "/room/" room-id)))

(defroute room-path "/room/:room" [room]
  (show-room application (keyword room)))

(defroute home-path "/" []
  (set-html! application (html [:span
                                [:p.section.flow-text "Just search for the meeting room by tapping on the search bar above! It supports fuzzy search and as soon as there is only one option left it will automatically load the result!"]
                                [:p.section.flow-text "Feel free to link directly to the URLs of the meeting rooms, I will keep the URLs stable."]
                                [:p.section.flow-text "Please also help by contributing to this site by offering corrections, better instructions, additions, comments, and all that. There is a link through which you can email at the bottom of every page."]])))

;; Catch all
(defroute "*" []
  (set-html! application (html [p.flow-text "There doesn't seem to be anything here!"])))

(defn ^:export go-to-fragment []
  (prn "reloading" (str window.location.hash))
  (secretary/dispatch! (str window.location.hash)) ;; for reloads
  )


(defn ^:export main
  ""
  []
  )
