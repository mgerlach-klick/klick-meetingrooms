// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9043,handler){
var map__9044 = p__9043;
var map__9044__$1 = ((((!((map__9044 == null)))?((((map__9044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9044):map__9044);
var uri = cljs.core.get.call(null,map__9044__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__9044__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__9044__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__9044__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__9044__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9044__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__9044__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9044,map__9044__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__9042_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__9042_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__9044,map__9044__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__6753__auto___9056 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__6753__auto___9056)){
var response_type_9057 = temp__6753__auto___9056;
this$__$1.responseType = cljs.core.name.call(null,response_type_9057);
} else {
}

var seq__9046_9058 = cljs.core.seq.call(null,headers);
var chunk__9047_9059 = null;
var count__9048_9060 = (0);
var i__9049_9061 = (0);
while(true){
if((i__9049_9061 < count__9048_9060)){
var vec__9050_9062 = cljs.core._nth.call(null,chunk__9047_9059,i__9049_9061);
var k_9063 = cljs.core.nth.call(null,vec__9050_9062,(0),null);
var v_9064 = cljs.core.nth.call(null,vec__9050_9062,(1),null);
this$__$1.setRequestHeader(k_9063,v_9064);

var G__9065 = seq__9046_9058;
var G__9066 = chunk__9047_9059;
var G__9067 = count__9048_9060;
var G__9068 = (i__9049_9061 + (1));
seq__9046_9058 = G__9065;
chunk__9047_9059 = G__9066;
count__9048_9060 = G__9067;
i__9049_9061 = G__9068;
continue;
} else {
var temp__6753__auto___9069 = cljs.core.seq.call(null,seq__9046_9058);
if(temp__6753__auto___9069){
var seq__9046_9070__$1 = temp__6753__auto___9069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9046_9070__$1)){
var c__8398__auto___9071 = cljs.core.chunk_first.call(null,seq__9046_9070__$1);
var G__9072 = cljs.core.chunk_rest.call(null,seq__9046_9070__$1);
var G__9073 = c__8398__auto___9071;
var G__9074 = cljs.core.count.call(null,c__8398__auto___9071);
var G__9075 = (0);
seq__9046_9058 = G__9072;
chunk__9047_9059 = G__9073;
count__9048_9060 = G__9074;
i__9049_9061 = G__9075;
continue;
} else {
var vec__9053_9076 = cljs.core.first.call(null,seq__9046_9070__$1);
var k_9077 = cljs.core.nth.call(null,vec__9053_9076,(0),null);
var v_9078 = cljs.core.nth.call(null,vec__9053_9076,(1),null);
this$__$1.setRequestHeader(k_9077,v_9078);

var G__9079 = cljs.core.next.call(null,seq__9046_9070__$1);
var G__9080 = null;
var G__9081 = (0);
var G__9082 = (0);
seq__9046_9058 = G__9079;
chunk__9047_9059 = G__9080;
count__9048_9060 = G__9081;
i__9049_9061 = G__9082;
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