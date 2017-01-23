// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12381){
var map__12406 = p__12381;
var map__12406__$1 = ((((!((map__12406 == null)))?((((map__12406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12406):map__12406);
var m = map__12406__$1;
var n = cljs.core.get.call(null,map__12406__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12406__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12408_12430 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12409_12431 = null;
var count__12410_12432 = (0);
var i__12411_12433 = (0);
while(true){
if((i__12411_12433 < count__12410_12432)){
var f_12434 = cljs.core._nth.call(null,chunk__12409_12431,i__12411_12433);
cljs.core.println.call(null,"  ",f_12434);

var G__12435 = seq__12408_12430;
var G__12436 = chunk__12409_12431;
var G__12437 = count__12410_12432;
var G__12438 = (i__12411_12433 + (1));
seq__12408_12430 = G__12435;
chunk__12409_12431 = G__12436;
count__12410_12432 = G__12437;
i__12411_12433 = G__12438;
continue;
} else {
var temp__6753__auto___12439 = cljs.core.seq.call(null,seq__12408_12430);
if(temp__6753__auto___12439){
var seq__12408_12440__$1 = temp__6753__auto___12439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12408_12440__$1)){
var c__10974__auto___12441 = cljs.core.chunk_first.call(null,seq__12408_12440__$1);
var G__12442 = cljs.core.chunk_rest.call(null,seq__12408_12440__$1);
var G__12443 = c__10974__auto___12441;
var G__12444 = cljs.core.count.call(null,c__10974__auto___12441);
var G__12445 = (0);
seq__12408_12430 = G__12442;
chunk__12409_12431 = G__12443;
count__12410_12432 = G__12444;
i__12411_12433 = G__12445;
continue;
} else {
var f_12446 = cljs.core.first.call(null,seq__12408_12440__$1);
cljs.core.println.call(null,"  ",f_12446);

var G__12447 = cljs.core.next.call(null,seq__12408_12440__$1);
var G__12448 = null;
var G__12449 = (0);
var G__12450 = (0);
seq__12408_12430 = G__12447;
chunk__12409_12431 = G__12448;
count__12410_12432 = G__12449;
i__12411_12433 = G__12450;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12451 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10068__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10068__auto__)){
return or__10068__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12451);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12451)))?cljs.core.second.call(null,arglists_12451):arglists_12451));
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
var seq__12412_12452 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12413_12453 = null;
var count__12414_12454 = (0);
var i__12415_12455 = (0);
while(true){
if((i__12415_12455 < count__12414_12454)){
var vec__12416_12456 = cljs.core._nth.call(null,chunk__12413_12453,i__12415_12455);
var name_12457 = cljs.core.nth.call(null,vec__12416_12456,(0),null);
var map__12419_12458 = cljs.core.nth.call(null,vec__12416_12456,(1),null);
var map__12419_12459__$1 = ((((!((map__12419_12458 == null)))?((((map__12419_12458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12419_12458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12419_12458):map__12419_12458);
var doc_12460 = cljs.core.get.call(null,map__12419_12459__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12461 = cljs.core.get.call(null,map__12419_12459__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12457);

cljs.core.println.call(null," ",arglists_12461);

if(cljs.core.truth_(doc_12460)){
cljs.core.println.call(null," ",doc_12460);
} else {
}

var G__12462 = seq__12412_12452;
var G__12463 = chunk__12413_12453;
var G__12464 = count__12414_12454;
var G__12465 = (i__12415_12455 + (1));
seq__12412_12452 = G__12462;
chunk__12413_12453 = G__12463;
count__12414_12454 = G__12464;
i__12415_12455 = G__12465;
continue;
} else {
var temp__6753__auto___12466 = cljs.core.seq.call(null,seq__12412_12452);
if(temp__6753__auto___12466){
var seq__12412_12467__$1 = temp__6753__auto___12466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12412_12467__$1)){
var c__10974__auto___12468 = cljs.core.chunk_first.call(null,seq__12412_12467__$1);
var G__12469 = cljs.core.chunk_rest.call(null,seq__12412_12467__$1);
var G__12470 = c__10974__auto___12468;
var G__12471 = cljs.core.count.call(null,c__10974__auto___12468);
var G__12472 = (0);
seq__12412_12452 = G__12469;
chunk__12413_12453 = G__12470;
count__12414_12454 = G__12471;
i__12415_12455 = G__12472;
continue;
} else {
var vec__12421_12473 = cljs.core.first.call(null,seq__12412_12467__$1);
var name_12474 = cljs.core.nth.call(null,vec__12421_12473,(0),null);
var map__12424_12475 = cljs.core.nth.call(null,vec__12421_12473,(1),null);
var map__12424_12476__$1 = ((((!((map__12424_12475 == null)))?((((map__12424_12475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12424_12475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12424_12475):map__12424_12475);
var doc_12477 = cljs.core.get.call(null,map__12424_12476__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12478 = cljs.core.get.call(null,map__12424_12476__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12474);

cljs.core.println.call(null," ",arglists_12478);

if(cljs.core.truth_(doc_12477)){
cljs.core.println.call(null," ",doc_12477);
} else {
}

var G__12479 = cljs.core.next.call(null,seq__12412_12467__$1);
var G__12480 = null;
var G__12481 = (0);
var G__12482 = (0);
seq__12412_12452 = G__12479;
chunk__12413_12453 = G__12480;
count__12414_12454 = G__12481;
i__12415_12455 = G__12482;
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

var seq__12426 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12427 = null;
var count__12428 = (0);
var i__12429 = (0);
while(true){
if((i__12429 < count__12428)){
var role = cljs.core._nth.call(null,chunk__12427,i__12429);
var temp__6753__auto___12483__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12483__$1)){
var spec_12484 = temp__6753__auto___12483__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12484));
} else {
}

var G__12485 = seq__12426;
var G__12486 = chunk__12427;
var G__12487 = count__12428;
var G__12488 = (i__12429 + (1));
seq__12426 = G__12485;
chunk__12427 = G__12486;
count__12428 = G__12487;
i__12429 = G__12488;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__12426);
if(temp__6753__auto____$1){
var seq__12426__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12426__$1)){
var c__10974__auto__ = cljs.core.chunk_first.call(null,seq__12426__$1);
var G__12489 = cljs.core.chunk_rest.call(null,seq__12426__$1);
var G__12490 = c__10974__auto__;
var G__12491 = cljs.core.count.call(null,c__10974__auto__);
var G__12492 = (0);
seq__12426 = G__12489;
chunk__12427 = G__12490;
count__12428 = G__12491;
i__12429 = G__12492;
continue;
} else {
var role = cljs.core.first.call(null,seq__12426__$1);
var temp__6753__auto___12493__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12493__$2)){
var spec_12494 = temp__6753__auto___12493__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12494));
} else {
}

var G__12495 = cljs.core.next.call(null,seq__12426__$1);
var G__12496 = null;
var G__12497 = (0);
var G__12498 = (0);
seq__12426 = G__12495;
chunk__12427 = G__12496;
count__12428 = G__12497;
i__12429 = G__12498;
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