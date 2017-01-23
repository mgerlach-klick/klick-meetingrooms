// Compiled by ClojureScript 1.9.293 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10487 = arguments.length;
var i__8709__auto___10488 = (0);
while(true){
if((i__8709__auto___10488 < len__8708__auto___10487)){
args__8715__auto__.push((arguments[i__8709__auto___10488]));

var G__10489 = (i__8709__auto___10488 + (1));
i__8709__auto___10488 = G__10489;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq10486){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10486));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10491 = arguments.length;
var i__8709__auto___10492 = (0);
while(true){
if((i__8709__auto___10492 < len__8708__auto___10491)){
args__8715__auto__.push((arguments[i__8709__auto___10492]));

var G__10493 = (i__8709__auto___10492 + (1));
i__8709__auto___10492 = G__10493;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq10490){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10490));
});

var g_QMARK__10494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_10495 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__10494){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__10494))
,null));
var mkg_10496 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__10494,g_10495){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__10494,g_10495))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__10494,g_10495,mkg_10496){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__10494).call(null,x);
});})(g_QMARK__10494,g_10495,mkg_10496))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__10494,g_10495,mkg_10496){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_10496).call(null,gfn);
});})(g_QMARK__10494,g_10495,mkg_10496))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__10494,g_10495,mkg_10496){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_10495).call(null,generator);
});})(g_QMARK__10494,g_10495,mkg_10496))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10458__auto___10515 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__10458__auto___10515){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10516 = arguments.length;
var i__8709__auto___10517 = (0);
while(true){
if((i__8709__auto___10517 < len__8708__auto___10516)){
args__8715__auto__.push((arguments[i__8709__auto___10517]));

var G__10518 = (i__8709__auto___10517 + (1));
i__8709__auto___10517 = G__10518;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10515))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10515){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10515),args);
});})(g__10458__auto___10515))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__10458__auto___10515){
return (function (seq10497){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10497));
});})(g__10458__auto___10515))
;


var g__10458__auto___10519 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__10458__auto___10519){
return (function cljs$spec$impl$gen$list(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10520 = arguments.length;
var i__8709__auto___10521 = (0);
while(true){
if((i__8709__auto___10521 < len__8708__auto___10520)){
args__8715__auto__.push((arguments[i__8709__auto___10521]));

var G__10522 = (i__8709__auto___10521 + (1));
i__8709__auto___10521 = G__10522;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10519))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10519){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10519),args);
});})(g__10458__auto___10519))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__10458__auto___10519){
return (function (seq10498){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10498));
});})(g__10458__auto___10519))
;


var g__10458__auto___10523 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__10458__auto___10523){
return (function cljs$spec$impl$gen$map(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10524 = arguments.length;
var i__8709__auto___10525 = (0);
while(true){
if((i__8709__auto___10525 < len__8708__auto___10524)){
args__8715__auto__.push((arguments[i__8709__auto___10525]));

var G__10526 = (i__8709__auto___10525 + (1));
i__8709__auto___10525 = G__10526;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10523))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10523){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10523),args);
});})(g__10458__auto___10523))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__10458__auto___10523){
return (function (seq10499){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10499));
});})(g__10458__auto___10523))
;


var g__10458__auto___10527 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__10458__auto___10527){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10528 = arguments.length;
var i__8709__auto___10529 = (0);
while(true){
if((i__8709__auto___10529 < len__8708__auto___10528)){
args__8715__auto__.push((arguments[i__8709__auto___10529]));

var G__10530 = (i__8709__auto___10529 + (1));
i__8709__auto___10529 = G__10530;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10527))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10527){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10527),args);
});})(g__10458__auto___10527))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__10458__auto___10527){
return (function (seq10500){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10500));
});})(g__10458__auto___10527))
;


var g__10458__auto___10531 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__10458__auto___10531){
return (function cljs$spec$impl$gen$set(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10532 = arguments.length;
var i__8709__auto___10533 = (0);
while(true){
if((i__8709__auto___10533 < len__8708__auto___10532)){
args__8715__auto__.push((arguments[i__8709__auto___10533]));

var G__10534 = (i__8709__auto___10533 + (1));
i__8709__auto___10533 = G__10534;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10531))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10531){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10531),args);
});})(g__10458__auto___10531))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__10458__auto___10531){
return (function (seq10501){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10501));
});})(g__10458__auto___10531))
;


