// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13648,handler){
var map__13649 = p__13648;
var map__13649__$1 = ((((!((map__13649 == null)))?((((map__13649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13649):map__13649);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13649__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13649__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13649__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13649__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13649__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13649__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13649__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__13649,map__13649__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__13647_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__13647_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__13649,map__13649__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__6753__auto___13661 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__6753__auto___13661)){
var response_type_13662 = temp__6753__auto___13661;
this$__$1.responseType = cljs.core.name(response_type_13662);
} else {
}

var seq__13651_13663 = cljs.core.seq(headers);
var chunk__13652_13664 = null;
var count__13653_13665 = (0);
var i__13654_13666 = (0);
while(true){
if((i__13654_13666 < count__13653_13665)){
var vec__13655_13667 = chunk__13652_13664.cljs$core$IIndexed$_nth$arity$2(null,i__13654_13666);
var k_13668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13655_13667,(0),null);
var v_13669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13655_13667,(1),null);
this$__$1.setRequestHeader(k_13668,v_13669);

var G__13670 = seq__13651_13663;
var G__13671 = chunk__13652_13664;
var G__13672 = count__13653_13665;
var G__13673 = (i__13654_13666 + (1));
seq__13651_13663 = G__13670;
chunk__13652_13664 = G__13671;
count__13653_13665 = G__13672;
i__13654_13666 = G__13673;
continue;
} else {
var temp__6753__auto___13674 = cljs.core.seq(seq__13651_13663);
if(temp__6753__auto___13674){
var seq__13651_13675__$1 = temp__6753__auto___13674;
if(cljs.core.chunked_seq_QMARK_(seq__13651_13675__$1)){
var c__8398__auto___13676 = cljs.core.chunk_first(seq__13651_13675__$1);
var G__13677 = cljs.core.chunk_rest(seq__13651_13675__$1);
var G__13678 = c__8398__auto___13676;
var G__13679 = cljs.core.count(c__8398__auto___13676);
var G__13680 = (0);
seq__13651_13663 = G__13677;
chunk__13652_13664 = G__13678;
count__13653_13665 = G__13679;
i__13654_13666 = G__13680;
continue;
} else {
var vec__13658_13681 = cljs.core.first(seq__13651_13675__$1);
var k_13682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13658_13681,(0),null);
var v_13683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13658_13681,(1),null);
this$__$1.setRequestHeader(k_13682,v_13683);

var G__13684 = cljs.core.next(seq__13651_13675__$1);
var G__13685 = null;
var G__13686 = (0);
var G__13687 = (0);
seq__13651_13663 = G__13684;
chunk__13652_13664 = G__13685;
count__13653_13665 = G__13686;
i__13654_13666 = G__13687;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__7492__auto__ = body;
if(cljs.core.truth_(or__7492__auto__)){
return or__7492__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
