// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12364){
var map__12389 = p__12364;
var map__12389__$1 = ((((!((map__12389 == null)))?((((map__12389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12389):map__12389);
var m = map__12389__$1;
var n = cljs.core.get.call(null,map__12389__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12389__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12391_12413 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12392_12414 = null;
var count__12393_12415 = (0);
var i__12394_12416 = (0);
while(true){
if((i__12394_12416 < count__12393_12415)){
var f_12417 = cljs.core._nth.call(null,chunk__12392_12414,i__12394_12416);
cljs.core.println.call(null,"  ",f_12417);

var G__12418 = seq__12391_12413;
var G__12419 = chunk__12392_12414;
var G__12420 = count__12393_12415;
var G__12421 = (i__12394_12416 + (1));
seq__12391_12413 = G__12418;
chunk__12392_12414 = G__12419;
count__12393_12415 = G__12420;
i__12394_12416 = G__12421;
continue;
} else {
var temp__6753__auto___12422 = cljs.core.seq.call(null,seq__12391_12413);
if(temp__6753__auto___12422){
var seq__12391_12423__$1 = temp__6753__auto___12422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12391_12423__$1)){
var c__10957__auto___12424 = cljs.core.chunk_first.call(null,seq__12391_12423__$1);
var G__12425 = cljs.core.chunk_rest.call(null,seq__12391_12423__$1);
var G__12426 = c__10957__auto___12424;
var G__12427 = cljs.core.count.call(null,c__10957__auto___12424);
var G__12428 = (0);
seq__12391_12413 = G__12425;
chunk__12392_12414 = G__12426;
count__12393_12415 = G__12427;
i__12394_12416 = G__12428;
continue;
} else {
var f_12429 = cljs.core.first.call(null,seq__12391_12423__$1);
cljs.core.println.call(null,"  ",f_12429);

var G__12430 = cljs.core.next.call(null,seq__12391_12423__$1);
var G__12431 = null;
var G__12432 = (0);
var G__12433 = (0);
seq__12391_12413 = G__12430;
chunk__12392_12414 = G__12431;
count__12393_12415 = G__12432;
i__12394_12416 = G__12433;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12434 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10051__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10051__auto__)){
return or__10051__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12434);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12434)))?cljs.core.second.call(null,arglists_12434):arglists_12434));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12395_12435 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12396_12436 = null;
var count__12397_12437 = (0);
var i__12398_12438 = (0);
while(true){
if((i__12398_12438 < count__12397_12437)){
var vec__12399_12439 = cljs.core._nth.call(null,chunk__12396_12436,i__12398_12438);
var name_12440 = cljs.core.nth.call(null,vec__12399_12439,(0),null);
var map__12402_12441 = cljs.core.nth.call(null,vec__12399_12439,(1),null);
var map__12402_12442__$1 = ((((!((map__12402_12441 == null)))?((((map__12402_12441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12402_12441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12402_12441):map__12402_12441);
var doc_12443 = cljs.core.get.call(null,map__12402_12442__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12444 = cljs.core.get.call(null,map__12402_12442__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12440);

cljs.core.println.call(null," ",arglists_12444);

if(cljs.core.truth_(doc_12443)){
cljs.core.println.call(null," ",doc_12443);
} else {
}

var G__12445 = seq__12395_12435;
var G__12446 = chunk__12396_12436;
var G__12447 = count__12397_12437;
var G__12448 = (i__12398_12438 + (1));
seq__12395_12435 = G__12445;
chunk__12396_12436 = G__12446;
count__12397_12437 = G__12447;
i__12398_12438 = G__12448;
continue;
} else {
var temp__6753__auto___12449 = cljs.core.seq.call(null,seq__12395_12435);
if(temp__6753__auto___12449){
var seq__12395_12450__$1 = temp__6753__auto___12449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12395_12450__$1)){
var c__10957__auto___12451 = cljs.core.chunk_first.call(null,seq__12395_12450__$1);
var G__12452 = cljs.core.chunk_rest.call(null,seq__12395_12450__$1);
var G__12453 = c__10957__auto___12451;
var G__12454 = cljs.core.count.call(null,c__10957__auto___12451);
var G__12455 = (0);
seq__12395_12435 = G__12452;
chunk__12396_12436 = G__12453;
count__12397_12437 = G__12454;
i__12398_12438 = G__12455;
continue;
} else {
var vec__12404_12456 = cljs.core.first.call(null,seq__12395_12450__$1);
var name_12457 = cljs.core.nth.call(null,vec__12404_12456,(0),null);
var map__12407_12458 = cljs.core.nth.call(null,vec__12404_12456,(1),null);
var map__12407_12459__$1 = ((((!((map__12407_12458 == null)))?((((map__12407_12458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12407_12458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12407_12458):map__12407_12458);
var doc_12460 = cljs.core.get.call(null,map__12407_12459__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12461 = cljs.core.get.call(null,map__12407_12459__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12457);

cljs.core.println.call(null," ",arglists_12461);

if(cljs.core.truth_(doc_12460)){
cljs.core.println.call(null," ",doc_12460);
} else {
}

var G__12462 = cljs.core.next.call(null,seq__12395_12450__$1);
var G__12463 = null;
var G__12464 = (0);
var G__12465 = (0);
seq__12395_12435 = G__12462;
chunk__12396_12436 = G__12463;
count__12397_12437 = G__12464;
i__12398_12438 = G__12465;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__12409 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12410 = null;
var count__12411 = (0);
var i__12412 = (0);
while(true){
if((i__12412 < count__12411)){
var role = cljs.core._nth.call(null,chunk__12410,i__12412);
var temp__6753__auto___12466__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12466__$1)){
var spec_12467 = temp__6753__auto___12466__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12467));
} else {
}

var G__12468 = seq__12409;
var G__12469 = chunk__12410;
var G__12470 = count__12411;
var G__12471 = (i__12412 + (1));
seq__12409 = G__12468;
chunk__12410 = G__12469;
count__12411 = G__12470;
i__12412 = G__12471;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__12409);
if(temp__6753__auto____$1){
var seq__12409__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12409__$1)){
var c__10957__auto__ = cljs.core.chunk_first.call(null,seq__12409__$1);
var G__12472 = cljs.core.chunk_rest.call(null,seq__12409__$1);
var G__12473 = c__10957__auto__;
var G__12474 = cljs.core.count.call(null,c__10957__auto__);
var G__12475 = (0);
seq__12409 = G__12472;
chunk__12410 = G__12473;
count__12411 = G__12474;
i__12412 = G__12475;
continue;
} else {
var role = cljs.core.first.call(null,seq__12409__$1);
var temp__6753__auto___12476__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12476__$2)){
var spec_12477 = temp__6753__auto___12476__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12477));
} else {
}

var G__12478 = cljs.core.next.call(null,seq__12409__$1);
var G__12479 = null;
var G__12480 = (0);
var G__12481 = (0);
seq__12409 = G__12478;
chunk__12410 = G__12479;
count__12411 = G__12480;
i__12412 = G__12481;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map