var g__10458__auto___10535 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__10458__auto___10535){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10536 = arguments.length;
var i__8709__auto___10537 = (0);
while(true){
if((i__8709__auto___10537 < len__8708__auto___10536)){
args__8715__auto__.push((arguments[i__8709__auto___10537]));

var G__10538 = (i__8709__auto___10537 + (1));
i__8709__auto___10537 = G__10538;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10535))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10535){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10535),args);
});})(g__10458__auto___10535))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__10458__auto___10535){
return (function (seq10502){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10502));
});})(g__10458__auto___10535))
;


var g__10458__auto___10539 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__10458__auto___10539){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10540 = arguments.length;
var i__8709__auto___10541 = (0);
while(true){
if((i__8709__auto___10541 < len__8708__auto___10540)){
args__8715__auto__.push((arguments[i__8709__auto___10541]));

var G__10542 = (i__8709__auto___10541 + (1));
i__8709__auto___10541 = G__10542;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10539))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10539){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10539),args);
});})(g__10458__auto___10539))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__10458__auto___10539){
return (function (seq10503){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10503));
});})(g__10458__auto___10539))
;


var g__10458__auto___10543 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__10458__auto___10543){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10544 = arguments.length;
var i__8709__auto___10545 = (0);
while(true){
if((i__8709__auto___10545 < len__8708__auto___10544)){
args__8715__auto__.push((arguments[i__8709__auto___10545]));

var G__10546 = (i__8709__auto___10545 + (1));
i__8709__auto___10545 = G__10546;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10543))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10543){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10543),args);
});})(g__10458__auto___10543))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__10458__auto___10543){
return (function (seq10504){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10504));
});})(g__10458__auto___10543))
;


var g__10458__auto___10547 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__10458__auto___10547){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10548 = arguments.length;
var i__8709__auto___10549 = (0);
while(true){
if((i__8709__auto___10549 < len__8708__auto___10548)){
args__8715__auto__.push((arguments[i__8709__auto___10549]));

var G__10550 = (i__8709__auto___10549 + (1));
i__8709__auto___10549 = G__10550;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10547))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10547){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10547),args);
});})(g__10458__auto___10547))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__10458__auto___10547){
return (function (seq10505){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10505));
});})(g__10458__auto___10547))
;


var g__10458__auto___10551 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__10458__auto___10551){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10552 = arguments.length;
var i__8709__auto___10553 = (0);
while(true){
if((i__8709__auto___10553 < len__8708__auto___10552)){
args__8715__auto__.push((arguments[i__8709__auto___10553]));

var G__10554 = (i__8709__auto___10553 + (1));
i__8709__auto___10553 = G__10554;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10551))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10551){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10551),args);
});})(g__10458__auto___10551))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__10458__auto___10551){
return (function (seq10506){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10506));
});})(g__10458__auto___10551))
;


var g__10458__auto___10555 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__10458__auto___10555){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10556 = arguments.length;
var i__8709__auto___10557 = (0);
while(true){
if((i__8709__auto___10557 < len__8708__auto___10556)){
args__8715__auto__.push((arguments[i__8709__auto___10557]));

var G__10558 = (i__8709__auto___10557 + (1));
i__8709__auto___10557 = G__10558;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10555))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10555){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10555),args);
});})(g__10458__auto___10555))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__10458__auto___10555){
return (function (seq10507){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10507));
});})(g__10458__auto___10555))
;


var g__10458__auto___10559 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__10458__auto___10559){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10560 = arguments.length;
var i__8709__auto___10561 = (0);
while(true){
if((i__8709__auto___10561 < len__8708__auto___10560)){
args__8715__auto__.push((arguments[i__8709__auto___10561]));

var G__10562 = (i__8709__auto___10561 + (1));
i__8709__auto___10561 = G__10562;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10559))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10559){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10559),args);
});})(g__10458__auto___10559))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__10458__auto___10559){
return (function (seq10508){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10508));
});})(g__10458__auto___10559))
;


