// Compiled by ClojureScript 1.9.293 {}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__8205__auto__ = (((this$ == null))?null:this$);
var m__8206__auto__ = (secretary.core.route_matches[goog.typeOf(x__8205__auto__)]);
if(!((m__8206__auto__ == null))){
return m__8206__auto__.call(null,this$,route);
} else {
var m__8206__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__8206__auto____$1 == null))){
return m__8206__auto____$1.call(null,this$,route);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__8205__auto__ = (((this$ == null))?null:this$);
var m__8206__auto__ = (secretary.core.route_value[goog.typeOf(x__8205__auto__)]);
if(!((m__8206__auto__ == null))){
return m__8206__auto__.call(null,this$);
} else {
var m__8206__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__8206__auto____$1 == null))){
return m__8206__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var args9998 = [];
var len__8708__auto___10001 = arguments.length;
var i__8709__auto___10002 = (0);
while(true){
if((i__8709__auto___10002 < len__8708__auto___10001)){
args9998.push((arguments[i__8709__auto___10002]));

var G__10003 = (i__8709__auto___10002 + (1));
i__8709__auto___10002 = G__10003;
continue;
} else {
}
break;
}

var G__10000 = args9998.length;
switch (G__10000) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9998.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__8205__auto__ = (((this$ == null))?null:this$);
var m__8206__auto__ = (secretary.core.render_route[goog.typeOf(x__8205__auto__)]);
if(!((m__8206__auto__ == null))){
return m__8206__auto__.call(null,this$);
} else {
var m__8206__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__8206__auto____$1 == null))){
return m__8206__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__8205__auto__ = (((this$ == null))?null:this$);
var m__8206__auto__ = (secretary.core.render_route[goog.typeOf(x__8205__auto__)]);
if(!((m__8206__auto__ == null))){
return m__8206__auto__.call(null,this$,params);
} else {
var m__8206__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__8206__auto____$1 == null))){
return m__8206__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;


secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null));
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__8518__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8522__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"secretary.core","encode-pair"),((function (method_table__8518__auto__,prefer_table__8519__auto__,method_cache__8520__auto__,cached_hierarchy__8521__auto__,hierarchy__8522__auto__){
return (function (p__10005){
var vec__10006 = p__10005;
var k = cljs.core.nth.call(null,vec__10006,(0),null);
var v = cljs.core.nth.call(null,vec__10006,(1),null);
if((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207);
} else {
if((function (){var or__7492__auto__ = cljs.core.map_QMARK_.call(null,v);
if(or__7492__auto__){
return or__7492__auto__;
} else {
if(!((v == null))){
if(((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IRecord$))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
}
}
})()){
return new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646);
} else {
return null;
}
}
});})(method_table__8518__auto__,prefer_table__8519__auto__,method_cache__8520__auto__,cached_hierarchy__8521__auto__,hierarchy__8522__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8522__auto__,method_table__8518__auto__,prefer_table__8519__auto__,method_cache__8520__auto__,cached_hierarchy__8521__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var args10011 = [];
var len__8708__auto___10014 = arguments.length;
var i__8709__auto___10015 = (0);
while(true){
if((i__8709__auto___10015 < len__8708__auto___10014)){
args10011.push((arguments[i__8709__auto___10015]));

var G__10016 = (i__8709__auto___10015 + (1));
i__8709__auto___10015 = G__10016;
continue;
} else {
}
break;
}

var G__10013 = args10011.length;
switch (G__10013) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10011.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207),(function (p__10018){
var vec__10019 = p__10018;
var k = cljs.core.nth.call(null,vec__10019,(0),null);
var v = cljs.core.nth.call(null,vec__10019,(1),null);
var encoded = cljs.core.map_indexed.call(null,((function (vec__10019,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_.call(null,x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k),x], null));
return secretary.core.encode_pair.call(null,pair);
});})(vec__10019,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646),(function (p__10022){
var vec__10023 = p__10022;
var k = cljs.core.nth.call(null,vec__10023,(0),null);
var v = cljs.core.nth.call(null,vec__10023,(1),null);
var encoded = cljs.core.map.call(null,((function (vec__10023,k,v){
return (function (p__10026){
var vec__10027 = p__10026;
var ik = cljs.core.nth.call(null,vec__10027,(0),null);
var iv = cljs.core.nth.call(null,vec__10027,(1),null);
return secretary.core.encode_pair.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,cljs.core.name.call(null,ik)),iv], null));
});})(vec__10023,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__10030){
var vec__10031 = p__10030;
var k = cljs.core.nth.call(null,vec__10031,(0),null);
var v = cljs.core.nth.call(null,vec__10031,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(secretary.core.encode.call(null,[cljs.core.str(v)].join('')))].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,secretary.core.encode,clojure.string.split.call(null,uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq.call(null,index_re,path);
return cljs.core.map.call(null,((function (index_re,parts){
return (function (p__10038){
var vec__10039 = p__10038;
var _ = cljs.core.nth.call(null,vec__10039,(0),null);
var part = cljs.core.nth.call(null,vec__10039,(1),null);
if(cljs.core.empty_QMARK_.call(null,part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__10045 = cljs.core.re_matches.call(null,re,k);
var _ = cljs.core.nth.call(null,vec__10045,(0),null);
var key = cljs.core.nth.call(null,vec__10045,(1),null);
var path = cljs.core.nth.call(null,vec__10045,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path.call(null,path):null);
return cljs.core.cons.call(null,key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.call(null,(function (i,_){
return cljs.core.take.call(null,(i + (1)),xs);
}),xs);
});
var hs = heads.call(null,path);
var m__$1 = cljs.core.reduce.call(null,((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last.call(null,h) === 'number') && (!(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,m__$1,cljs.core.butlast.call(null,h)))))){
return cljs.core.assoc_in.call(null,m__$1,cljs.core.butlast.call(null,h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last.call(null,path) === (0))){
return cljs.core.update_in.call(null,m__$1,cljs.core.butlast.call(null,path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in.call(null,m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.call(null,query_string,/&/);
var params = cljs.core.reduce.call(null,((function (parts){
return (function (m,part){
var vec__10051 = clojure.string.split.call(null,part,/=/,(2));
var k = cljs.core.nth.call(null,vec__10051,(0),null);
var v = cljs.core.nth.call(null,vec__10051,(1),null);
return secretary.core.assoc_in_query_params.call(null,m,secretary.core.key_parse.call(null,k),secretary.core.decode.call(null,v));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys.call(null,params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches.call(null,re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_.call(null,ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.call(null,(function (s__$1,c){
if(cljs.core.truth_(secretary.core.re_escape_chars.call(null,c))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some.call(null,(function (p__10061){
var vec__10062 = p__10061;
var re = cljs.core.nth.call(null,vec__10062,(0),null);
var action = cljs.core.nth.call(null,vec__10062,(1),null);
var temp__6753__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__10065 = temp__6753__auto__;
var m = cljs.core.nth.call(null,vec__10065,(0),null);
var c = cljs.core.nth.call(null,vec__10065,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,cljs.core.count.call(null,m)),action.call(null,c)], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s__$1)){
var vec__10074 = secretary.core.lex_STAR_.call(null,s__$1,clauses);
var s__$2 = cljs.core.nth.call(null,vec__10074,(0),null);
var vec__10077 = cljs.core.nth.call(null,vec__10074,(1),null);
var r = cljs.core.nth.call(null,vec__10077,(0),null);
var p = cljs.core.nth.call(null,vec__10077,(1),null);
var G__10080 = s__$2;
var G__10081 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__10082 = cljs.core.conj.call(null,params,p);
s__$1 = G__10080;
pattern = G__10081;
params = G__10082;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.call(null,cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq.call(null,v))?cljs.core.keyword.call(null,v):new cljs.core.Keyword(null,"*","*",-1294732318));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.call(null,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape.call(null,v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__10092 = secretary.core.lex_route.call(null,orig_route,clauses);
var re = cljs.core.nth.call(null,vec__10092,(0),null);
var params = cljs.core.nth.call(null,vec__10092,(1),null);
if(typeof secretary.core.t_secretary$core10095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core10095 = (function (orig_route,clauses,vec__10092,re,params,meta10096){
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__10092 = vec__10092;
this.re = re;
this.params = params;
this.meta10096 = meta10096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t_secretary$core10095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__10092,re,params){
return (function (_10097,meta10096__$1){
var self__ = this;
var _10097__$1 = this;
return (new secretary.core.t_secretary$core10095(self__.orig_route,self__.clauses,self__.vec__10092,self__.re,self__.params,meta10096__$1));
});})(clauses,vec__10092,re,params))
;

secretary.core.t_secretary$core10095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__10092,re,params){
return (function (_10097){
var self__ = this;
var _10097__$1 = this;
return self__.meta10096;
});})(clauses,vec__10092,re,params))
;

secretary.core.t_secretary$core10095.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core10095.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__10092,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__10092,re,params))
;

secretary.core.t_secretary$core10095.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core10095.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__10092,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__6753__auto__ = secretary.core.re_matches_STAR_.call(null,self__.re,route);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__10098 = temp__6753__auto__;
var seq__10099 = cljs.core.seq.call(null,vec__10098);
var first__10100 = cljs.core.first.call(null,seq__10099);
var seq__10099__$1 = cljs.core.next.call(null,seq__10099);
var ___$2 = first__10100;
var ms = seq__10099__$1;
return cljs.core.merge_with.call(null,cljs.core.vector,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,self__.params,cljs.core.map.call(null,secretary.core.decode,ms))));
} else {
return null;
}
});})(clauses,vec__10092,re,params))
;

secretary.core.t_secretary$core10095.getBasis = ((function (clauses,vec__10092,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__10092","vec__10092",975701056,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta10096","meta10096",941163775,null)], null);
});})(clauses,vec__10092,re,params))
;

secretary.core.t_secretary$core10095.cljs$lang$type = true;

secretary.core.t_secretary$core10095.cljs$lang$ctorStr = "secretary.core/t_secretary$core10095";

secretary.core.t_secretary$core10095.cljs$lang$ctorPrWriter = ((function (clauses,vec__10092,re,params){
return (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"secretary.core/t_secretary$core10095");
});})(clauses,vec__10092,re,params))
;

secretary.core.__GT_t_secretary$core10095 = ((function (clauses,vec__10092,re,params){
return (function secretary$core$compile_route_$___GT_t_secretary$core10095(orig_route__$1,clauses__$1,vec__10092__$1,re__$1,params__$1,meta10096){
return (new secretary.core.t_secretary$core10095(orig_route__$1,clauses__$1,vec__10092__$1,re__$1,params__$1,meta10096));
});})(clauses,vec__10092,re,params))
;

}

return (new secretary.core.t_secretary$core10095(orig_route,clauses,vec__10092,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10104 = arguments.length;
var i__8709__auto___10105 = (0);
while(true){
if((i__8709__auto___10105 < len__8708__auto___10104)){
args__8715__auto__.push((arguments[i__8709__auto___10105]));

var G__10106 = (i__8709__auto___10105 + (1));
i__8709__auto___10105 = G__10106;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((1) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((1)),(0),null)):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8716__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.secretary$core$IRenderRoute$)))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj))){
return cljs.core.apply.call(null,secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq10101){
var G__10102 = cljs.core.first.call(null,seq10101);
var seq10101__$1 = cljs.core.next.call(null,seq10101);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__10102,seq10101__$1);
});

secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route.call(null,obj):obj);
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv.call(null,(function (p__10111){
var vec__10112 = p__10111;
var x = cljs.core.nth.call(null,vec__10112,(0),null);
var _ = cljs.core.nth.call(null,vec__10112,(1),null);
return cljs.core.not_EQ_.call(null,x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
return cljs.core.reset_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some.call(null,(function (p__10119){
var vec__10120 = p__10119;
var compiled_route = cljs.core.nth.call(null,vec__10120,(0),null);
var action = cljs.core.nth.call(null,vec__10120,(1),null);
var temp__6753__auto__ = secretary.core.route_matches.call(null,compiled_route,route);
if(cljs.core.truth_(temp__6753__auto__)){
var params = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route","route",329891309),compiled_route], null);
} else {
return null;
}
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route.call(null,uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace.call(null,uri,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(secretary.core.prefix.call(null))].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.call(null,"/",cljs.core.first.call(null,uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__10128 = clojure.string.split.call(null,secretary.core.uri_without_prefix.call(null,uri),/\?/);
var uri_path = cljs.core.nth.call(null,vec__10128,(0),null);
var query_string = cljs.core.nth.call(null,vec__10128,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash.call(null,uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),secretary.core.decode_query_params.call(null,query_string)], null):null);
var map__10131 = secretary.core.locate_route.call(null,uri_path__$1);
var map__10131__$1 = ((((!((map__10131 == null)))?((((map__10131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10131):map__10131);
var action = cljs.core.get.call(null,map__10131__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var params = cljs.core.get.call(null,map__10131__$1,new cljs.core.Keyword(null,"params","params",710516235));
var action__$1 = (function (){var or__7492__auto__ = action;
if(cljs.core.truth_(or__7492__auto__)){
return or__7492__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.call(null,params,query_params);
return action__$1.call(null,params__$1);
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.call(null,(function (m,p__10137){
var vec__10138 = p__10137;
var key = cljs.core.nth.call(null,vec__10138,(0),null);
var validation = cljs.core.nth.call(null,vec__10138,(1),null);
var value = cljs.core.get.call(null,params,key);
if(cljs.core.truth_(cljs.core.re_matches.call(null,validation,value))){
return m;
} else {
return cljs.core.assoc.call(null,m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_.call(null,secretary.core.invalid_params.call(null,params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__6753__auto__ = secretary.core.re_matches_STAR_.call(null,this$__$1,route);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__10141 = temp__6753__auto__;
var seq__10142 = cljs.core.seq.call(null,vec__10141);
var first__10143 = cljs.core.first.call(null,seq__10142);
var seq__10142__$1 = cljs.core.next.call(null,seq__10142);
var _ = first__10143;
var ms = seq__10142__$1;
return cljs.core.vec.call(null,ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__10144,route){
var vec__10145 = p__10144;
var seq__10146 = cljs.core.seq.call(null,vec__10145);
var first__10147 = cljs.core.first.call(null,seq__10146);
var seq__10146__$1 = cljs.core.next.call(null,seq__10146);
var route_string = first__10147;
var validations = seq__10146__$1;
var vec__10148 = this;
var seq__10149 = cljs.core.seq.call(null,vec__10148);
var first__10150 = cljs.core.first.call(null,seq__10149);
var seq__10149__$1 = cljs.core.next.call(null,seq__10149);
var route_string__$1 = first__10150;
var validations__$1 = seq__10149__$1;
var params = secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_.call(null,params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value.call(null,secretary.core.compile_route.call(null,this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__10151){
var vec__10152 = p__10151;
var seq__10153 = cljs.core.seq.call(null,vec__10152);
var first__10154 = cljs.core.first.call(null,seq__10153);
var seq__10153__$1 = cljs.core.next.call(null,seq__10153);
var route_string = first__10154;
var validations = seq__10153__$1;
var vec__10155 = this;
var seq__10156 = cljs.core.seq.call(null,vec__10155);
var first__10157 = cljs.core.first.call(null,seq__10156);
var seq__10156__$1 = cljs.core.next.call(null,seq__10156);
var route_string__$1 = first__10157;
var validations__$1 = seq__10156__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,secretary.core.route_value.call(null,route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__10167 = null;
var G__10167__1 = (function (this$){
return secretary.core.render_route.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__10167__2 = (function (this$,params){
var map__10158 = params;
var map__10158__$1 = ((((!((map__10158 == null)))?((((map__10158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10158):map__10158);
var m = map__10158__$1;
var query_params = cljs.core.get.call(null,map__10158__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var a = cljs.core.atom.call(null,m);
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__10158,map__10158__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.call(null,((cljs.core._EQ_.call(null,$1,"*"))?$1:cljs.core.subs.call(null,$1,(1))));
var v = cljs.core.get.call(null,cljs.core.deref.call(null,a),lookup);
var replacement = ((cljs.core.sequential_QMARK_.call(null,v))?(function (){
cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,lookup,cljs.core.next.call(null,v));

return secretary.core.encode_uri.call(null,cljs.core.first.call(null,v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri.call(null,v):$1));
return replacement;
});})(map__10158,map__10158__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null))),cljs.core.str(path)].join('');
var temp__6751__auto__ = (function (){var and__7480__auto__ = query_params;
if(cljs.core.truth_(and__7480__auto__)){
return secretary.core.encode_query_params.call(null,query_params);
} else {
return and__7480__auto__;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var query_string = temp__6751__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__10167 = function(this$,params){
switch(arguments.length){
case 1:
return G__10167__1.call(this,this$);
case 2:
return G__10167__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10167.cljs$core$IFn$_invoke$arity$1 = G__10167__1;
G__10167.cljs$core$IFn$_invoke$arity$2 = G__10167__2;
return G__10167;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.call(null,this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__10160,params){
var vec__10161 = p__10160;
var seq__10162 = cljs.core.seq.call(null,vec__10161);
var first__10163 = cljs.core.first.call(null,seq__10162);
var seq__10162__$1 = cljs.core.next.call(null,seq__10162);
var route_string = first__10163;
var validations = seq__10162__$1;
var vec__10164 = this;
var seq__10165 = cljs.core.seq.call(null,vec__10164);
var first__10166 = cljs.core.first.call(null,seq__10165);
var seq__10165__$1 = cljs.core.next.call(null,seq__10165);
var route_string__$1 = first__10166;
var validations__$1 = seq__10165__$1;
var invalid = secretary.core.invalid_params.call(null,params,validations__$1);
if(cljs.core.empty_QMARK_.call(null,invalid)){
return secretary.core.render_route.call(null,route_string__$1,params);
} else {
throw cljs.core.ex_info.call(null,"Could not build route: invalid params",invalid);
}
});

//# sourceMappingURL=core.js.map