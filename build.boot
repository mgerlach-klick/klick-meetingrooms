(set-env! :dependencies '[[adzerk/boot-cljs "1.7.228-2" :scope "test"]
                          [org.clojure/clojure "1.9.0-alpha14"]
                          [adzerk/boot-reload "0.5.0"]
                          [org.clojure/clojurescript "1.9.293"]
                          [adzerk/boot-cljs-repl "0.3.3"]
                          [com.cemerick/piggieback "0.2.1"  :scope "test"]
                          [weasel                  "0.7.0"  :scope "test"]
                          [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                          [pandeiro/boot-http "0.7.6"]
                          ;;---
                          [cljs-ajax "0.5.8"]
                          [secretary "1.2.3"]
                          [hiccups "0.3.0"]

                          ]
          :source-paths #{"cljs"}
          :resource-paths #{"html"})


(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

(deftask dev []
  (comp (serve :dir "target/")
        (watch)
        ;; (speak)
        (reload :on-jsload 'meetingrooms.core/main)
        (cljs-repl)
        (cljs :source-map true :optimizations :none)
        (target)))

(deftask build []
  (comp
   (cljs :optimizations :advanced)
   (target)))