var g__10458__auto___10563 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__10458__auto___10563){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10564 = arguments.length;
var i__8709__auto___10565 = (0);
while(true){
if((i__8709__auto___10565 < len__8708__auto___10564)){
args__8715__auto__.push((arguments[i__8709__auto___10565]));

var G__10566 = (i__8709__auto___10565 + (1));
i__8709__auto___10565 = G__10566;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10563))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10563){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10563),args);
});})(g__10458__auto___10563))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__10458__auto___10563){
return (function (seq10509){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10509));
});})(g__10458__auto___10563))
;


var g__10458__auto___10567 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__10458__auto___10567){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10568 = arguments.length;
var i__8709__auto___10569 = (0);
while(true){
if((i__8709__auto___10569 < len__8708__auto___10568)){
args__8715__auto__.push((arguments[i__8709__auto___10569]));

var G__10570 = (i__8709__auto___10569 + (1));
i__8709__auto___10569 = G__10570;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10567))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10567){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10567),args);
});})(g__10458__auto___10567))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__10458__auto___10567){
return (function (seq10510){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10510));
});})(g__10458__auto___10567))
;


var g__10458__auto___10571 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__10458__auto___10571){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10572 = arguments.length;
var i__8709__auto___10573 = (0);
while(true){
if((i__8709__auto___10573 < len__8708__auto___10572)){
args__8715__auto__.push((arguments[i__8709__auto___10573]));

var G__10574 = (i__8709__auto___10573 + (1));
i__8709__auto___10573 = G__10574;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10571))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10571){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10571),args);
});})(g__10458__auto___10571))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__10458__auto___10571){
return (function (seq10511){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10511));
});})(g__10458__auto___10571))
;


var g__10458__auto___10575 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__10458__auto___10575){
return (function cljs$spec$impl$gen$return(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10576 = arguments.length;
var i__8709__auto___10577 = (0);
while(true){
if((i__8709__auto___10577 < len__8708__auto___10576)){
args__8715__auto__.push((arguments[i__8709__auto___10577]));

var G__10578 = (i__8709__auto___10577 + (1));
i__8709__auto___10577 = G__10578;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10575))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10575){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10575),args);
});})(g__10458__auto___10575))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__10458__auto___10575){
return (function (seq10512){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10512));
});})(g__10458__auto___10575))
;


var g__10458__auto___10579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__10458__auto___10579){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10580 = arguments.length;
var i__8709__auto___10581 = (0);
while(true){
if((i__8709__auto___10581 < len__8708__auto___10580)){
args__8715__auto__.push((arguments[i__8709__auto___10581]));

var G__10582 = (i__8709__auto___10581 + (1));
i__8709__auto___10581 = G__10582;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10579))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10579),args);
});})(g__10458__auto___10579))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10458__auto___10579){
return (function (seq10513){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10513));
});})(g__10458__auto___10579))
;


var g__10458__auto___10583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__10458__auto___10583){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10584 = arguments.length;
var i__8709__auto___10585 = (0);
while(true){
if((i__8709__auto___10585 < len__8708__auto___10584)){
args__8715__auto__.push((arguments[i__8709__auto___10585]));

var G__10586 = (i__8709__auto___10585 + (1));
i__8709__auto___10585 = G__10586;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10458__auto___10583))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10458__auto___10583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10458__auto___10583),args);
});})(g__10458__auto___10583))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__10458__auto___10583){
return (function (seq10514){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10514));
});})(g__10458__auto___10583))
;

var g__10471__auto___10608 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__10471__auto___10608){
return (function cljs$spec$impl$gen$any(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10609 = arguments.length;
var i__8709__auto___10610 = (0);
while(true){
if((i__8709__auto___10610 < len__8708__auto___10609)){
args__8715__auto__.push((arguments[i__8709__auto___10610]));

var G__10611 = (i__8709__auto___10610 + (1));
i__8709__auto___10610 = G__10611;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10608))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10608){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10608);
});})(g__10471__auto___10608))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__10471__auto___10608){
return (function (seq10587){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10587));
});})(g__10471__auto___10608))
;


