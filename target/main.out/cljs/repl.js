// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12357){
var map__12382 = p__12357;
var map__12382__$1 = ((((!((map__12382 == null)))?((((map__12382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12382):map__12382);
var m = map__12382__$1;
var n = cljs.core.get.call(null,map__12382__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12382__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12384_12406 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12385_12407 = null;
var count__12386_12408 = (0);
var i__12387_12409 = (0);
while(true){
if((i__12387_12409 < count__12386_12408)){
var f_12410 = cljs.core._nth.call(null,chunk__12385_12407,i__12387_12409);
cljs.core.println.call(null,"  ",f_12410);

var G__12411 = seq__12384_12406;
var G__12412 = chunk__12385_12407;
var G__12413 = count__12386_12408;
var G__12414 = (i__12387_12409 + (1));
seq__12384_12406 = G__12411;
chunk__12385_12407 = G__12412;
count__12386_12408 = G__12413;
i__12387_12409 = G__12414;
continue;
} else {
var temp__6753__auto___12415 = cljs.core.seq.call(null,seq__12384_12406);
if(temp__6753__auto___12415){
var seq__12384_12416__$1 = temp__6753__auto___12415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12384_12416__$1)){
var c__8398__auto___12417 = cljs.core.chunk_first.call(null,seq__12384_12416__$1);
var G__12418 = cljs.core.chunk_rest.call(null,seq__12384_12416__$1);
var G__12419 = c__8398__auto___12417;
var G__12420 = cljs.core.count.call(null,c__8398__auto___12417);
var G__12421 = (0);
seq__12384_12406 = G__12418;
chunk__12385_12407 = G__12419;
count__12386_12408 = G__12420;
i__12387_12409 = G__12421;
continue;
} else {
var f_12422 = cljs.core.first.call(null,seq__12384_12416__$1);
cljs.core.println.call(null,"  ",f_12422);

var G__12423 = cljs.core.next.call(null,seq__12384_12416__$1);
var G__12424 = null;
var G__12425 = (0);
var G__12426 = (0);
seq__12384_12406 = G__12423;
chunk__12385_12407 = G__12424;
count__12386_12408 = G__12425;
i__12387_12409 = G__12426;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12427 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7492__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7492__auto__)){
return or__7492__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12427);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12427)))?cljs.core.second.call(null,arglists_12427):arglists_12427));
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
var seq__12388_12428 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12389_12429 = null;
var count__12390_12430 = (0);
var i__12391_12431 = (0);
while(true){
if((i__12391_12431 < count__12390_12430)){
var vec__12392_12432 = cljs.core._nth.call(null,chunk__12389_12429,i__12391_12431);
var name_12433 = cljs.core.nth.call(null,vec__12392_12432,(0),null);
var map__12395_12434 = cljs.core.nth.call(null,vec__12392_12432,(1),null);
var map__12395_12435__$1 = ((((!((map__12395_12434 == null)))?((((map__12395_12434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12395_12434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12395_12434):map__12395_12434);
var doc_12436 = cljs.core.get.call(null,map__12395_12435__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12437 = cljs.core.get.call(null,map__12395_12435__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12433);

cljs.core.println.call(null," ",arglists_12437);

if(cljs.core.truth_(doc_12436)){
cljs.core.println.call(null," ",doc_12436);
} else {
}

var G__12438 = seq__12388_12428;
var G__12439 = chunk__12389_12429;
var G__12440 = count__12390_12430;
var G__12441 = (i__12391_12431 + (1));
seq__12388_12428 = G__12438;
chunk__12389_12429 = G__12439;
count__12390_12430 = G__12440;
i__12391_12431 = G__12441;
continue;
} else {
var temp__6753__auto___12442 = cljs.core.seq.call(null,seq__12388_12428);
if(temp__6753__auto___12442){
var seq__12388_12443__$1 = temp__6753__auto___12442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12388_12443__$1)){
var c__8398__auto___12444 = cljs.core.chunk_first.call(null,seq__12388_12443__$1);
var G__12445 = cljs.core.chunk_rest.call(null,seq__12388_12443__$1);
var G__12446 = c__8398__auto___12444;
var G__12447 = cljs.core.count.call(null,c__8398__auto___12444);
var G__12448 = (0);
seq__12388_12428 = G__12445;
chunk__12389_12429 = G__12446;
count__12390_12430 = G__12447;
i__12391_12431 = G__12448;
continue;
} else {
var vec__12397_12449 = cljs.core.first.call(null,seq__12388_12443__$1);
var name_12450 = cljs.core.nth.call(null,vec__12397_12449,(0),null);
var map__12400_12451 = cljs.core.nth.call(null,vec__12397_12449,(1),null);
var map__12400_12452__$1 = ((((!((map__12400_12451 == null)))?((((map__12400_12451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12400_12451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12400_12451):map__12400_12451);
var doc_12453 = cljs.core.get.call(null,map__12400_12452__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12454 = cljs.core.get.call(null,map__12400_12452__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12450);

cljs.core.println.call(null," ",arglists_12454);

if(cljs.core.truth_(doc_12453)){
cljs.core.println.call(null," ",doc_12453);
} else {
}

var G__12455 = cljs.core.next.call(null,seq__12388_12443__$1);
var G__12456 = null;
var G__12457 = (0);
var G__12458 = (0);
seq__12388_12428 = G__12455;
chunk__12389_12429 = G__12456;
count__12390_12430 = G__12457;
i__12391_12431 = G__12458;
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

var seq__12402 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12403 = null;
var count__12404 = (0);
var i__12405 = (0);
while(true){
if((i__12405 < count__12404)){
var role = cljs.core._nth.call(null,chunk__12403,i__12405);
var temp__6753__auto___12459__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12459__$1)){
var spec_12460 = temp__6753__auto___12459__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12460));
} else {
}

var G__12461 = seq__12402;
var G__12462 = chunk__12403;
var G__12463 = count__12404;
var G__12464 = (i__12405 + (1));
seq__12402 = G__12461;
chunk__12403 = G__12462;
count__12404 = G__12463;
i__12405 = G__12464;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__12402);
if(temp__6753__auto____$1){
var seq__12402__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12402__$1)){
var c__8398__auto__ = cljs.core.chunk_first.call(null,seq__12402__$1);
var G__12465 = cljs.core.chunk_rest.call(null,seq__12402__$1);
var G__12466 = c__8398__auto__;
var G__12467 = cljs.core.count.call(null,c__8398__auto__);
var G__12468 = (0);
seq__12402 = G__12465;
chunk__12403 = G__12466;
count__12404 = G__12467;
i__12405 = G__12468;
continue;
} else {
var role = cljs.core.first.call(null,seq__12402__$1);
var temp__6753__auto___12469__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12469__$2)){
var spec_12470 = temp__6753__auto___12469__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12470));
} else {
}

var G__12471 = cljs.core.next.call(null,seq__12402__$1);
var G__12472 = null;
var G__12473 = (0);
var G__12474 = (0);
seq__12402 = G__12471;
chunk__12403 = G__12472;
count__12404 = G__12473;
i__12405 = G__12474;
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