// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__11176__auto__,writer__11177__auto__,opt__11178__auto__){
return cljs.core._write.call(null,writer__11177__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15090 = arguments.length;
var i__11741__auto___15091 = (0);
while(true){
if((i__11741__auto___15091 < len__11740__auto___15090)){
args__11747__auto__.push((arguments[i__11741__auto___15091]));

var G__15092 = (i__11741__auto___15091 + (1));
i__11741__auto___15091 = G__15092;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq15089){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15089));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15094 = arguments.length;
var i__11741__auto___15095 = (0);
while(true){
if((i__11741__auto___15095 < len__11740__auto___15094)){
args__11747__auto__.push((arguments[i__11741__auto___15095]));

var G__15096 = (i__11741__auto___15095 + (1));
i__11741__auto___15095 = G__15096;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq15093){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15093));
});

var g_QMARK__15097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_15098 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15097){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15097))
,null));
var mkg_15099 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15097,g_15098){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15097,g_15098))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__15097,g_15098,mkg_15099){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__15097).call(null,x);
});})(g_QMARK__15097,g_15098,mkg_15099))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__15097,g_15098,mkg_15099){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_15099).call(null,gfn);
});})(g_QMARK__15097,g_15098,mkg_15099))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__15097,g_15098,mkg_15099){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_15098).call(null,generator);
});})(g_QMARK__15097,g_15098,mkg_15099))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12982__auto___15119 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12982__auto___15119){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15120 = arguments.length;
var i__11741__auto___15121 = (0);
while(true){
if((i__11741__auto___15121 < len__11740__auto___15120)){
args__11747__auto__.push((arguments[i__11741__auto___15121]));

var G__15122 = (i__11741__auto___15121 + (1));
i__11741__auto___15121 = G__15122;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15119))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15119){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15119),args);
});})(g__12982__auto___15119))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12982__auto___15119){
return (function (seq15100){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15100));
});})(g__12982__auto___15119))
;


var g__12982__auto___15123 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12982__auto___15123){
return (function cljs$spec$impl$gen$list(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15124 = arguments.length;
var i__11741__auto___15125 = (0);
while(true){
if((i__11741__auto___15125 < len__11740__auto___15124)){
args__11747__auto__.push((arguments[i__11741__auto___15125]));

var G__15126 = (i__11741__auto___15125 + (1));
i__11741__auto___15125 = G__15126;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15123))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15123){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15123),args);
});})(g__12982__auto___15123))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12982__auto___15123){
return (function (seq15101){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15101));
});})(g__12982__auto___15123))
;


var g__12982__auto___15127 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12982__auto___15127){
return (function cljs$spec$impl$gen$map(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15128 = arguments.length;
var i__11741__auto___15129 = (0);
while(true){
if((i__11741__auto___15129 < len__11740__auto___15128)){
args__11747__auto__.push((arguments[i__11741__auto___15129]));

var G__15130 = (i__11741__auto___15129 + (1));
i__11741__auto___15129 = G__15130;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15127))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15127){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15127),args);
});})(g__12982__auto___15127))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12982__auto___15127){
return (function (seq15102){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15102));
});})(g__12982__auto___15127))
;


var g__12982__auto___15131 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12982__auto___15131){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15132 = arguments.length;
var i__11741__auto___15133 = (0);
while(true){
if((i__11741__auto___15133 < len__11740__auto___15132)){
args__11747__auto__.push((arguments[i__11741__auto___15133]));

var G__15134 = (i__11741__auto___15133 + (1));
i__11741__auto___15133 = G__15134;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15131))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15131){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15131),args);
});})(g__12982__auto___15131))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12982__auto___15131){
return (function (seq15103){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15103));
});})(g__12982__auto___15131))
;


var g__12982__auto___15135 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12982__auto___15135){
return (function cljs$spec$impl$gen$set(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15136 = arguments.length;
var i__11741__auto___15137 = (0);
while(true){
if((i__11741__auto___15137 < len__11740__auto___15136)){
args__11747__auto__.push((arguments[i__11741__auto___15137]));

var G__15138 = (i__11741__auto___15137 + (1));
i__11741__auto___15137 = G__15138;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15135))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15135){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15135),args);
});})(g__12982__auto___15135))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12982__auto___15135){
return (function (seq15104){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15104));
});})(g__12982__auto___15135))
;


