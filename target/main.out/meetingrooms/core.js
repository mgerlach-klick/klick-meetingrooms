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
if(typeof meetingrooms.core.history !== 'undefined'){
} else {
meetingrooms.core.history = (function (){var G__12704 = (new goog.History());
goog.events.listen(G__12704,goog.history.EventType.NAVIGATE,((function (G__12704){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__12704))
);

G__12704.setEnabled(true);

return G__12704;
})();
}
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
if(typeof meetingrooms.core.rooms !== 'undefined'){
} else {
meetingrooms.core.rooms = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
meetingrooms.core.jquery = $;
meetingrooms.core.application = document.getElementById("app");
meetingrooms.core.set_rooms = (function meetingrooms$core$set_rooms(json){
return cljs.core.reset_BANG_.call(null,meetingrooms.core.rooms,cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('meetingrooms.core.set_rooms', meetingrooms.core.set_rooms);
meetingrooms.core.get_room = (function meetingrooms$core$get_room(room_id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,meetingrooms.core.rooms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rooms","rooms",1196158176),room_id], null));
});
meetingrooms.core.n_th = (function meetingrooms$core$n_th(n){
return [cljs.core.str(n),cljs.core.str((function (){var rem = cljs.core.mod.call(null,n,(100));
if(((rem >= (11))) && ((rem <= (13)))){
return "th";
} else {
var pred__12708 = cljs.core._EQ_;
var expr__12709 = cljs.core.mod.call(null,n,(10));
if(cljs.core.truth_(pred__12708.call(null,(1),expr__12709))){
return "st";
} else {
if(cljs.core.truth_(pred__12708.call(null,(2),expr__12709))){
return "nd";
} else {
if(cljs.core.truth_(pred__12708.call(null,(3),expr__12709))){
return "rd";
} else {
return "th";
}
}
}
}
})())].join('');
});
meetingrooms.core.set_html_BANG_ = (function meetingrooms$core$set_html_BANG_(el,content){
return (el["innerHTML"] = content);
});
meetingrooms.core.room_header = (function meetingrooms$core$room_header(room){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.header","h4.header",-1814718863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"display: inline"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(room),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br.hide-on-med-and-up","br.hide-on-med-and-up",939132724)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.grey-text","h5.grey-text",1462071716),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"display: inline"], null)," (",meetingrooms.core.n_th.call(null,new cljs.core.Keyword(null,"floor","floor",1882041021).cljs$core$IFn$_invoke$arity$1(room))," ",new cljs.core.Keyword(null,"tower","tower",1202578472).cljs$core$IFn$_invoke$arity$1(room),")"], null)], null);
});
meetingrooms.core.generate_room = (function meetingrooms$core$generate_room(room_id){
var room = meetingrooms.core.get_room.call(null,room_id);
cljs.core.prn.call(null,room);

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),meetingrooms.core.room_header.call(null,room),(function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(room);
if(cljs.core.truth_(temp__6753__auto__)){
var aliases = temp__6753__auto__;
if(cljs.core.empty_QMARK_.call(null,aliases)){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.grey-text","p.grey-text",-765600564),"aka: ",cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",aliases))], null);
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flow-text","p.flow-text",498879180),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(room)], null)], null),(function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"pictures","pictures",516806515).cljs$core$IFn$_invoke$arity$1(room);
if(cljs.core.truth_(temp__6753__auto__)){
var images = temp__6753__auto__;
if(cljs.core.empty_QMARK_.call(null,images)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider","div.slider",1951581386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.slides","ul.slides",-1792607598),(function (){var iter__8349__auto__ = ((function (images,temp__6753__auto__,room){
return (function meetingrooms$core$generate_room_$_iter__12719(s__12720){
return (new cljs.core.LazySeq(null,((function (images,temp__6753__auto__,room){
return (function (){
var s__12720__$1 = s__12720;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__12720__$1);
if(temp__6753__auto____$1){
var s__12720__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12720__$2)){
var c__8347__auto__ = cljs.core.chunk_first.call(null,s__12720__$2);
var size__8348__auto__ = cljs.core.count.call(null,c__8347__auto__);
var b__12722 = cljs.core.chunk_buffer.call(null,size__8348__auto__);
if((function (){var i__12721 = (0);
while(true){
if((i__12721 < size__8348__auto__)){
var img = cljs.core._nth.call(null,c__8347__auto__,i__12721);
cljs.core.chunk_append.call(null,b__12722,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/resources/pics/"),cljs.core.str(img)].join('')], null)], null)], null));

var G__12727 = (i__12721 + (1));
i__12721 = G__12727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12722),meetingrooms$core$generate_room_$_iter__12719.call(null,cljs.core.chunk_rest.call(null,s__12720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12722),null);
}
} else {
var img = cljs.core.first.call(null,s__12720__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/resources/pics/"),cljs.core.str(img)].join('')], null)], null)], null),meetingrooms$core$generate_room_$_iter__12719.call(null,cljs.core.rest.call(null,s__12720__$2)));
}
} else {
return null;
}
break;
}
});})(images,temp__6753__auto__,room))
,null,null));
});})(images,temp__6753__auto__,room))
;
return iter__8349__auto__.call(null,images);
})()], null)], null);
}
} else {
return null;
}
})(),(function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"moreinfo","moreinfo",1841768367).cljs$core$IFn$_invoke$arity$1(room);
if(cljs.core.truth_(temp__6753__auto__)){
var more = temp__6753__auto__;
if(cljs.core.empty_QMARK_.call(null,more)){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),"More information:",(function (){var iter__8349__auto__ = ((function (more,temp__6753__auto__,room){
return (function meetingrooms$core$generate_room_$_iter__12723(s__12724){
return (new cljs.core.LazySeq(null,((function (more,temp__6753__auto__,room){
return (function (){
var s__12724__$1 = s__12724;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__12724__$1);
if(temp__6753__auto____$1){
var s__12724__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12724__$2)){
var c__8347__auto__ = cljs.core.chunk_first.call(null,s__12724__$2);
var size__8348__auto__ = cljs.core.count.call(null,c__8347__auto__);
var b__12726 = cljs.core.chunk_buffer.call(null,size__8348__auto__);
if((function (){var i__12725 = (0);
while(true){
if((i__12725 < size__8348__auto__)){
var info = cljs.core._nth.call(null,c__8347__auto__,i__12725);
cljs.core.chunk_append.call(null,b__12726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),info], null),info], null)], null));

var G__12728 = (i__12725 + (1));
i__12725 = G__12728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12726),meetingrooms$core$generate_room_$_iter__12723.call(null,cljs.core.chunk_rest.call(null,s__12724__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12726),null);
}
} else {
var info = cljs.core.first.call(null,s__12724__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),info], null),info], null)], null),meetingrooms$core$generate_room_$_iter__12723.call(null,cljs.core.rest.call(null,s__12724__$2)));
}
} else {
return null;
}
break;
}
});})(more,temp__6753__auto__,room))
,null,null));
});})(more,temp__6753__auto__,room))
;
return iter__8349__auto__.call(null,more);
})()], null);
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.right","a.right",-2051409107),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:mgerlach@klick.com?subject=Meetingrooms%20"),cljs.core.str(room_id)].join('')], null),"Contribute to make this page better!"], null)], null);
});
meetingrooms.core.show_room = (function meetingrooms$core$show_room(el,room_id){
meetingrooms.core.set_html_BANG_.call(null,el,[cljs.core.str(hiccups.runtime.render_html.call(null,meetingrooms.core.generate_room.call(null,room_id)))].join(''));

return meetingrooms.core.jquery.call(null,".slider").slider(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["full_width",false,"indicators",(cljs.core.count.call(null,new cljs.core.Keyword(null,"pictures","pictures",516806515).cljs$core$IFn$_invoke$arity$1(meetingrooms.core.get_room.call(null,room_id))) > (1))], null)));
});
meetingrooms.core.set_room_id = (function meetingrooms$core$set_room_id(room_id){
return meetingrooms.core.history.setToken([cljs.core.str("/room/"),cljs.core.str(room_id)].join(''));
});
goog.exportSymbol('meetingrooms.core.set_room_id', meetingrooms.core.set_room_id);
var action__9999__auto___12735 = (function (params__10000__auto__){
if(cljs.core.map_QMARK_.call(null,params__10000__auto__)){
var map__12729 = params__10000__auto__;
var map__12729__$1 = ((((!((map__12729 == null)))?((((map__12729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12729):map__12729);
var room = cljs.core.get.call(null,map__12729__$1,new cljs.core.Keyword(null,"room","room",536484922));
return meetingrooms.core.show_room.call(null,meetingrooms.core.application,cljs.core.keyword.call(null,room));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10000__auto__)){
var vec__12731 = params__10000__auto__;
var room = cljs.core.nth.call(null,vec__12731,(0),null);
return meetingrooms.core.show_room.call(null,meetingrooms.core.application,cljs.core.keyword.call(null,room));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/room/:room",action__9999__auto___12735);

meetingrooms.core.room_path = ((function (action__9999__auto___12735){
return (function meetingrooms$core$room_path(var_args){
var args__8715__auto__ = [];
var len__8708__auto___12736 = arguments.length;
var i__8709__auto___12737 = (0);
while(true){
if((i__8709__auto___12737 < len__8708__auto___12736)){
args__8715__auto__.push((arguments[i__8709__auto___12737]));

var G__12738 = (i__8709__auto___12737 + (1));
i__8709__auto___12737 = G__12738;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return meetingrooms.core.room_path.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(action__9999__auto___12735))
;

meetingrooms.core.room_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__9999__auto___12735){
return (function (args__9998__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/room/:room",args__9998__auto__);
});})(action__9999__auto___12735))
;

meetingrooms.core.room_path.cljs$lang$maxFixedArity = (0);

meetingrooms.core.room_path.cljs$lang$applyTo = ((function (action__9999__auto___12735){
return (function (seq12734){
return meetingrooms.core.room_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12734));
});})(action__9999__auto___12735))
;

var action__9999__auto___12749 = (function (params__10000__auto__){
if(cljs.core.map_QMARK_.call(null,params__10000__auto__)){
var map__12739 = params__10000__auto__;
var map__12739__$1 = ((((!((map__12739 == null)))?((((map__12739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12739):map__12739);
return meetingrooms.core.set_html_BANG_.call(null,meetingrooms.core.application,[cljs.core.str("<span><p class=\"section flow-text\">Just search for the meeting room by tapping on the search bar above! It supports fuzzy search and as soon as there is only one option left it will automatically load the result!</p><p class=\"section flow-text\">Feel free to link directly to the URLs of the meeting rooms, I will keep the URLs stable.</p><p class=\"section flow-text\">Please also help by contributing to this site by offering corrections, better instructions, additions, comments, and all that. There is a link through which you can email at the bottom of every page.</p></span>")].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10000__auto__)){
var vec__12743 = params__10000__auto__;
return meetingrooms.core.set_html_BANG_.call(null,meetingrooms.core.application,[cljs.core.str("<span><p class=\"section flow-text\">Just search for the meeting room by tapping on the search bar above! It supports fuzzy search and as soon as there is only one option left it will automatically load the result!</p><p class=\"section flow-text\">Feel free to link directly to the URLs of the meeting rooms, I will keep the URLs stable.</p><p class=\"section flow-text\">Please also help by contributing to this site by offering corrections, better instructions, additions, comments, and all that. There is a link through which you can email at the bottom of every page.</p></span>")].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__9999__auto___12749);

meetingrooms.core.home_path = ((function (action__9999__auto___12749){
return (function meetingrooms$core$home_path(var_args){
var args__8715__auto__ = [];
var len__8708__auto___12750 = arguments.length;
var i__8709__auto___12751 = (0);
while(true){
if((i__8709__auto___12751 < len__8708__auto___12750)){
args__8715__auto__.push((arguments[i__8709__auto___12751]));

var G__12752 = (i__8709__auto___12751 + (1));
i__8709__auto___12751 = G__12752;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return meetingrooms.core.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(action__9999__auto___12749))
;

meetingrooms.core.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__9999__auto___12749){
return (function (args__9998__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__9998__auto__);
});})(action__9999__auto___12749))
;

meetingrooms.core.home_path.cljs$lang$maxFixedArity = (0);

meetingrooms.core.home_path.cljs$lang$applyTo = ((function (action__9999__auto___12749){
return (function (seq12748){
return meetingrooms.core.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12748));
});})(action__9999__auto___12749))
;

var action__9999__auto___12758 = (function (params__10000__auto__){
if(cljs.core.map_QMARK_.call(null,params__10000__auto__)){
var map__12753 = params__10000__auto__;
var map__12753__$1 = ((((!((map__12753 == null)))?((((map__12753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12753):map__12753);
return meetingrooms.core.set_html_BANG_.call(null,meetingrooms.core.application,[cljs.core.str(hiccups.runtime.render_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.flow_text,"There doesn't seem to be anything here!"], null)))].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10000__auto__)){
var vec__12755 = params__10000__auto__;
return meetingrooms.core.set_html_BANG_.call(null,meetingrooms.core.application,[cljs.core.str(hiccups.runtime.render_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.flow_text,"There doesn't seem to be anything here!"], null)))].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__9999__auto___12758);

meetingrooms.core.go_to_fragment = (function meetingrooms$core$go_to_fragment(){
cljs.core.prn.call(null,"reloading",[cljs.core.str(window.location.hash)].join(''));

return secretary.core.dispatch_BANG_.call(null,[cljs.core.str(window.location.hash)].join(''));
});
goog.exportSymbol('meetingrooms.core.go_to_fragment', meetingrooms.core.go_to_fragment);
/**
 * 
 */
meetingrooms.core.main = (function meetingrooms$core$main(){
return null;
});
goog.exportSymbol('meetingrooms.core.main', meetingrooms.core.main);

//# sourceMappingURL=core.js.map