var g__10471__auto___10612 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__10471__auto___10612){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10613 = arguments.length;
var i__8709__auto___10614 = (0);
while(true){
if((i__8709__auto___10614 < len__8708__auto___10613)){
args__8715__auto__.push((arguments[i__8709__auto___10614]));

var G__10615 = (i__8709__auto___10614 + (1));
i__8709__auto___10614 = G__10615;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10612))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10612){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10612);
});})(g__10471__auto___10612))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__10471__auto___10612){
return (function (seq10588){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10588));
});})(g__10471__auto___10612))
;


var g__10471__auto___10616 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__10471__auto___10616){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10617 = arguments.length;
var i__8709__auto___10618 = (0);
while(true){
if((i__8709__auto___10618 < len__8708__auto___10617)){
args__8715__auto__.push((arguments[i__8709__auto___10618]));

var G__10619 = (i__8709__auto___10618 + (1));
i__8709__auto___10618 = G__10619;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10616))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10616){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10616);
});})(g__10471__auto___10616))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__10471__auto___10616){
return (function (seq10589){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10589));
});})(g__10471__auto___10616))
;


var g__10471__auto___10620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__10471__auto___10620){
return (function cljs$spec$impl$gen$char(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10621 = arguments.length;
var i__8709__auto___10622 = (0);
while(true){
if((i__8709__auto___10622 < len__8708__auto___10621)){
args__8715__auto__.push((arguments[i__8709__auto___10622]));

var G__10623 = (i__8709__auto___10622 + (1));
i__8709__auto___10622 = G__10623;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10620))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10620){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10620);
});})(g__10471__auto___10620))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__10471__auto___10620){
return (function (seq10590){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10590));
});})(g__10471__auto___10620))
;


var g__10471__auto___10624 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__10471__auto___10624){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10625 = arguments.length;
var i__8709__auto___10626 = (0);
while(true){
if((i__8709__auto___10626 < len__8708__auto___10625)){
args__8715__auto__.push((arguments[i__8709__auto___10626]));

var G__10627 = (i__8709__auto___10626 + (1));
i__8709__auto___10626 = G__10627;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10624))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10624){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10624);
});})(g__10471__auto___10624))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__10471__auto___10624){
return (function (seq10591){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10591));
});})(g__10471__auto___10624))
;


var g__10471__auto___10628 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__10471__auto___10628){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10629 = arguments.length;
var i__8709__auto___10630 = (0);
while(true){
if((i__8709__auto___10630 < len__8708__auto___10629)){
args__8715__auto__.push((arguments[i__8709__auto___10630]));

var G__10631 = (i__8709__auto___10630 + (1));
i__8709__auto___10630 = G__10631;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10628))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10628){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10628);
});})(g__10471__auto___10628))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__10471__auto___10628){
return (function (seq10592){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10592));
});})(g__10471__auto___10628))
;


var g__10471__auto___10632 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__10471__auto___10632){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10633 = arguments.length;
var i__8709__auto___10634 = (0);
while(true){
if((i__8709__auto___10634 < len__8708__auto___10633)){
args__8715__auto__.push((arguments[i__8709__auto___10634]));

var G__10635 = (i__8709__auto___10634 + (1));
i__8709__auto___10634 = G__10635;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10632))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10632){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10632);
});})(g__10471__auto___10632))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__10471__auto___10632){
return (function (seq10593){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10593));
});})(g__10471__auto___10632))
;


var g__10471__auto___10636 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__10471__auto___10636){
return (function cljs$spec$impl$gen$double(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10637 = arguments.length;
var i__8709__auto___10638 = (0);
while(true){
if((i__8709__auto___10638 < len__8708__auto___10637)){
args__8715__auto__.push((arguments[i__8709__auto___10638]));

var G__10639 = (i__8709__auto___10638 + (1));
i__8709__auto___10638 = G__10639;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10636))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10636){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10636);
});})(g__10471__auto___10636))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__10471__auto___10636){
return (function (seq10594){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10594));
});})(g__10471__auto___10636))
;


