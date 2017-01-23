// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9240,handler){
var map__9241 = p__9240;
var map__9241__$1 = ((((!((map__9241 == null)))?((((map__9241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9241):map__9241);
var uri = cljs.core.get.call(null,map__9241__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__9241__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__9241__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__9241__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__9241__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9241__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__9241__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9241,map__9241__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__9239_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__9239_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__9241,map__9241__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__6753__auto___9253 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__6753__auto___9253)){
var response_type_9254 = temp__6753__auto___9253;
this$__$1.responseType = cljs.core.name.call(null,response_type_9254);
} else {
}

var seq__9243_9255 = cljs.core.seq.call(null,headers);
var chunk__9244_9256 = null;
var count__9245_9257 = (0);
var i__9246_9258 = (0);
while(true){
if((i__9246_9258 < count__9245_9257)){
var vec__9247_9259 = cljs.core._nth.call(null,chunk__9244_9256,i__9246_9258);
var k_9260 = cljs.core.nth.call(null,vec__9247_9259,(0),null);
var v_9261 = cljs.core.nth.call(null,vec__9247_9259,(1),null);
this$__$1.setRequestHeader(k_9260,v_9261);

var G__9262 = seq__9243_9255;
var G__9263 = chunk__9244_9256;
var G__9264 = count__9245_9257;
var G__9265 = (i__9246_9258 + (1));
seq__9243_9255 = G__9262;
chunk__9244_9256 = G__9263;
count__9245_9257 = G__9264;
i__9246_9258 = G__9265;
continue;
} else {
var temp__6753__auto___9266 = cljs.core.seq.call(null,seq__9243_9255);
if(temp__6753__auto___9266){
var seq__9243_9267__$1 = temp__6753__auto___9266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9243_9267__$1)){
var c__8398__auto___9268 = cljs.core.chunk_first.call(null,seq__9243_9267__$1);
var G__9269 = cljs.core.chunk_rest.call(null,seq__9243_9267__$1);
var G__9270 = c__8398__auto___9268;
var G__9271 = cljs.core.count.call(null,c__8398__auto___9268);
var G__9272 = (0);
seq__9243_9255 = G__9269;
chunk__9244_9256 = G__9270;
count__9245_9257 = G__9271;
i__9246_9258 = G__9272;
continue;
} else {
var vec__9250_9273 = cljs.core.first.call(null,seq__9243_9267__$1);
var k_9274 = cljs.core.nth.call(null,vec__9250_9273,(0),null);
var v_9275 = cljs.core.nth.call(null,vec__9250_9273,(1),null);
this$__$1.setRequestHeader(k_9274,v_9275);

var G__9276 = cljs.core.next.call(null,seq__9243_9267__$1);
var G__9277 = null;
var G__9278 = (0);
var G__9279 = (0);
seq__9243_9255 = G__9276;
chunk__9244_9256 = G__9277;
count__9245_9257 = G__9278;
i__9246_9258 = G__9279;
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
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map