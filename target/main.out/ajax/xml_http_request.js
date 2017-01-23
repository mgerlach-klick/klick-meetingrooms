// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9030,handler){
var map__9031 = p__9030;
var map__9031__$1 = ((((!((map__9031 == null)))?((((map__9031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9031):map__9031);
var uri = cljs.core.get.call(null,map__9031__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__9031__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__9031__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__9031__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__9031__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9031__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__9031__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9031,map__9031__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__9029_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__9029_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__9031,map__9031__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__6753__auto___9043 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__6753__auto___9043)){
var response_type_9044 = temp__6753__auto___9043;
this$__$1.responseType = cljs.core.name.call(null,response_type_9044);
} else {
}

var seq__9033_9045 = cljs.core.seq.call(null,headers);
var chunk__9034_9046 = null;
var count__9035_9047 = (0);
var i__9036_9048 = (0);
while(true){
if((i__9036_9048 < count__9035_9047)){
var vec__9037_9049 = cljs.core._nth.call(null,chunk__9034_9046,i__9036_9048);
var k_9050 = cljs.core.nth.call(null,vec__9037_9049,(0),null);
var v_9051 = cljs.core.nth.call(null,vec__9037_9049,(1),null);
this$__$1.setRequestHeader(k_9050,v_9051);

var G__9052 = seq__9033_9045;
var G__9053 = chunk__9034_9046;
var G__9054 = count__9035_9047;
var G__9055 = (i__9036_9048 + (1));
seq__9033_9045 = G__9052;
chunk__9034_9046 = G__9053;
count__9035_9047 = G__9054;
i__9036_9048 = G__9055;
continue;
} else {
var temp__6753__auto___9056 = cljs.core.seq.call(null,seq__9033_9045);
if(temp__6753__auto___9056){
var seq__9033_9057__$1 = temp__6753__auto___9056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9033_9057__$1)){
var c__8398__auto___9058 = cljs.core.chunk_first.call(null,seq__9033_9057__$1);
var G__9059 = cljs.core.chunk_rest.call(null,seq__9033_9057__$1);
var G__9060 = c__8398__auto___9058;
var G__9061 = cljs.core.count.call(null,c__8398__auto___9058);
var G__9062 = (0);
seq__9033_9045 = G__9059;
chunk__9034_9046 = G__9060;
count__9035_9047 = G__9061;
i__9036_9048 = G__9062;
continue;
} else {
var vec__9040_9063 = cljs.core.first.call(null,seq__9033_9057__$1);
var k_9064 = cljs.core.nth.call(null,vec__9040_9063,(0),null);
var v_9065 = cljs.core.nth.call(null,vec__9040_9063,(1),null);
this$__$1.setRequestHeader(k_9064,v_9065);

var G__9066 = cljs.core.next.call(null,seq__9033_9057__$1);
var G__9067 = null;
var G__9068 = (0);
var G__9069 = (0);
seq__9033_9045 = G__9066;
chunk__9034_9046 = G__9067;
count__9035_9047 = G__9068;
i__9036_9048 = G__9069;
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