var g__10471__auto___10640 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__10471__auto___10640){
return (function cljs$spec$impl$gen$int(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10641 = arguments.length;
var i__8709__auto___10642 = (0);
while(true){
if((i__8709__auto___10642 < len__8708__auto___10641)){
args__8715__auto__.push((arguments[i__8709__auto___10642]));

var G__10643 = (i__8709__auto___10642 + (1));
i__8709__auto___10642 = G__10643;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10640))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10640){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10640);
});})(g__10471__auto___10640))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__10471__auto___10640){
return (function (seq10595){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10595));
});})(g__10471__auto___10640))
;


var g__10471__auto___10644 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__10471__auto___10644){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10645 = arguments.length;
var i__8709__auto___10646 = (0);
while(true){
if((i__8709__auto___10646 < len__8708__auto___10645)){
args__8715__auto__.push((arguments[i__8709__auto___10646]));

var G__10647 = (i__8709__auto___10646 + (1));
i__8709__auto___10646 = G__10647;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10644))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10644){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10644);
});})(g__10471__auto___10644))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__10471__auto___10644){
return (function (seq10596){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10596));
});})(g__10471__auto___10644))
;


var g__10471__auto___10648 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__10471__auto___10648){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10649 = arguments.length;
var i__8709__auto___10650 = (0);
while(true){
if((i__8709__auto___10650 < len__8708__auto___10649)){
args__8715__auto__.push((arguments[i__8709__auto___10650]));

var G__10651 = (i__8709__auto___10650 + (1));
i__8709__auto___10650 = G__10651;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10648))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10648){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10648);
});})(g__10471__auto___10648))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__10471__auto___10648){
return (function (seq10597){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10597));
});})(g__10471__auto___10648))
;


var g__10471__auto___10652 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__10471__auto___10652){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10653 = arguments.length;
var i__8709__auto___10654 = (0);
while(true){
if((i__8709__auto___10654 < len__8708__auto___10653)){
args__8715__auto__.push((arguments[i__8709__auto___10654]));

var G__10655 = (i__8709__auto___10654 + (1));
i__8709__auto___10654 = G__10655;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10652))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10652){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10652);
});})(g__10471__auto___10652))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__10471__auto___10652){
return (function (seq10598){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10598));
});})(g__10471__auto___10652))
;


var g__10471__auto___10656 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__10471__auto___10656){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10657 = arguments.length;
var i__8709__auto___10658 = (0);
while(true){
if((i__8709__auto___10658 < len__8708__auto___10657)){
args__8715__auto__.push((arguments[i__8709__auto___10658]));

var G__10659 = (i__8709__auto___10658 + (1));
i__8709__auto___10658 = G__10659;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10656))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10656){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10656);
});})(g__10471__auto___10656))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__10471__auto___10656){
return (function (seq10599){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10599));
});})(g__10471__auto___10656))
;


var g__10471__auto___10660 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__10471__auto___10660){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10661 = arguments.length;
var i__8709__auto___10662 = (0);
while(true){
if((i__8709__auto___10662 < len__8708__auto___10661)){
args__8715__auto__.push((arguments[i__8709__auto___10662]));

var G__10663 = (i__8709__auto___10662 + (1));
i__8709__auto___10662 = G__10663;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10660))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10660){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10660);
});})(g__10471__auto___10660))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__10471__auto___10660){
return (function (seq10600){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10600));
});})(g__10471__auto___10660))
;


var g__10471__auto___10664 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__10471__auto___10664){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10665 = arguments.length;
var i__8709__auto___10666 = (0);
while(true){
if((i__8709__auto___10666 < len__8708__auto___10665)){
args__8715__auto__.push((arguments[i__8709__auto___10666]));

var G__10667 = (i__8709__auto___10666 + (1));
i__8709__auto___10666 = G__10667;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10664))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10664){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10664);
});})(g__10471__auto___10664))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__10471__auto___10664){
return (function (seq10601){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10601));
});})(g__10471__auto___10664))
;


