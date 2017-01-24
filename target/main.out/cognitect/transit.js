// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__9089_9093 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__9090_9094 = null;
var count__9091_9095 = (0);
var i__9092_9096 = (0);
while(true){
if((i__9092_9096 < count__9091_9095)){
var k_9097 = cljs.core._nth.call(null,chunk__9090_9094,i__9092_9096);
var v_9098 = (b[k_9097]);
(a[k_9097] = v_9098);

var G__9099 = seq__9089_9093;
var G__9100 = chunk__9090_9094;
var G__9101 = count__9091_9095;
var G__9102 = (i__9092_9096 + (1));
seq__9089_9093 = G__9099;
chunk__9090_9094 = G__9100;
count__9091_9095 = G__9101;
i__9092_9096 = G__9102;
continue;
} else {
var temp__6753__auto___9103 = cljs.core.seq.call(null,seq__9089_9093);
if(temp__6753__auto___9103){
var seq__9089_9104__$1 = temp__6753__auto___9103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9089_9104__$1)){
var c__8398__auto___9105 = cljs.core.chunk_first.call(null,seq__9089_9104__$1);
var G__9106 = cljs.core.chunk_rest.call(null,seq__9089_9104__$1);
var G__9107 = c__8398__auto___9105;
var G__9108 = cljs.core.count.call(null,c__8398__auto___9105);
var G__9109 = (0);
seq__9089_9093 = G__9106;
chunk__9090_9094 = G__9107;
count__9091_9095 = G__9108;
i__9092_9096 = G__9109;
continue;
} else {
var k_9110 = cljs.core.first.call(null,seq__9089_9104__$1);
var v_9111 = (b[k_9110]);
(a[k_9110] = v_9111);

var G__9112 = cljs.core.next.call(null,seq__9089_9104__$1);
var G__9113 = null;
var G__9114 = (0);
var G__9115 = (0);
seq__9089_9093 = G__9112;
chunk__9090_9094 = G__9113;
count__9091_9095 = G__9114;
i__9092_9096 = G__9115;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args9116 = [];
var len__8708__auto___9119 = arguments.length;
var i__8709__auto___9120 = (0);
while(true){
if((i__8709__auto___9120 < len__8708__auto___9119)){
args9116.push((arguments[i__8709__auto___9120]));

var G__9121 = (i__8709__auto___9120 + (1));
i__8709__auto___9120 = G__9121;
continue;
} else {
}
break;
}

var G__9118 = args9116.length;
switch (G__9118) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9116.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__9123 = (i + (2));
var G__9124 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__9123;
ret = G__9124;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9125_9129 = cljs.core.seq.call(null,v);
var chunk__9126_9130 = null;
var count__9127_9131 = (0);
var i__9128_9132 = (0);
while(true){
if((i__9128_9132 < count__9127_9131)){
var x_9133 = cljs.core._nth.call(null,chunk__9126_9130,i__9128_9132);
ret.push(x_9133);

var G__9134 = seq__9125_9129;
var G__9135 = chunk__9126_9130;
var G__9136 = count__9127_9131;
var G__9137 = (i__9128_9132 + (1));
seq__9125_9129 = G__9134;
chunk__9126_9130 = G__9135;
count__9127_9131 = G__9136;
i__9128_9132 = G__9137;
continue;
} else {
var temp__6753__auto___9138 = cljs.core.seq.call(null,seq__9125_9129);
if(temp__6753__auto___9138){
var seq__9125_9139__$1 = temp__6753__auto___9138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9125_9139__$1)){
var c__8398__auto___9140 = cljs.core.chunk_first.call(null,seq__9125_9139__$1);
var G__9141 = cljs.core.chunk_rest.call(null,seq__9125_9139__$1);
var G__9142 = c__8398__auto___9140;
var G__9143 = cljs.core.count.call(null,c__8398__auto___9140);
var G__9144 = (0);
seq__9125_9129 = G__9141;
chunk__9126_9130 = G__9142;
count__9127_9131 = G__9143;
i__9128_9132 = G__9144;
continue;
} else {
var x_9145 = cljs.core.first.call(null,seq__9125_9139__$1);
ret.push(x_9145);

var G__9146 = cljs.core.next.call(null,seq__9125_9139__$1);
var G__9147 = null;
var G__9148 = (0);
var G__9149 = (0);
seq__9125_9129 = G__9146;
chunk__9126_9130 = G__9147;
count__9127_9131 = G__9148;
i__9128_9132 = G__9149;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9150_9154 = cljs.core.seq.call(null,v);
var chunk__9151_9155 = null;
var count__9152_9156 = (0);
var i__9153_9157 = (0);
while(true){
if((i__9153_9157 < count__9152_9156)){
var x_9158 = cljs.core._nth.call(null,chunk__9151_9155,i__9153_9157);
ret.push(x_9158);

var G__9159 = seq__9150_9154;
var G__9160 = chunk__9151_9155;
var G__9161 = count__9152_9156;
var G__9162 = (i__9153_9157 + (1));
seq__9150_9154 = G__9159;
chunk__9151_9155 = G__9160;
count__9152_9156 = G__9161;
i__9153_9157 = G__9162;
continue;
} else {
var temp__6753__auto___9163 = cljs.core.seq.call(null,seq__9150_9154);
if(temp__6753__auto___9163){
var seq__9150_9164__$1 = temp__6753__auto___9163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9150_9164__$1)){
var c__8398__auto___9165 = cljs.core.chunk_first.call(null,seq__9150_9164__$1);
var G__9166 = cljs.core.chunk_rest.call(null,seq__9150_9164__$1);
var G__9167 = c__8398__auto___9165;
var G__9168 = cljs.core.count.call(null,c__8398__auto___9165);
var G__9169 = (0);
seq__9150_9154 = G__9166;
chunk__9151_9155 = G__9167;
count__9152_9156 = G__9168;
i__9153_9157 = G__9169;
continue;
} else {
var x_9170 = cljs.core.first.call(null,seq__9150_9164__$1);
ret.push(x_9170);

var G__9171 = cljs.core.next.call(null,seq__9150_9164__$1);
var G__9172 = null;
var G__9173 = (0);
var G__9174 = (0);
seq__9150_9154 = G__9171;
chunk__9151_9155 = G__9172;
count__9152_9156 = G__9173;
i__9153_9157 = G__9174;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9175_9179 = cljs.core.seq.call(null,v);
var chunk__9176_9180 = null;
var count__9177_9181 = (0);
var i__9178_9182 = (0);
while(true){
if((i__9178_9182 < count__9177_9181)){
var x_9183 = cljs.core._nth.call(null,chunk__9176_9180,i__9178_9182);
ret.push(x_9183);

var G__9184 = seq__9175_9179;
var G__9185 = chunk__9176_9180;
var G__9186 = count__9177_9181;
var G__9187 = (i__9178_9182 + (1));
seq__9175_9179 = G__9184;
chunk__9176_9180 = G__9185;
count__9177_9181 = G__9186;
i__9178_9182 = G__9187;
continue;
} else {
var temp__6753__auto___9188 = cljs.core.seq.call(null,seq__9175_9179);
if(temp__6753__auto___9188){
var seq__9175_9189__$1 = temp__6753__auto___9188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9175_9189__$1)){
var c__8398__auto___9190 = cljs.core.chunk_first.call(null,seq__9175_9189__$1);
var G__9191 = cljs.core.chunk_rest.call(null,seq__9175_9189__$1);
var G__9192 = c__8398__auto___9190;
var G__9193 = cljs.core.count.call(null,c__8398__auto___9190);
var G__9194 = (0);
seq__9175_9179 = G__9191;
chunk__9176_9180 = G__9192;
count__9177_9181 = G__9193;
i__9178_9182 = G__9194;
continue;
} else {
var x_9195 = cljs.core.first.call(null,seq__9175_9189__$1);
ret.push(x_9195);

var G__9196 = cljs.core.next.call(null,seq__9175_9189__$1);
var G__9197 = null;
var G__9198 = (0);
var G__9199 = (0);
seq__9175_9179 = G__9196;
chunk__9176_9180 = G__9197;
count__9177_9181 = G__9198;
i__9178_9182 = G__9199;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args9200 = [];
var len__8708__auto___9215 = arguments.length;
var i__8709__auto___9216 = (0);
while(true){
if((i__8709__auto___9216 < len__8708__auto___9215)){
args9200.push((arguments[i__8709__auto___9216]));

var G__9217 = (i__8709__auto___9216 + (1));
i__8709__auto___9216 = G__9217;
continue;
} else {
}
break;
}

var G__9202 = args9200.length;
switch (G__9202) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9200.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__9203 = obj;
G__9203.push(kfn.call(null,k),vfn.call(null,v));

return G__9203;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x9204 = cljs.core.clone.call(null,handlers);
x9204.forEach = ((function (x9204,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__9205 = cljs.core.seq.call(null,coll);
var chunk__9206 = null;
var count__9207 = (0);
var i__9208 = (0);
while(true){
if((i__9208 < count__9207)){
var vec__9209 = cljs.core._nth.call(null,chunk__9206,i__9208);
var k = cljs.core.nth.call(null,vec__9209,(0),null);
var v = cljs.core.nth.call(null,vec__9209,(1),null);
f.call(null,v,k);

var G__9219 = seq__9205;
var G__9220 = chunk__9206;
var G__9221 = count__9207;
var G__9222 = (i__9208 + (1));
seq__9205 = G__9219;
chunk__9206 = G__9220;
count__9207 = G__9221;
i__9208 = G__9222;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__9205);
if(temp__6753__auto__){
var seq__9205__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9205__$1)){
var c__8398__auto__ = cljs.core.chunk_first.call(null,seq__9205__$1);
var G__9223 = cljs.core.chunk_rest.call(null,seq__9205__$1);
var G__9224 = c__8398__auto__;
var G__9225 = cljs.core.count.call(null,c__8398__auto__);
var G__9226 = (0);
seq__9205 = G__9223;
chunk__9206 = G__9224;
count__9207 = G__9225;
i__9208 = G__9226;
continue;
} else {
var vec__9212 = cljs.core.first.call(null,seq__9205__$1);
var k = cljs.core.nth.call(null,vec__9212,(0),null);
var v = cljs.core.nth.call(null,vec__9212,(1),null);
f.call(null,v,k);

var G__9227 = cljs.core.next.call(null,seq__9205__$1);
var G__9228 = null;
var G__9229 = (0);
var G__9230 = (0);
seq__9205 = G__9227;
chunk__9206 = G__9228;
count__9207 = G__9229;
i__9208 = G__9230;
continue;
}
} else {
return null;
}
}
break;
}
});})(x9204,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x9204;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args9231 = [];
var len__8708__auto___9237 = arguments.length;
var i__8709__auto___9238 = (0);
while(true){
if((i__8709__auto___9238 < len__8708__auto___9237)){
args9231.push((arguments[i__8709__auto___9238]));

var G__9239 = (i__8709__auto___9238 + (1));
i__8709__auto___9238 = G__9239;
continue;
} else {
}
break;
}

var G__9233 = args9231.length;
switch (G__9233) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9231.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit9234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit9234 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta9235){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta9235 = meta9235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit9234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9236,meta9235__$1){
var self__ = this;
var _9236__$1 = this;
return (new cognitect.transit.t_cognitect$transit9234(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta9235__$1));
});

cognitect.transit.t_cognitect$transit9234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9236){
var self__ = this;
var _9236__$1 = this;
return self__.meta9235;
});

cognitect.transit.t_cognitect$transit9234.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9234.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9234.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9234.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta9235","meta9235",900970768,null)], null);
});

cognitect.transit.t_cognitect$transit9234.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit9234.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit9234";

cognitect.transit.t_cognitect$transit9234.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/t_cognitect$transit9234");
});

cognitect.transit.__GT_t_cognitect$transit9234 = (function cognitect$transit$__GT_t_cognitect$transit9234(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9235){
return (new cognitect.transit.t_cognitect$transit9234(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9235));
});

}

return (new cognitect.transit.t_cognitect$transit9234(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__7492__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__7492__auto__)){
return or__7492__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map