var g__12982__auto___15139 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12982__auto___15139){
return (function cljs$spec$impl$gen$vector(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15140 = arguments.length;
var i__11741__auto___15141 = (0);
while(true){
if((i__11741__auto___15141 < len__11740__auto___15140)){
args__11747__auto__.push((arguments[i__11741__auto___15141]));

var G__15142 = (i__11741__auto___15141 + (1));
i__11741__auto___15141 = G__15142;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15139))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15139){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15139),args);
});})(g__12982__auto___15139))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12982__auto___15139){
return (function (seq15105){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15105));
});})(g__12982__auto___15139))
;


var g__12982__auto___15143 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__12982__auto___15143){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15144 = arguments.length;
var i__11741__auto___15145 = (0);
while(true){
if((i__11741__auto___15145 < len__11740__auto___15144)){
args__11747__auto__.push((arguments[i__11741__auto___15145]));

var G__15146 = (i__11741__auto___15145 + (1));
i__11741__auto___15145 = G__15146;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15143))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15143){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15143),args);
});})(g__12982__auto___15143))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__12982__auto___15143){
return (function (seq15106){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15106));
});})(g__12982__auto___15143))
;


var g__12982__auto___15147 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12982__auto___15147){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15148 = arguments.length;
var i__11741__auto___15149 = (0);
while(true){
if((i__11741__auto___15149 < len__11740__auto___15148)){
args__11747__auto__.push((arguments[i__11741__auto___15149]));

var G__15150 = (i__11741__auto___15149 + (1));
i__11741__auto___15149 = G__15150;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15147))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15147){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15147),args);
});})(g__12982__auto___15147))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12982__auto___15147){
return (function (seq15107){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15107));
});})(g__12982__auto___15147))
;


var g__12982__auto___15151 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12982__auto___15151){
return (function cljs$spec$impl$gen$elements(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15152 = arguments.length;
var i__11741__auto___15153 = (0);
while(true){
if((i__11741__auto___15153 < len__11740__auto___15152)){
args__11747__auto__.push((arguments[i__11741__auto___15153]));

var G__15154 = (i__11741__auto___15153 + (1));
i__11741__auto___15153 = G__15154;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15151))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15151){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15151),args);
});})(g__12982__auto___15151))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12982__auto___15151){
return (function (seq15108){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15108));
});})(g__12982__auto___15151))
;


var g__12982__auto___15155 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12982__auto___15155){
return (function cljs$spec$impl$gen$bind(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15156 = arguments.length;
var i__11741__auto___15157 = (0);
while(true){
if((i__11741__auto___15157 < len__11740__auto___15156)){
args__11747__auto__.push((arguments[i__11741__auto___15157]));

var G__15158 = (i__11741__auto___15157 + (1));
i__11741__auto___15157 = G__15158;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15155))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15155){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15155),args);
});})(g__12982__auto___15155))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12982__auto___15155){
return (function (seq15109){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15109));
});})(g__12982__auto___15155))
;


var g__12982__auto___15159 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12982__auto___15159){
return (function cljs$spec$impl$gen$choose(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15160 = arguments.length;
var i__11741__auto___15161 = (0);
while(true){
if((i__11741__auto___15161 < len__11740__auto___15160)){
args__11747__auto__.push((arguments[i__11741__auto___15161]));

var G__15162 = (i__11741__auto___15161 + (1));
i__11741__auto___15161 = G__15162;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15159))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15159){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15159),args);
});})(g__12982__auto___15159))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12982__auto___15159){
return (function (seq15110){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15110));
});})(g__12982__auto___15159))
;


var g__12982__auto___15163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12982__auto___15163){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15164 = arguments.length;
var i__11741__auto___15165 = (0);
while(true){
if((i__11741__auto___15165 < len__11740__auto___15164)){
args__11747__auto__.push((arguments[i__11741__auto___15165]));

var G__15166 = (i__11741__auto___15165 + (1));
i__11741__auto___15165 = G__15166;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15163))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15163){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15163),args);
});})(g__12982__auto___15163))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12982__auto___15163){
return (function (seq15111){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15111));
});})(g__12982__auto___15163))
;


