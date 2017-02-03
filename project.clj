(defproject
  boot-project
  "0.0.0-SNAPSHOT"
  :repositories
  [["clojars" {:url "https://repo.clojars.org/"}]
   ["maven-central" {:url "https://repo1.maven.org/maven2"}]]
  :dependencies
  [[adzerk/boot-cljs "1.7.228-2" :scope "test"]
   [org.clojure/clojure "1.9.0-alpha14"]
   [adzerk/boot-reload "0.5.0"]
   [org.clojure/clojurescript "1.9.456"]
   [adzerk/boot-cljs-repl "0.3.3"]
   [com.cemerick/piggieback "0.2.1" :scope "test"]
   [weasel "0.7.0" :scope "test"]
   [org.clojure/tools.nrepl "0.2.12" :scope "test"]
   [pandeiro/boot-http "0.7.6"]
   [onetom/boot-lein-generate "0.1.3" :scope "test"]
   [cljs-ajax "0.5.8"]
   [secretary "1.2.3"]
   [hiccups "0.3.0"]]
  :source-paths
  ["cljs"]
  :resource-paths
  ["html"])