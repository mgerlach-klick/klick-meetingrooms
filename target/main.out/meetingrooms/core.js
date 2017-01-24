// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('meetingrooms.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('hiccups.runtime');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof meetingrooms.core.history !== 'undefined'){
} else {
meetingrooms.core.history = (function (){var G__14903 = (new goog.History());
var G__14904_14907 = G__14903;
var G__14905_14908 = goog.history.EventType.NAVIGATE;
var G__14906_14909 = ((function (G__14904_14907,G__14905_14908,G__14903){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__14904_14907,G__14905_14908,G__14903))
;
goog.events.listen(G__14904_14907,G__14905_14908,G__14906_14909);

G__14903.setEnabled(true);

return G__14903;
})();
}
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
if(typeof meetingrooms.core.rooms !== 'undefined'){
} else {
meetingrooms.core.rooms = (function (){var G__14910 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14910) : cljs.core.atom.call(null,G__14910));
})();
}
meetingrooms.core.jquery = $;
meetingrooms.core.application = document.getElementById("app");
meetingrooms.core.set_rooms = (function meetingrooms$core$set_rooms(json){
var G__14913 = meetingrooms.core.rooms;
var G__14914 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14913,G__14914) : cljs.core.reset_BANG_.call(null,G__14913,G__14914));
});
goog.exportSymbol('meetingrooms.core.set_rooms', meetingrooms.core.set_rooms);
meetingrooms.core.get_room = (function meetingrooms$core$get_room(room_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(meetingrooms.core.rooms) : cljs.core.deref.call(null,meetingrooms.core.rooms)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rooms,room_id], null));
});
meetingrooms.core.n_th = (function meetingrooms$core$n_th(n){
return [cljs.core.str(n),cljs.core.str((function (){var rem = cljs.core.mod(n,(100));
if(((rem >= (11))) && ((rem <= (13)))){
return "th";
} else {
var pred__14918 = cljs.core._EQ_;
var expr__14919 = cljs.core.mod(n,(10));
if(cljs.core.truth_((pred__14918.cljs$core$IFn$_invoke$arity$2 ? pred__14918.cljs$core$IFn$_invoke$arity$2((1),expr__14919) : pred__14918.call(null,(1),expr__14919)))){
return "st";
} else {
if(cljs.core.truth_((pred__14918.cljs$core$IFn$_invoke$arity$2 ? pred__14918.cljs$core$IFn$_invoke$arity$2((2),expr__14919) : pred__14918.call(null,(2),expr__14919)))){
return "nd";
} else {
if(cljs.core.truth_((pred__14918.cljs$core$IFn$_invoke$arity$2 ? pred__14918.cljs$core$IFn$_invoke$arity$2((3),expr__14919) : pred__14918.call(null,(3),expr__14919)))){
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,"display: inline"], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(room),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br$hide_DASH_on_DASH_med_DASH_and_DASH_up], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$grey_DASH_text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,"display: inline"], null)," (",meetingrooms.core.n_th(cljs.core.cst$kw$floor.cljs$core$IFn$_invoke$arity$1(room))," ",cljs.core.cst$kw$tower.cljs$core$IFn$_invoke$arity$1(room),")"], null)], null);
});
meetingrooms.core.generate_room = (function meetingrooms$core$generate_room(room_id){
var room = meetingrooms.core.get_room(room_id);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([room], 0));

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,meetingrooms.core.room_header(room),(function (){var temp__6753__auto__ = cljs.core.cst$kw$aliases.cljs$core$IFn$_invoke$arity$1(room);
if(cljs.core.truth_(temp__6753__auto__)){
var aliases = temp__6753__auto__;
if(cljs.core.empty_QMARK_(aliases)){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$grey_DASH_text,"aka: ",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",aliases))], null);
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$flow_DASH_text,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(room)], null)], null),(function (){var temp__6753__auto__ = cljs.core.cst$kw$pictures.cljs$core$IFn$_invoke$arity$1(room);
if(cljs.core.truth_(temp__6753__auto__)){
var images = temp__6753__auto__;
if(cljs.core.empty_QMARK_(images)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$slider,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$slides,(function (){var iter__8349__auto__ = ((function (images,temp__6753__auto__,room){
return (function meetingrooms$core$generate_room_$_iter__14933(s__14934){
return (new cljs.core.LazySeq(null,((function (images,temp__6753__auto__,room){
return (function (){
var s__14934__$1 = s__14934;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__14934__$1);
if(temp__6753__auto____$1){
var s__14934__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14934__$2)){
var c__8347__auto__ = cljs.core.chunk_first(s__14934__$2);
var size__8348__auto__ = cljs.core.count(c__8347__auto__);
var b__14936 = cljs.core.chunk_buffer(size__8348__auto__);
if((function (){var i__14935 = (0);
while(true){
if((i__14935 < size__8348__auto__)){
var img = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8347__auto__,i__14935);
cljs.core.chunk_append(b__14936,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str("/resources/pics/"),cljs.core.str(img)].join('')], null)], null)], null));

var G__14945 = (i__14935 + (1));
i__14935 = G__14945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14936),meetingrooms$core$generate_room_$_iter__14933(cljs.core.chunk_rest(s__14934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14936),null);
}
} else {
var img = cljs.core.first(s__14934__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str("/resources/pics/"),cljs.core.str(img)].join('')], null)], null)], null),meetingrooms$core$generate_room_$_iter__14933(cljs.core.rest(s__14934__$2)));
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
return iter__8349__auto__(images);
})()], null)], null);
}
} else {
return null;
}
})(),(function (){var temp__6753__auto__ = cljs.core.cst$kw$moreinfo.cljs$core$IFn$_invoke$arity$1(room);
if(cljs.core.truth_(temp__6753__auto__)){
var more = temp__6753__auto__;
if(cljs.core.empty_QMARK_(more)){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,"More information:",(function (){var iter__8349__auto__ = ((function (more,temp__6753__auto__,room){
return (function meetingrooms$core$generate_room_$_iter__14939(s__14940){
return (new cljs.core.LazySeq(null,((function (more,temp__6753__auto__,room){
return (function (){
var s__14940__$1 = s__14940;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__14940__$1);
if(temp__6753__auto____$1){
var s__14940__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14940__$2)){
var c__8347__auto__ = cljs.core.chunk_first(s__14940__$2);
var size__8348__auto__ = cljs.core.count(c__8347__auto__);
var b__14942 = cljs.core.chunk_buffer(size__8348__auto__);
if((function (){var i__14941 = (0);
while(true){
if((i__14941 < size__8348__auto__)){
var info = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8347__auto__,i__14941);
cljs.core.chunk_append(b__14942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,info], null),info], null)], null));

var G__14946 = (i__14941 + (1));
i__14941 = G__14946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14942),meetingrooms$core$generate_room_$_iter__14939(cljs.core.chunk_rest(s__14940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14942),null);
}
} else {
var info = cljs.core.first(s__14940__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,info], null),info], null)], null),meetingrooms$core$generate_room_$_iter__14939(cljs.core.rest(s__14940__$2)));
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
return iter__8349__auto__(more);
})()], null);
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:mgerlach@klick.com?subject=Meetingrooms%20"),cljs.core.str(room_id)].join('')], null),"Contribute to make this page better!"], null)], null);
});
meetingrooms.core.show_room = (function meetingrooms$core$show_room(el,room_id){
meetingrooms.core.set_html_BANG_(el,[cljs.core.str(hiccups.runtime.render_html(meetingrooms.core.generate_room(room_id)))].join(''));

return (meetingrooms.core.jquery.cljs$core$IFn$_invoke$arity$1 ? meetingrooms.core.jquery.cljs$core$IFn$_invoke$arity$1(".slider") : meetingrooms.core.jquery.call(null,".slider")).slider(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["full_width",false,"indicators",(cljs.core.count(cljs.core.cst$kw$pictures.cljs$core$IFn$_invoke$arity$1(meetingrooms.core.get_room(room_id))) > (1))], null)));
});
meetingrooms.core.set_room_id = (function meetingrooms$core$set_room_id(room_id){
return meetingrooms.core.history.setToken([cljs.core.str("/room/"),cljs.core.str(room_id)].join(''));
});
goog.exportSymbol('meetingrooms.core.set_room_id', meetingrooms.core.set_room_id);
var action__14489__auto___14953 = (function (params__14490__auto__){
if(cljs.core.map_QMARK_(params__14490__auto__)){
var map__14947 = params__14490__auto__;
var map__14947__$1 = ((((!((map__14947 == null)))?((((map__14947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14947):map__14947);
var room = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14947__$1,cljs.core.cst$kw$room);
return meetingrooms.core.show_room(meetingrooms.core.application,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(room));
} else {
if(cljs.core.vector_QMARK_(params__14490__auto__)){
var vec__14949 = params__14490__auto__;
var room = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14949,(0),null);
return meetingrooms.core.show_room(meetingrooms.core.application,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(room));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/room/:room",action__14489__auto___14953);

meetingrooms.core.room_path = ((function (action__14489__auto___14953){
return (function meetingrooms$core$room_path(var_args){
var args__8715__auto__ = [];
var len__8708__auto___14954 = arguments.length;
var i__8709__auto___14955 = (0);
while(true){
if((i__8709__auto___14955 < len__8708__auto___14954)){
args__8715__auto__.push((arguments[i__8709__auto___14955]));

var G__14956 = (i__8709__auto___14955 + (1));
i__8709__auto___14955 = G__14956;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return meetingrooms.core.room_path.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(action__14489__auto___14953))
;

meetingrooms.core.room_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14489__auto___14953){
return (function (args__14488__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/room/:room",args__14488__auto__);
});})(action__14489__auto___14953))
;

meetingrooms.core.room_path.cljs$lang$maxFixedArity = (0);

meetingrooms.core.room_path.cljs$lang$applyTo = ((function (action__14489__auto___14953){
return (function (seq14952){
return meetingrooms.core.room_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14952));
});})(action__14489__auto___14953))
;

var action__14489__auto___14967 = (function (params__14490__auto__){
if(cljs.core.map_QMARK_(params__14490__auto__)){
var map__14957 = params__14490__auto__;
var map__14957__$1 = ((((!((map__14957 == null)))?((((map__14957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14957):map__14957);
return meetingrooms.core.set_html_BANG_(meetingrooms.core.application,[cljs.core.str("<p class=\"flow-text\">Just search for the meeting room by tapping on the search bar above! It supports fuzzy search and as soon as there is only one option left it will automatically load the result! I hope this is helpful! </p>")].join(''));
} else {
if(cljs.core.vector_QMARK_(params__14490__auto__)){
var vec__14961 = params__14490__auto__;
return meetingrooms.core.set_html_BANG_(meetingrooms.core.application,[cljs.core.str("<p class=\"flow-text\">Just search for the meeting room by tapping on the search bar above! It supports fuzzy search and as soon as there is only one option left it will automatically load the result! I hope this is helpful! </p>")].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__14489__auto___14967);

meetingrooms.core.home_path = ((function (action__14489__auto___14967){
return (function meetingrooms$core$home_path(var_args){
var args__8715__auto__ = [];
var len__8708__auto___14968 = arguments.length;
var i__8709__auto___14969 = (0);
while(true){
if((i__8709__auto___14969 < len__8708__auto___14968)){
args__8715__auto__.push((arguments[i__8709__auto___14969]));

var G__14970 = (i__8709__auto___14969 + (1));
i__8709__auto___14969 = G__14970;
continue;
} else {
}
break;
}

var argseq__8716__auto__ = ((((0) < args__8715__auto__.length))?(new cljs.core.IndexedSeq(args__8715__auto__.slice((0)),(0),null)):null);
return meetingrooms.core.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__8716__auto__);
});})(action__14489__auto___14967))
;

meetingrooms.core.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14489__auto___14967){
return (function (args__14488__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__14488__auto__);
});})(action__14489__auto___14967))
;

meetingrooms.core.home_path.cljs$lang$maxFixedArity = (0);

meetingrooms.core.home_path.cljs$lang$applyTo = ((function (action__14489__auto___14967){
return (function (seq14966){
return meetingrooms.core.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14966));
});})(action__14489__auto___14967))
;

var action__14489__auto___14976 = (function (params__14490__auto__){
if(cljs.core.map_QMARK_(params__14490__auto__)){
var map__14971 = params__14490__auto__;
var map__14971__$1 = ((((!((map__14971 == null)))?((((map__14971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14971):map__14971);
return meetingrooms.core.set_html_BANG_(meetingrooms.core.application,[cljs.core.str(hiccups.runtime.render_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.flow_text,"There doesn't seem to be anything here!"], null)))].join(''));
} else {
if(cljs.core.vector_QMARK_(params__14490__auto__)){
var vec__14973 = params__14490__auto__;
return meetingrooms.core.set_html_BANG_(meetingrooms.core.application,[cljs.core.str(hiccups.runtime.render_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.flow_text,"There doesn't seem to be anything here!"], null)))].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__14489__auto___14976);

meetingrooms.core.go_to_fragment = (function meetingrooms$core$go_to_fragment(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["reloading",[cljs.core.str(window.location.hash)].join('')], 0));

return secretary.core.dispatch_BANG_([cljs.core.str(window.location.hash)].join(''));
});
goog.exportSymbol('meetingrooms.core.go_to_fragment', meetingrooms.core.go_to_fragment);
/**
 * 
 */
meetingrooms.core.main = (function meetingrooms$core$main(){
return null;
});
goog.exportSymbol('meetingrooms.core.main', meetingrooms.core.main);