var g__12982__auto___15167 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12982__auto___15167){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15168 = arguments.length;
var i__11741__auto___15169 = (0);
while(true){
if((i__11741__auto___15169 < len__11740__auto___15168)){
args__11747__auto__.push((arguments[i__11741__auto___15169]));

var G__15170 = (i__11741__auto___15169 + (1));
i__11741__auto___15169 = G__15170;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15167))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15167){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15167),args);
});})(g__12982__auto___15167))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12982__auto___15167){
return (function (seq15112){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15112));
});})(g__12982__auto___15167))
;


var g__12982__auto___15171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12982__auto___15171){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15172 = arguments.length;
var i__11741__auto___15173 = (0);
while(true){
if((i__11741__auto___15173 < len__11740__auto___15172)){
args__11747__auto__.push((arguments[i__11741__auto___15173]));

var G__15174 = (i__11741__auto___15173 + (1));
i__11741__auto___15173 = G__15174;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15171))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15171){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15171),args);
});})(g__12982__auto___15171))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12982__auto___15171){
return (function (seq15113){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15113));
});})(g__12982__auto___15171))
;


var g__12982__auto___15175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12982__auto___15175){
return (function cljs$spec$impl$gen$sample(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15176 = arguments.length;
var i__11741__auto___15177 = (0);
while(true){
if((i__11741__auto___15177 < len__11740__auto___15176)){
args__11747__auto__.push((arguments[i__11741__auto___15177]));

var G__15178 = (i__11741__auto___15177 + (1));
i__11741__auto___15177 = G__15178;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15175))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15175),args);
});})(g__12982__auto___15175))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12982__auto___15175){
return (function (seq15114){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15114));
});})(g__12982__auto___15175))
;


var g__12982__auto___15179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12982__auto___15179){
return (function cljs$spec$impl$gen$return(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15180 = arguments.length;
var i__11741__auto___15181 = (0);
while(true){
if((i__11741__auto___15181 < len__11740__auto___15180)){
args__11747__auto__.push((arguments[i__11741__auto___15181]));

var G__15182 = (i__11741__auto___15181 + (1));
i__11741__auto___15181 = G__15182;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15179))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15179),args);
});})(g__12982__auto___15179))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12982__auto___15179){
return (function (seq15115){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15115));
});})(g__12982__auto___15179))
;


var g__12982__auto___15183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__12982__auto___15183){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15184 = arguments.length;
var i__11741__auto___15185 = (0);
while(true){
if((i__11741__auto___15185 < len__11740__auto___15184)){
args__11747__auto__.push((arguments[i__11741__auto___15185]));

var G__15186 = (i__11741__auto___15185 + (1));
i__11741__auto___15185 = G__15186;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15183))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15183),args);
});})(g__12982__auto___15183))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12982__auto___15183){
return (function (seq15116){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15116));
});})(g__12982__auto___15183))
;


var g__12982__auto___15187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__12982__auto___15187){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15188 = arguments.length;
var i__11741__auto___15189 = (0);
while(true){
if((i__11741__auto___15189 < len__11740__auto___15188)){
args__11747__auto__.push((arguments[i__11741__auto___15189]));

var G__15190 = (i__11741__auto___15189 + (1));
i__11741__auto___15189 = G__15190;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15187))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15187),args);
});})(g__12982__auto___15187))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__12982__auto___15187){
return (function (seq15117){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15117));
});})(g__12982__auto___15187))
;


var g__12982__auto___15191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__12982__auto___15191){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15192 = arguments.length;
var i__11741__auto___15193 = (0);
while(true){
if((i__11741__auto___15193 < len__11740__auto___15192)){
args__11747__auto__.push((arguments[i__11741__auto___15193]));

var G__15194 = (i__11741__auto___15193 + (1));
i__11741__auto___15193 = G__15194;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12982__auto___15191))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12982__auto___15191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12982__auto___15191),args);
});})(g__12982__auto___15191))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__12982__auto___15191){
return (function (seq15118){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15118));
});})(g__12982__auto___15191))
;

