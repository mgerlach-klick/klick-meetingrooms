(ns ddbatom)
(require '[promesa.core :as p])
(require '[cljs.reader :as reader])

(defn serialize [v]
  (binding [*print-dup*      true
            *print-readably* true]
    (pr-str v)))

(def deserialize
  (memoize reader/read-string))

(def state-item "de.px0.state-item")
(def state-attribute "de.px0.state-attribute")

(deftype DynamoDBTable [ddb table-name]

  IPrintWithWriter
  (-pr-writer [o writer _]
    (-write writer (str "#<DynamoDBTable: " table-name ">")))

  IDeref
  (-deref [o]
    (let [params (clj->js {:TableName table-name
                           :Key {:KEY_NAME {:S state-item}}
                           :ProjectionExpression "ATTRIBUTE_NAME"})])
    (p/promise (fn [resolve reject]
                 (.getItem params (fn [err data]
                                    (if err
                                      (reject err)
                                      (resolve
                                       (-> data
                                           (get "Item")
                                           (get state-attribute)
                                           (get "S")
                                           (deserialize)))))))))

  IReset
  (-reset! [o new-value]
    (let [params (clj->js {:TableName table-name
                           :Item      { state-attribute {:S (serialize new-value)}}})]
      (p/promise (fn [resolve reject]
                   (.putItem ddb (fn [err data]
                                   (if err
                                     (reject err)
                                     (resolve (deref o)))))))))

  ISwap
  (-swap!
    ([o f]
     (p/alet [oldval (p/await (deref o))
              newval (f oldval)]
             (reset! o newval)))
    ([o f a]
     (p/alet [oldval (p/await (deref o))
              newval (f oldval a)]
             (reset! o newval)))
    ([o f a b]
     (p/alet [oldval (p/await (deref o))
              newval (f oldval a b)]
             (reset! o newval))
     ([o f a b xs]
      (p/alet [oldval (p/await (deref o))
               newval (apply f oldval a b xs)]
              (reset! o newval))))

(defn dynamodb-table
  [aws-config table-name]
  (let [aws (.config.update AWS (clj->js aws-config))
        ddb (new (AWS.DynamoDB #js {:apiVersion "2012-10-08"}))])
  (DynamoDBTable. ddb table-name))


;; // Load the AWS SDK for Node.js
;; var AWS = require('aws-sdk');
;; // Set the region
;; AWS.config.update({region: 'REGION'});

;; // Create the DynamoDB service object
;; ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

;; var params = {
;;               TableName: 'TABLE',
;;               Item:      {
;;                           'CUSTOMER_ID'   : {N: '001'},
;;                           'CUSTOMER_NAME' : {S: 'Richard Roe'},
;;                           }
;;               };

;; // Call DynamoDB to add the item to the table
;; ddb.putItem(params, function(err, data) {
;; if          (err) {
;;             console.log("Error", err);
;;             } else  {
;;                       console.log("Success", data);
;;                       }
;; });


;; var params = {
;;   TableName: 'TABLE',
;;   Key: {
;;     'KEY_NAME' : {N: '001'},
;;   },
;;   ProjectionExpression: 'ATTRIBUTE_NAME'
;; };

;; // Call DynamoDB to read the item from the table
;; ddb.getItem(params, function(err, data) {
;;   if (err) {
;;     console.log("Error", err);
;;   } else {
;;     console.log("Success", data.Item);
;;   }
;; });
