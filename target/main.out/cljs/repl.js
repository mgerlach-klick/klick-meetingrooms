// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12340){
var map__12365 = p__12340;
var map__12365__$1 = ((((!((map__12365 == null)))?((((map__12365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12365):map__12365);
var m = map__12365__$1;
var n = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12367_12389 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12368_12390 = null;
var count__12369_12391 = (0);
var i__12370_12392 = (0);
while(true){
if((i__12370_12392 < count__12369_12391)){
var f_12393 = cljs.core._nth.call(null,chunk__12368_12390,i__12370_12392);
cljs.core.println.call(null,"  ",f_12393);

var G__12394 = seq__12367_12389;
var G__12395 = chunk__12368_12390;
var G__12396 = count__12369_12391;
var G__12397 = (i__12370_12392 + (1));
seq__12367_12389 = G__12394;
chunk__12368_12390 = G__12395;
count__12369_12391 = G__12396;
i__12370_12392 = G__12397;
continue;
} else {
var temp__6753__auto___12398 = cljs.core.seq.call(null,seq__12367_12389);
if(temp__6753__auto___12398){
var seq__12367_12399__$1 = temp__6753__auto___12398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12367_12399__$1)){
var c__8398__auto___12400 = cljs.core.chunk_first.call(null,seq__12367_12399__$1);
var G__12401 = cljs.core.chunk_rest.call(null,seq__12367_12399__$1);
var G__12402 = c__8398__auto___12400;
var G__12403 = cljs.core.count.call(null,c__8398__auto___12400);
var G__12404 = (0);
seq__12367_12389 = G__12401;
chunk__12368_12390 = G__12402;
count__12369_12391 = G__12403;
i__12370_12392 = G__12404;
continue;
} else {
var f_12405 = cljs.core.first.call(null,seq__12367_12399__$1);
cljs.core.println.call(null,"  ",f_12405);

var G__12406 = cljs.core.next.call(null,seq__12367_12399__$1);
var G__12407 = null;
var G__12408 = (0);
var G__12409 = (0);
seq__12367_12389 = G__12406;
chunk__12368_12390 = G__12407;
count__12369_12391 = G__12408;
i__12370_12392 = G__12409;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12410 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7492__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7492__auto__)){
return or__7492__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12410);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12410)))?cljs.core.second.call(null,arglists_12410):arglists_12410));
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
var seq__12371_12411 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12372_12412 = null;
var count__12373_12413 = (0);
var i__12374_12414 = (0);
while(true){
if((i__12374_12414 < count__12373_12413)){
var vec__12375_12415 = cljs.core._nth.call(null,chunk__12372_12412,i__12374_12414);
var name_12416 = cljs.core.nth.call(null,vec__12375_12415,(0),null);
var map__12378_12417 = cljs.core.nth.call(null,vec__12375_12415,(1),null);
var map__12378_12418__$1 = ((((!((map__12378_12417 == null)))?((((map__12378_12417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12378_12417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12378_12417):map__12378_12417);
var doc_12419 = cljs.core.get.call(null,map__12378_12418__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12420 = cljs.core.get.call(null,map__12378_12418__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12416);

cljs.core.println.call(null," ",arglists_12420);

if(cljs.core.truth_(doc_12419)){
cljs.core.println.call(null," ",doc_12419);
} else {
}

var G__12421 = seq__12371_12411;
var G__12422 = chunk__12372_12412;
var G__12423 = count__12373_12413;
var G__12424 = (i__12374_12414 + (1));
seq__12371_12411 = G__12421;
chunk__12372_12412 = G__12422;
count__12373_12413 = G__12423;
i__12374_12414 = G__12424;
continue;
} else {
var temp__6753__auto___12425 = cljs.core.seq.call(null,seq__12371_12411);
if(temp__6753__auto___12425){
var seq__12371_12426__$1 = temp__6753__auto___12425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12371_12426__$1)){
var c__8398__auto___12427 = cljs.core.chunk_first.call(null,seq__12371_12426__$1);
var G__12428 = cljs.core.chunk_rest.call(null,seq__12371_12426__$1);
var G__12429 = c__8398__auto___12427;
var G__12430 = cljs.core.count.call(null,c__8398__auto___12427);
var G__12431 = (0);
seq__12371_12411 = G__12428;
chunk__12372_12412 = G__12429;
count__12373_12413 = G__12430;
i__12374_12414 = G__12431;
continue;
} else {
var vec__12380_12432 = cljs.core.first.call(null,seq__12371_12426__$1);
var name_12433 = cljs.core.nth.call(null,vec__12380_12432,(0),null);
var map__12383_12434 = cljs.core.nth.call(null,vec__12380_12432,(1),null);
var map__12383_12435__$1 = ((((!((map__12383_12434 == null)))?((((map__12383_12434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12383_12434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12383_12434):map__12383_12434);
var doc_12436 = cljs.core.get.call(null,map__12383_12435__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12437 = cljs.core.get.call(null,map__12383_12435__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12433);

cljs.core.println.call(null," ",arglists_12437);

if(cljs.core.truth_(doc_12436)){
cljs.core.println.call(null," ",doc_12436);
} else {
}

var G__12438 = cljs.core.next.call(null,seq__12371_12426__$1);
var G__12439 = null;
var G__12440 = (0);
var G__12441 = (0);
seq__12371_12411 = G__12438;
chunk__12372_12412 = G__12439;
count__12373_12413 = G__12440;
i__12374_12414 = G__12441;
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

var seq__12385 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12386 = null;
var count__12387 = (0);
var i__12388 = (0);
while(true){
if((i__12388 < count__12387)){
var role = cljs.core._nth.call(null,chunk__12386,i__12388);
var temp__6753__auto___12442__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12442__$1)){
var spec_12443 = temp__6753__auto___12442__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12443));
} else {
}

var G__12444 = seq__12385;
var G__12445 = chunk__12386;
var G__12446 = count__12387;
var G__12447 = (i__12388 + (1));
seq__12385 = G__12444;
chunk__12386 = G__12445;
count__12387 = G__12446;
i__12388 = G__12447;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__12385);
if(temp__6753__auto____$1){
var seq__12385__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12385__$1)){
var c__8398__auto__ = cljs.core.chunk_first.call(null,seq__12385__$1);
var G__12448 = cljs.core.chunk_rest.call(null,seq__12385__$1);
var G__12449 = c__8398__auto__;
var G__12450 = cljs.core.count.call(null,c__8398__auto__);
var G__12451 = (0);
seq__12385 = G__12448;
chunk__12386 = G__12449;
count__12387 = G__12450;
i__12388 = G__12451;
continue;
} else {
var role = cljs.core.first.call(null,seq__12385__$1);
var temp__6753__auto___12452__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12452__$2)){
var spec_12453 = temp__6753__auto___12452__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12453));
} else {
}

var G__12454 = cljs.core.next.call(null,seq__12385__$1);
var G__12455 = null;
var G__12456 = (0);
var G__12457 = (0);
seq__12385 = G__12454;
chunk__12386 = G__12455;
count__12387 = G__12456;
i__12388 = G__12457;
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