var g__12995__auto___15216 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12995__auto___15216){
return (function cljs$spec$impl$gen$any(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15217 = arguments.length;
var i__11741__auto___15218 = (0);
while(true){
if((i__11741__auto___15218 < len__11740__auto___15217)){
args__11747__auto__.push((arguments[i__11741__auto___15218]));

var G__15219 = (i__11741__auto___15218 + (1));
i__11741__auto___15218 = G__15219;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15216))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15216){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15216);
});})(g__12995__auto___15216))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12995__auto___15216){
return (function (seq15195){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15195));
});})(g__12995__auto___15216))
;


var g__12995__auto___15220 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12995__auto___15220){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15221 = arguments.length;
var i__11741__auto___15222 = (0);
while(true){
if((i__11741__auto___15222 < len__11740__auto___15221)){
args__11747__auto__.push((arguments[i__11741__auto___15222]));

var G__15223 = (i__11741__auto___15222 + (1));
i__11741__auto___15222 = G__15223;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15220))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15220){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15220);
});})(g__12995__auto___15220))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12995__auto___15220){
return (function (seq15196){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15196));
});})(g__12995__auto___15220))
;


var g__12995__auto___15224 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12995__auto___15224){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15225 = arguments.length;
var i__11741__auto___15226 = (0);
while(true){
if((i__11741__auto___15226 < len__11740__auto___15225)){
args__11747__auto__.push((arguments[i__11741__auto___15226]));

var G__15227 = (i__11741__auto___15226 + (1));
i__11741__auto___15226 = G__15227;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15224))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15224){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15224);
});})(g__12995__auto___15224))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12995__auto___15224){
return (function (seq15197){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15197));
});})(g__12995__auto___15224))
;


var g__12995__auto___15228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12995__auto___15228){
return (function cljs$spec$impl$gen$char(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15229 = arguments.length;
var i__11741__auto___15230 = (0);
while(true){
if((i__11741__auto___15230 < len__11740__auto___15229)){
args__11747__auto__.push((arguments[i__11741__auto___15230]));

var G__15231 = (i__11741__auto___15230 + (1));
i__11741__auto___15230 = G__15231;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15228))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15228){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15228);
});})(g__12995__auto___15228))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12995__auto___15228){
return (function (seq15198){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15198));
});})(g__12995__auto___15228))
;


var g__12995__auto___15232 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12995__auto___15232){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15233 = arguments.length;
var i__11741__auto___15234 = (0);
while(true){
if((i__11741__auto___15234 < len__11740__auto___15233)){
args__11747__auto__.push((arguments[i__11741__auto___15234]));

var G__15235 = (i__11741__auto___15234 + (1));
i__11741__auto___15234 = G__15235;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15232))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15232){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15232);
});})(g__12995__auto___15232))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12995__auto___15232){
return (function (seq15199){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15199));
});})(g__12995__auto___15232))
;


var g__12995__auto___15236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12995__auto___15236){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15237 = arguments.length;
var i__11741__auto___15238 = (0);
while(true){
if((i__11741__auto___15238 < len__11740__auto___15237)){
args__11747__auto__.push((arguments[i__11741__auto___15238]));

var G__15239 = (i__11741__auto___15238 + (1));
i__11741__auto___15238 = G__15239;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15236))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15236){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15236);
});})(g__12995__auto___15236))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12995__auto___15236){
return (function (seq15200){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15200));
});})(g__12995__auto___15236))
;


var g__12995__auto___15240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12995__auto___15240){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15241 = arguments.length;
var i__11741__auto___15242 = (0);
while(true){
if((i__11741__auto___15242 < len__11740__auto___15241)){
args__11747__auto__.push((arguments[i__11741__auto___15242]));

var G__15243 = (i__11741__auto___15242 + (1));
i__11741__auto___15242 = G__15243;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15240))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15240){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15240);
});})(g__12995__auto___15240))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12995__auto___15240){
return (function (seq15201){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15201));
});})(g__12995__auto___15240))
;