var g__10471__auto___10668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__10471__auto___10668){
return (function cljs$spec$impl$gen$string(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10669 = arguments.length;
var i__8709__auto___10670 = (0);
while(true){
if((i__8709__auto___10670 < len__8708__auto___10669)){
args__8715__auto__.push((arguments[i__8709__auto___10670]));

var G__10671 = (i__8709__auto___10670 + (1));
i__8709__auto___10670 = G__10671;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10668))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10668){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10668);
});})(g__10471__auto___10668))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__10471__auto___10668){
return (function (seq10602){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10602));
});})(g__10471__auto___10668))
;


var g__10471__auto___10672 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__10471__auto___10672){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10673 = arguments.length;
var i__8709__auto___10674 = (0);
while(true){
if((i__8709__auto___10674 < len__8708__auto___10673)){
args__8715__auto__.push((arguments[i__8709__auto___10674]));

var G__10675 = (i__8709__auto___10674 + (1));
i__8709__auto___10674 = G__10675;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10672))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10672){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10672);
});})(g__10471__auto___10672))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__10471__auto___10672){
return (function (seq10603){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10603));
});})(g__10471__auto___10672))
;


var g__10471__auto___10676 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__10471__auto___10676){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10677 = arguments.length;
var i__8709__auto___10678 = (0);
while(true){
if((i__8709__auto___10678 < len__8708__auto___10677)){
args__8715__auto__.push((arguments[i__8709__auto___10678]));

var G__10679 = (i__8709__auto___10678 + (1));
i__8709__auto___10678 = G__10679;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10676))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10676){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10676);
});})(g__10471__auto___10676))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__10471__auto___10676){
return (function (seq10604){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10604));
});})(g__10471__auto___10676))
;


var g__10471__auto___10680 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__10471__auto___10680){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10681 = arguments.length;
var i__8709__auto___10682 = (0);
while(true){
if((i__8709__auto___10682 < len__8708__auto___10681)){
args__8715__auto__.push((arguments[i__8709__auto___10682]));

var G__10683 = (i__8709__auto___10682 + (1));
i__8709__auto___10682 = G__10683;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10680))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10680){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10680);
});})(g__10471__auto___10680))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__10471__auto___10680){
return (function (seq10605){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10605));
});})(g__10471__auto___10680))
;


var g__10471__auto___10684 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__10471__auto___10684){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10685 = arguments.length;
var i__8709__auto___10686 = (0);
while(true){
if((i__8709__auto___10686 < len__8708__auto___10685)){
args__8715__auto__.push((arguments[i__8709__auto___10686]));

var G__10687 = (i__8709__auto___10686 + (1));
i__8709__auto___10686 = G__10687;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10684))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10684){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10684);
});})(g__10471__auto___10684))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__10471__auto___10684){
return (function (seq10606){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10606));
});})(g__10471__auto___10684))
;


var g__10471__auto___10688 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__10471__auto___10688){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10689 = arguments.length;
var i__8709__auto___10690 = (0);
while(true){
if((i__8709__auto___10690 < len__8708__auto___10689)){
args__8715__auto__.push((arguments[i__8709__auto___10690]));

var G__10691 = (i__8709__auto___10690 + (1));
i__8709__auto___10690 = G__10691;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(g__10471__auto___10688))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10471__auto___10688){
return (function (args){
return cljs.core.deref.call(null,g__10471__auto___10688);
});})(g__10471__auto___10688))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__10471__auto___10688){
return (function (seq10607){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10607));
});})(g__10471__auto___10688))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8715__auto__ = [];
var len__8708__auto___10694 = arguments.length;
var i__8709__auto___10695 = (0);
while(true){
if((i__8709__auto___10695 < len__8708__auto___10694)){
args__8715__auto__.push((arguments[i__8709__auto___10695]));

var G__10696 = (i__8709__auto___10695 + (1));
i__8709__auto___10695 = G__10696;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__10692_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__10692_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq10693){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10693));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__10697_SHARP_){
return (new Date(p1__10697_SHARP_));
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