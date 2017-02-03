// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14034){
var map__14059 = p__14034;
var map__14059__$1 = ((((!((map__14059 == null)))?((((map__14059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14059):map__14059);
var m = map__14059__$1;
var n = cljs.core.get.call(null,map__14059__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14059__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14061_14083 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14062_14084 = null;
var count__14063_14085 = (0);
var i__14064_14086 = (0);
while(true){
if((i__14064_14086 < count__14063_14085)){
var f_14087 = cljs.core._nth.call(null,chunk__14062_14084,i__14064_14086);
cljs.core.println.call(null,"  ",f_14087);

var G__14088 = seq__14061_14083;
var G__14089 = chunk__14062_14084;
var G__14090 = count__14063_14085;
var G__14091 = (i__14064_14086 + (1));
seq__14061_14083 = G__14088;
chunk__14062_14084 = G__14089;
count__14063_14085 = G__14090;
i__14064_14086 = G__14091;
continue;
} else {
var temp__6753__auto___14092 = cljs.core.seq.call(null,seq__14061_14083);
if(temp__6753__auto___14092){
var seq__14061_14093__$1 = temp__6753__auto___14092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14061_14093__$1)){
var c__11430__auto___14094 = cljs.core.chunk_first.call(null,seq__14061_14093__$1);
var G__14095 = cljs.core.chunk_rest.call(null,seq__14061_14093__$1);
var G__14096 = c__11430__auto___14094;
var G__14097 = cljs.core.count.call(null,c__11430__auto___14094);
var G__14098 = (0);
seq__14061_14083 = G__14095;
chunk__14062_14084 = G__14096;
count__14063_14085 = G__14097;
i__14064_14086 = G__14098;
continue;
} else {
var f_14099 = cljs.core.first.call(null,seq__14061_14093__$1);
cljs.core.println.call(null,"  ",f_14099);

var G__14100 = cljs.core.next.call(null,seq__14061_14093__$1);
var G__14101 = null;
var G__14102 = (0);
var G__14103 = (0);
seq__14061_14083 = G__14100;
chunk__14062_14084 = G__14101;
count__14063_14085 = G__14102;
i__14064_14086 = G__14103;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14104 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10519__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10519__auto__)){
return or__10519__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14104);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14104)))?cljs.core.second.call(null,arglists_14104):arglists_14104));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__14065_14105 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14066_14106 = null;
var count__14067_14107 = (0);
var i__14068_14108 = (0);
while(true){
if((i__14068_14108 < count__14067_14107)){
var vec__14069_14109 = cljs.core._nth.call(null,chunk__14066_14106,i__14068_14108);
var name_14110 = cljs.core.nth.call(null,vec__14069_14109,(0),null);
var map__14072_14111 = cljs.core.nth.call(null,vec__14069_14109,(1),null);
var map__14072_14112__$1 = ((((!((map__14072_14111 == null)))?((((map__14072_14111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14072_14111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14072_14111):map__14072_14111);
var doc_14113 = cljs.core.get.call(null,map__14072_14112__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14114 = cljs.core.get.call(null,map__14072_14112__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14110);

cljs.core.println.call(null," ",arglists_14114);

if(cljs.core.truth_(doc_14113)){
cljs.core.println.call(null," ",doc_14113);
} else {
}

var G__14115 = seq__14065_14105;
var G__14116 = chunk__14066_14106;
var G__14117 = count__14067_14107;
var G__14118 = (i__14068_14108 + (1));
seq__14065_14105 = G__14115;
chunk__14066_14106 = G__14116;
count__14067_14107 = G__14117;
i__14068_14108 = G__14118;
continue;
} else {
var temp__6753__auto___14119 = cljs.core.seq.call(null,seq__14065_14105);
if(temp__6753__auto___14119){
var seq__14065_14120__$1 = temp__6753__auto___14119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14065_14120__$1)){
var c__11430__auto___14121 = cljs.core.chunk_first.call(null,seq__14065_14120__$1);
var G__14122 = cljs.core.chunk_rest.call(null,seq__14065_14120__$1);
var G__14123 = c__11430__auto___14121;
var G__14124 = cljs.core.count.call(null,c__11430__auto___14121);
var G__14125 = (0);
seq__14065_14105 = G__14122;
chunk__14066_14106 = G__14123;
count__14067_14107 = G__14124;
i__14068_14108 = G__14125;
continue;
} else {
var vec__14074_14126 = cljs.core.first.call(null,seq__14065_14120__$1);
var name_14127 = cljs.core.nth.call(null,vec__14074_14126,(0),null);
var map__14077_14128 = cljs.core.nth.call(null,vec__14074_14126,(1),null);
var map__14077_14129__$1 = ((((!((map__14077_14128 == null)))?((((map__14077_14128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14077_14128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14077_14128):map__14077_14128);
var doc_14130 = cljs.core.get.call(null,map__14077_14129__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14131 = cljs.core.get.call(null,map__14077_14129__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14127);

cljs.core.println.call(null," ",arglists_14131);

if(cljs.core.truth_(doc_14130)){
cljs.core.println.call(null," ",doc_14130);
} else {
}

var G__14132 = cljs.core.next.call(null,seq__14065_14120__$1);
var G__14133 = null;
var G__14134 = (0);
var G__14135 = (0);
seq__14065_14105 = G__14132;
chunk__14066_14106 = G__14133;
count__14067_14107 = G__14134;
i__14068_14108 = G__14135;
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
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__14079 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14080 = null;
var count__14081 = (0);
var i__14082 = (0);
while(true){
if((i__14082 < count__14081)){
var role = cljs.core._nth.call(null,chunk__14080,i__14082);
var temp__6753__auto___14136__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___14136__$1)){
var spec_14137 = temp__6753__auto___14136__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14137));
} else {
}

var G__14138 = seq__14079;
var G__14139 = chunk__14080;
var G__14140 = count__14081;
var G__14141 = (i__14082 + (1));
seq__14079 = G__14138;
chunk__14080 = G__14139;
count__14081 = G__14140;
i__14082 = G__14141;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__14079);
if(temp__6753__auto____$1){
var seq__14079__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14079__$1)){
var c__11430__auto__ = cljs.core.chunk_first.call(null,seq__14079__$1);
var G__14142 = cljs.core.chunk_rest.call(null,seq__14079__$1);
var G__14143 = c__11430__auto__;
var G__14144 = cljs.core.count.call(null,c__11430__auto__);
var G__14145 = (0);
seq__14079 = G__14142;
chunk__14080 = G__14143;
count__14081 = G__14144;
i__14082 = G__14145;
continue;
} else {
var role = cljs.core.first.call(null,seq__14079__$1);
var temp__6753__auto___14146__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___14146__$2)){
var spec_14147 = temp__6753__auto___14146__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14147));
} else {
}

var G__14148 = cljs.core.next.call(null,seq__14079__$1);
var G__14149 = null;
var G__14150 = (0);
var G__14151 = (0);
seq__14079 = G__14148;
chunk__14080 = G__14149;
count__14081 = G__14150;
i__14082 = G__14151;
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