var g__12995__auto___15244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12995__auto___15244){
return (function cljs$spec$impl$gen$double(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15245 = arguments.length;
var i__11741__auto___15246 = (0);
while(true){
if((i__11741__auto___15246 < len__11740__auto___15245)){
args__11747__auto__.push((arguments[i__11741__auto___15246]));

var G__15247 = (i__11741__auto___15246 + (1));
i__11741__auto___15246 = G__15247;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15244))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15244){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15244);
});})(g__12995__auto___15244))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12995__auto___15244){
return (function (seq15202){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15202));
});})(g__12995__auto___15244))
;


var g__12995__auto___15248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12995__auto___15248){
return (function cljs$spec$impl$gen$int(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15249 = arguments.length;
var i__11741__auto___15250 = (0);
while(true){
if((i__11741__auto___15250 < len__11740__auto___15249)){
args__11747__auto__.push((arguments[i__11741__auto___15250]));

var G__15251 = (i__11741__auto___15250 + (1));
i__11741__auto___15250 = G__15251;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15248))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15248){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15248);
});})(g__12995__auto___15248))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12995__auto___15248){
return (function (seq15203){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15203));
});})(g__12995__auto___15248))
;


var g__12995__auto___15252 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12995__auto___15252){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15253 = arguments.length;
var i__11741__auto___15254 = (0);
while(true){
if((i__11741__auto___15254 < len__11740__auto___15253)){
args__11747__auto__.push((arguments[i__11741__auto___15254]));

var G__15255 = (i__11741__auto___15254 + (1));
i__11741__auto___15254 = G__15255;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15252))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15252){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15252);
});})(g__12995__auto___15252))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12995__auto___15252){
return (function (seq15204){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15204));
});})(g__12995__auto___15252))
;


var g__12995__auto___15256 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12995__auto___15256){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15257 = arguments.length;
var i__11741__auto___15258 = (0);
while(true){
if((i__11741__auto___15258 < len__11740__auto___15257)){
args__11747__auto__.push((arguments[i__11741__auto___15258]));

var G__15259 = (i__11741__auto___15258 + (1));
i__11741__auto___15258 = G__15259;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15256))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15256){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15256);
});})(g__12995__auto___15256))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12995__auto___15256){
return (function (seq15205){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15205));
});})(g__12995__auto___15256))
;


var g__12995__auto___15260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12995__auto___15260){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15261 = arguments.length;
var i__11741__auto___15262 = (0);
while(true){
if((i__11741__auto___15262 < len__11740__auto___15261)){
args__11747__auto__.push((arguments[i__11741__auto___15262]));

var G__15263 = (i__11741__auto___15262 + (1));
i__11741__auto___15262 = G__15263;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15260))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15260){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15260);
});})(g__12995__auto___15260))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12995__auto___15260){
return (function (seq15206){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15206));
});})(g__12995__auto___15260))
;


var g__12995__auto___15264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12995__auto___15264){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15265 = arguments.length;
var i__11741__auto___15266 = (0);
while(true){
if((i__11741__auto___15266 < len__11740__auto___15265)){
args__11747__auto__.push((arguments[i__11741__auto___15266]));

var G__15267 = (i__11741__auto___15266 + (1));
i__11741__auto___15266 = G__15267;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15264))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15264){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15264);
});})(g__12995__auto___15264))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12995__auto___15264){
return (function (seq15207){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15207));
});})(g__12995__auto___15264))
;


var g__12995__auto___15268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12995__auto___15268){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15269 = arguments.length;
var i__11741__auto___15270 = (0);
while(true){
if((i__11741__auto___15270 < len__11740__auto___15269)){
args__11747__auto__.push((arguments[i__11741__auto___15270]));

var G__15271 = (i__11741__auto___15270 + (1));
i__11741__auto___15270 = G__15271;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15268))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15268){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15268);
});})(g__12995__auto___15268))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12995__auto___15268){
return (function (seq15208){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15208));
});})(g__12995__auto___15268))
;


var g__12995__auto___15272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12995__auto___15272){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15273 = arguments.length;
var i__11741__auto___15274 = (0);
while(true){
if((i__11741__auto___15274 < len__11740__auto___15273)){
args__11747__auto__.push((arguments[i__11741__auto___15274]));

var G__15275 = (i__11741__auto___15274 + (1));
i__11741__auto___15274 = G__15275;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15272))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15272){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15272);
});})(g__12995__auto___15272))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12995__auto___15272){
return (function (seq15209){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15209));
});})(g__12995__auto___15272))
;


