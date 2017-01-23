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
var seq__9286_9290 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__9287_9291 = null;
var count__9288_9292 = (0);
var i__9289_9293 = (0);
while(true){
if((i__9289_9293 < count__9288_9292)){
var k_9294 = cljs.core._nth.call(null,chunk__9287_9291,i__9289_9293);
var v_9295 = (b[k_9294]);
(a[k_9294] = v_9295);

var G__9296 = seq__9286_9290;
var G__9297 = chunk__9287_9291;
var G__9298 = count__9288_9292;
var G__9299 = (i__9289_9293 + (1));
seq__9286_9290 = G__9296;
chunk__9287_9291 = G__9297;
count__9288_9292 = G__9298;
i__9289_9293 = G__9299;
continue;
} else {
var temp__6753__auto___9300 = cljs.core.seq.call(null,seq__9286_9290);
if(temp__6753__auto___9300){
var seq__9286_9301__$1 = temp__6753__auto___9300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9286_9301__$1)){
var c__8398__auto___9302 = cljs.core.chunk_first.call(null,seq__9286_9301__$1);
var G__9303 = cljs.core.chunk_rest.call(null,seq__9286_9301__$1);
var G__9304 = c__8398__auto___9302;
var G__9305 = cljs.core.count.call(null,c__8398__auto___9302);
var G__9306 = (0);
seq__9286_9290 = G__9303;
chunk__9287_9291 = G__9304;
count__9288_9292 = G__9305;
i__9289_9293 = G__9306;
continue;
} else {
var k_9307 = cljs.core.first.call(null,seq__9286_9301__$1);
var v_9308 = (b[k_9307]);
(a[k_9307] = v_9308);

var G__9309 = cljs.core.next.call(null,seq__9286_9301__$1);
var G__9310 = null;
var G__9311 = (0);
var G__9312 = (0);
seq__9286_9290 = G__9309;
chunk__9287_9291 = G__9310;
count__9288_9292 = G__9311;
i__9289_9293 = G__9312;
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
var args9313 = [];
var len__8708__auto___9316 = arguments.length;
var i__8709__auto___9317 = (0);
while(true){
if((i__8709__auto___9317 < len__8708__auto___9316)){
args9313.push((arguments[i__8709__auto___9317]));

var G__9318 = (i__8709__auto___9317 + (1));
i__8709__auto___9317 = G__9318;
continue;
} else {
}
break;
}

var G__9315 = args9313.length;
switch (G__9315) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9313.length)].join('')));

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
var G__9320 = (i + (2));
var G__9321 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__9320;
ret = G__9321;
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
var seq__9322_9326 = cljs.core.seq.call(null,v);
var chunk__9323_9327 = null;
var count__9324_9328 = (0);
var i__9325_9329 = (0);
while(true){
if((i__9325_9329 < count__9324_9328)){
var x_9330 = cljs.core._nth.call(null,chunk__9323_9327,i__9325_9329);
ret.push(x_9330);

var G__9331 = seq__9322_9326;
var G__9332 = chunk__9323_9327;
var G__9333 = count__9324_9328;
var G__9334 = (i__9325_9329 + (1));
seq__9322_9326 = G__9331;
chunk__9323_9327 = G__9332;
count__9324_9328 = G__9333;
i__9325_9329 = G__9334;
continue;
} else {
var temp__6753__auto___9335 = cljs.core.seq.call(null,seq__9322_9326);
if(temp__6753__auto___9335){
var seq__9322_9336__$1 = temp__6753__auto___9335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9322_9336__$1)){
var c__8398__auto___9337 = cljs.core.chunk_first.call(null,seq__9322_9336__$1);
var G__9338 = cljs.core.chunk_rest.call(null,seq__9322_9336__$1);
var G__9339 = c__8398__auto___9337;
var G__9340 = cljs.core.count.call(null,c__8398__auto___9337);
var G__9341 = (0);
seq__9322_9326 = G__9338;
chunk__9323_9327 = G__9339;
count__9324_9328 = G__9340;
i__9325_9329 = G__9341;
continue;
} else {
var x_9342 = cljs.core.first.call(null,seq__9322_9336__$1);
ret.push(x_9342);

var G__9343 = cljs.core.next.call(null,seq__9322_9336__$1);
var G__9344 = null;
var G__9345 = (0);
var G__9346 = (0);
seq__9322_9326 = G__9343;
chunk__9323_9327 = G__9344;
count__9324_9328 = G__9345;
i__9325_9329 = G__9346;
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
var seq__9347_9351 = cljs.core.seq.call(null,v);
var chunk__9348_9352 = null;
var count__9349_9353 = (0);
var i__9350_9354 = (0);
while(true){
if((i__9350_9354 < count__9349_9353)){
var x_9355 = cljs.core._nth.call(null,chunk__9348_9352,i__9350_9354);
ret.push(x_9355);

var G__9356 = seq__9347_9351;
var G__9357 = chunk__9348_9352;
var G__9358 = count__9349_9353;
var G__9359 = (i__9350_9354 + (1));
seq__9347_9351 = G__9356;
chunk__9348_9352 = G__9357;
count__9349_9353 = G__9358;
i__9350_9354 = G__9359;
continue;
} else {
var temp__6753__auto___9360 = cljs.core.seq.call(null,seq__9347_9351);
if(temp__6753__auto___9360){
var seq__9347_9361__$1 = temp__6753__auto___9360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9347_9361__$1)){
var c__8398__auto___9362 = cljs.core.chunk_first.call(null,seq__9347_9361__$1);
var G__9363 = cljs.core.chunk_rest.call(null,seq__9347_9361__$1);
var G__9364 = c__8398__auto___9362;
var G__9365 = cljs.core.count.call(null,c__8398__auto___9362);
var G__9366 = (0);
seq__9347_9351 = G__9363;
chunk__9348_9352 = G__9364;
count__9349_9353 = G__9365;
i__9350_9354 = G__9366;
continue;
} else {
var x_9367 = cljs.core.first.call(null,seq__9347_9361__$1);
ret.push(x_9367);

var G__9368 = cljs.core.next.call(null,seq__9347_9361__$1);
var G__9369 = null;
var G__9370 = (0);
var G__9371 = (0);
seq__9347_9351 = G__9368;
chunk__9348_9352 = G__9369;
count__9349_9353 = G__9370;
i__9350_9354 = G__9371;
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
var seq__9372_9376 = cljs.core.seq.call(null,v);
var chunk__9373_9377 = null;
var count__9374_9378 = (0);
var i__9375_9379 = (0);
while(true){
if((i__9375_9379 < count__9374_9378)){
var x_9380 = cljs.core._nth.call(null,chunk__9373_9377,i__9375_9379);
ret.push(x_9380);

var G__9381 = seq__9372_9376;
var G__9382 = chunk__9373_9377;
var G__9383 = count__9374_9378;
var G__9384 = (i__9375_9379 + (1));
seq__9372_9376 = G__9381;
chunk__9373_9377 = G__9382;
count__9374_9378 = G__9383;
i__9375_9379 = G__9384;
continue;
} else {
var temp__6753__auto___9385 = cljs.core.seq.call(null,seq__9372_9376);
if(temp__6753__auto___9385){
var seq__9372_9386__$1 = temp__6753__auto___9385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9372_9386__$1)){
var c__8398__auto___9387 = cljs.core.chunk_first.call(null,seq__9372_9386__$1);
var G__9388 = cljs.core.chunk_rest.call(null,seq__9372_9386__$1);
var G__9389 = c__8398__auto___9387;
var G__9390 = cljs.core.count.call(null,c__8398__auto___9387);
var G__9391 = (0);
seq__9372_9376 = G__9388;
chunk__9373_9377 = G__9389;
count__9374_9378 = G__9390;
i__9375_9379 = G__9391;
continue;
} else {
var x_9392 = cljs.core.first.call(null,seq__9372_9386__$1);
ret.push(x_9392);

var G__9393 = cljs.core.next.call(null,seq__9372_9386__$1);
var G__9394 = null;
var G__9395 = (0);
var G__9396 = (0);
seq__9372_9376 = G__9393;
chunk__9373_9377 = G__9394;
count__9374_9378 = G__9395;
i__9375_9379 = G__9396;
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
var args9397 = [];
var len__8708__auto___9412 = arguments.length;
var i__8709__auto___9413 = (0);
while(true){
if((i__8709__auto___9413 < len__8708__auto___9412)){
args9397.push((arguments[i__8709__auto___9413]));

var G__9414 = (i__8709__auto___9413 + (1));
i__8709__auto___9413 = G__9414;
continue;
} else {
}
break;
}

var G__9399 = args9397.length;
switch (G__9399) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9397.length)].join('')));

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
var G__9400 = obj;
G__9400.push(kfn.call(null,k),vfn.call(null,v));

return G__9400;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x9401 = cljs.core.clone.call(null,handlers);
x9401.forEach = ((function (x9401,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__9402 = cljs.core.seq.call(null,coll);
var chunk__9403 = null;
var count__9404 = (0);
var i__9405 = (0);
while(true){
if((i__9405 < count__9404)){
var vec__9406 = cljs.core._nth.call(null,chunk__9403,i__9405);
var k = cljs.core.nth.call(null,vec__9406,(0),null);
var v = cljs.core.nth.call(null,vec__9406,(1),null);
f.call(null,v,k);

var G__9416 = seq__9402;
var G__9417 = chunk__9403;
var G__9418 = count__9404;
var G__9419 = (i__9405 + (1));
seq__9402 = G__9416;
chunk__9403 = G__9417;
count__9404 = G__9418;
i__9405 = G__9419;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__9402);
if(temp__6753__auto__){
var seq__9402__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9402__$1)){
var c__8398__auto__ = cljs.core.chunk_first.call(null,seq__9402__$1);
var G__9420 = cljs.core.chunk_rest.call(null,seq__9402__$1);
var G__9421 = c__8398__auto__;
var G__9422 = cljs.core.count.call(null,c__8398__auto__);
var G__9423 = (0);
seq__9402 = G__9420;
chunk__9403 = G__9421;
count__9404 = G__9422;
i__9405 = G__9423;
continue;
} else {
var vec__9409 = cljs.core.first.call(null,seq__9402__$1);
var k = cljs.core.nth.call(null,vec__9409,(0),null);
var v = cljs.core.nth.call(null,vec__9409,(1),null);
f.call(null,v,k);

var G__9424 = cljs.core.next.call(null,seq__9402__$1);
var G__9425 = null;
var G__9426 = (0);
var G__9427 = (0);
seq__9402 = G__9424;
chunk__9403 = G__9425;
count__9404 = G__9426;
i__9405 = G__9427;
continue;
}
} else {
return null;
}
}
break;
}
});})(x9401,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x9401;
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
var args9428 = [];
var len__8708__auto___9434 = arguments.length;
var i__8709__auto___9435 = (0);
while(true){
if((i__8709__auto___9435 < len__8708__auto___9434)){
args9428.push((arguments[i__8709__auto___9435]));

var G__9436 = (i__8709__auto___9435 + (1));
i__8709__auto___9435 = G__9436;
continue;
} else {
}
break;
}

var G__9430 = args9428.length;
switch (G__9430) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9428.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit9431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit9431 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta9432){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta9432 = meta9432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit9431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9433,meta9432__$1){
var self__ = this;
var _9433__$1 = this;
return (new cognitect.transit.t_cognitect$transit9431(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta9432__$1));
});

cognitect.transit.t_cognitect$transit9431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9433){
var self__ = this;
var _9433__$1 = this;
return self__.meta9432;
});

cognitect.transit.t_cognitect$transit9431.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9431.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9431.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9431.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta9432","meta9432",-871980307,null)], null);
});

cognitect.transit.t_cognitect$transit9431.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit9431.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit9431";

cognitect.transit.t_cognitect$transit9431.cljs$lang$ctorPrWriter = (function (this__8144__auto__,writer__8145__auto__,opt__8146__auto__){
return cljs.core._write.call(null,writer__8145__auto__,"cognitect.transit/t_cognitect$transit9431");
});

cognitect.transit.__GT_t_cognitect$transit9431 = (function cognitect$transit$__GT_t_cognitect$transit9431(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9432){
return (new cognitect.transit.t_cognitect$transit9431(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9432));
});

}

return (new cognitect.transit.t_cognitect$transit9431(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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