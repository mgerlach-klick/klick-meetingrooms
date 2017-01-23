// Compiled by ClojureScript 1.9.293 {}
goog.provide('meetingrooms.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('hiccups.runtime');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
if(typeof meetingrooms.core.rooms !== 'undefined'){
} else {
meetingrooms.core.rooms = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
meetingrooms.core.set_rooms = (function meetingrooms$core$set_rooms(json){
return cljs.core.reset_BANG_.call(null,meetingrooms.core.rooms,cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('meetingrooms.core.set_rooms', meetingrooms.core.set_rooms);
meetingrooms.core.application = document.getElementById("app");
meetingrooms.core.set_html_BANG_ = (function meetingrooms$core$set_html_BANG_(el,content){
return (el["innerHTML"] = content);
});
meetingrooms.core.room_header = (function meetingrooms$core$room_header(room){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(room)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"floor","floor",1882041021).cljs$core$IFn$_invoke$arity$1(room)),cljs.core.str(")")].join('');
});
meetingrooms.core.generate_room = (function meetingrooms$core$generate_room(room){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.header","h4.header",-1814718863),meetingrooms.core.room_header.call(null,room)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flow-text","p.flow-text",498879180),"\n                      Emily Carr is located on the 4th floor, opposite of the gym.\n                  "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flow-text","p.flow-text",498879180),"\n                      Emily Carr is located on the 4th floor, opposite of the gym.\n                  "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider","div.slider",1951581386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.slides","ul.slides",-1792607598),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"resources/b3dd9e4248471785ec25bce216cdfd70.jpg"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"resources/b3dd9e4248471785ec25bce216cdfd70.jpg"], null)], null)], null)], null)], null)], null);
});
meetingrooms.core.show_room = (function meetingrooms$core$show_room(el,room_id){
cljs.core.prn.call(null,new cljs.core.Symbol(null,"ROOMID","ROOMID",8749419,null),room_id);

return meetingrooms.core.set_html_BANG_.call(null,el,JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,meetingrooms.core.rooms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rooms","rooms",1196158176),room_id], null)))));
});
meetingrooms.core.set_room_id = (function meetingrooms$core$set_room_id(room_id){
return secretary.core.dispatch_BANG_.call(null,[cljs.core.str("/room/"),cljs.core.str(room_id)].join(''));
});
goog.exportSymbol('meetingrooms.core.set_room_id', meetingrooms.core.set_room_id);
var action__9986__auto___12811 = (function (params__9987__auto__){
if(cljs.core.map_QMARK_.call(null,params__9987__auto__)){
var map__12807 = params__9987__auto__;
var map__12807__$1 = ((((!((map__12807 == null)))?((((map__12807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12807):map__12807);
var room = cljs.core.get.call(null,map__12807__$1,new cljs.core.Keyword(null,"room","room",536484922));
return meetingrooms.core.show_room.call(null,meetingrooms.core.application,cljs.core.keyword.call(null,room));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9987__auto__)){
var map__12809 = params__9987__auto__;
var map__12809__$1 = ((((!((map__12809 == null)))?((((map__12809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12809):map__12809);
var room = cljs.core.get.call(null,map__12809__$1,new cljs.core.Keyword(null,"room","room",536484922));
return meetingrooms.core.show_room.call(null,meetingrooms.core.application,cljs.core.keyword.call(null,room));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/room/:room",action__9986__auto___12811);

var action__9986__auto___12818 = (function (params__9987__auto__){
if(cljs.core.map_QMARK_.call(null,params__9987__auto__)){
var map__12812 = params__9987__auto__;
var map__12812__$1 = ((((!((map__12812 == null)))?((((map__12812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12812):map__12812);
return meetingrooms.core.set_html_BANG_.call(null,meetingrooms.core.application,"<h1>OMG! YOU'RE HOME!</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__9987__auto__)){
var vec__12814 = params__9987__auto__;
return meetingrooms.core.set_html_BANG_.call(null,meetingrooms.core.application,"<h1>OMG! YOU'RE HOME!</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__9986__auto___12818);

meetingrooms.core.home_path = ((function (action__9986__auto___12818){
return (function meetingrooms$core$home_path(var_args){
var args__8715__auto__ = [];
var len__8708__auto___12819 = arguments.length;
var i__8709__auto___12820 = (0);
while(true){
if((i__8709__auto___12820 < len__8708__auto___12819)){
args__8715__auto__.push((arguments[i__8709__auto___12820]));

var G__12821 = (i__8709__auto___12820 + (1));
i__8709__auto___12820 = G__12821;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return meetingrooms.core.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(action__9986__auto___12818))
;

meetingrooms.core.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__9986__auto___12818){
return (function (args__9985__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__9985__auto__);
});})(action__9986__auto___12818))
;

meetingrooms.core.home_path.cljs$lang$maxFixedArity = (0);

meetingrooms.core.home_path.cljs$lang$applyTo = ((function (action__9986__auto___12818){
return (function (seq12817){
return meetingrooms.core.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12817));
});})(action__9986__auto___12818))
;

var action__9986__auto___12827 = (function (params__9987__auto__){
if(cljs.core.map_QMARK_.call(null,params__9987__auto__)){
var map__12822 = params__9987__auto__;
var map__12822__$1 = ((((!((map__12822 == null)))?((((map__12822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12822):map__12822);
return meetingrooms.core.set_html_BANG_.call(null,meetingrooms.core.application,"<h1>LOL! YOU LOST!</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__9987__auto__)){
var vec__12824 = params__9987__auto__;
return meetingrooms.core.set_html_BANG_.call(null,meetingrooms.core.application,"<h1>LOL! YOU LOST!</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__9986__auto___12827);

var h_12830 = (new goog.History());
goog.events.listen(h_12830,goog.history.EventType.NAVIGATE,((function (h_12830){
return (function (p1__12828_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__12828_SHARP_.token);
});})(h_12830))
);

var G__12829_12831 = h_12830;
G__12829_12831.setEnabled(true);

/**
 * 
 */
meetingrooms.core.main = (function meetingrooms$core$main(){
return cljs.core.prn.call(null,new cljs.core.Symbol(null,"WEEEEEE","WEEEEEE",-1732399795,null));
});

//# sourceMappingURL=core.js.map