var g__12995__auto___15276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12995__auto___15276){
return (function cljs$spec$impl$gen$string(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15277 = arguments.length;
var i__11741__auto___15278 = (0);
while(true){
if((i__11741__auto___15278 < len__11740__auto___15277)){
args__11747__auto__.push((arguments[i__11741__auto___15278]));

var G__15279 = (i__11741__auto___15278 + (1));
i__11741__auto___15278 = G__15279;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15276))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15276){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15276);
});})(g__12995__auto___15276))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12995__auto___15276){
return (function (seq15210){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15210));
});})(g__12995__auto___15276))
;


var g__12995__auto___15280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12995__auto___15280){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15281 = arguments.length;
var i__11741__auto___15282 = (0);
while(true){
if((i__11741__auto___15282 < len__11740__auto___15281)){
args__11747__auto__.push((arguments[i__11741__auto___15282]));

var G__15283 = (i__11741__auto___15282 + (1));
i__11741__auto___15282 = G__15283;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15280))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15280){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15280);
});})(g__12995__auto___15280))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12995__auto___15280){
return (function (seq15211){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15211));
});})(g__12995__auto___15280))
;


var g__12995__auto___15284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12995__auto___15284){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15285 = arguments.length;
var i__11741__auto___15286 = (0);
while(true){
if((i__11741__auto___15286 < len__11740__auto___15285)){
args__11747__auto__.push((arguments[i__11741__auto___15286]));

var G__15287 = (i__11741__auto___15286 + (1));
i__11741__auto___15286 = G__15287;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15284))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15284){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15284);
});})(g__12995__auto___15284))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12995__auto___15284){
return (function (seq15212){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15212));
});})(g__12995__auto___15284))
;


var g__12995__auto___15288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12995__auto___15288){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15289 = arguments.length;
var i__11741__auto___15290 = (0);
while(true){
if((i__11741__auto___15290 < len__11740__auto___15289)){
args__11747__auto__.push((arguments[i__11741__auto___15290]));

var G__15291 = (i__11741__auto___15290 + (1));
i__11741__auto___15290 = G__15291;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15288))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15288){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15288);
});})(g__12995__auto___15288))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12995__auto___15288){
return (function (seq15213){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15213));
});})(g__12995__auto___15288))
;


var g__12995__auto___15292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12995__auto___15292){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15293 = arguments.length;
var i__11741__auto___15294 = (0);
while(true){
if((i__11741__auto___15294 < len__11740__auto___15293)){
args__11747__auto__.push((arguments[i__11741__auto___15294]));

var G__15295 = (i__11741__auto___15294 + (1));
i__11741__auto___15294 = G__15295;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15292))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15292){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15292);
});})(g__12995__auto___15292))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12995__auto___15292){
return (function (seq15214){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15214));
});})(g__12995__auto___15292))
;


var g__12995__auto___15296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12995__auto___15296){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15297 = arguments.length;
var i__11741__auto___15298 = (0);
while(true){
if((i__11741__auto___15298 < len__11740__auto___15297)){
args__11747__auto__.push((arguments[i__11741__auto___15298]));

var G__15299 = (i__11741__auto___15298 + (1));
i__11741__auto___15298 = G__15299;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});})(g__12995__auto___15296))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12995__auto___15296){
return (function (args){
return cljs.core.deref.call(null,g__12995__auto___15296);
});})(g__12995__auto___15296))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12995__auto___15296){
return (function (seq15215){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15215));
});})(g__12995__auto___15296))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__11747__auto__ = [];
var len__11740__auto___15302 = arguments.length;
var i__11741__auto___15303 = (0);
while(true){
if((i__11741__auto___15303 < len__11740__auto___15302)){
args__11747__auto__.push((arguments[i__11741__auto___15303]));

var G__15304 = (i__11741__auto___15303 + (1));
i__11741__auto___15303 = G__15304;
continue;
} else {
}
break;
}

var argseq__11748__auto__ = ((((0) < args__11747__auto__.length))?(new cljs.core.IndexedSeq(args__11747__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__11748__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__15300_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__15300_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq15301){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15301));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__15305_SHARP_){
return (new Date(p1__15305_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map