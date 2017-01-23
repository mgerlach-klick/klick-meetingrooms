// Compiled by ClojureScript 1.9.293 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__8910_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8910_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__6753__auto__)){
var changed__$1 = temp__6753__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__8915 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8916 = null;
var count__8917 = (0);
var i__8918 = (0);
while(true){
if((i__8918 < count__8917)){
var s = cljs.core._nth.call(null,chunk__8916,i__8918);
var temp__6753__auto___8919 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___8919)){
var sheet_8920 = temp__6753__auto___8919;
var temp__6753__auto___8921__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8920.href,changed);
if(cljs.core.truth_(temp__6753__auto___8921__$1)){
var href_uri_8922 = temp__6753__auto___8921__$1;
sheet_8920.ownerNode.href = href_uri_8922.makeUnique().toString();
} else {
}
} else {
}

var G__8923 = seq__8915;
var G__8924 = chunk__8916;
var G__8925 = count__8917;
var G__8926 = (i__8918 + (1));
seq__8915 = G__8923;
chunk__8916 = G__8924;
count__8917 = G__8925;
i__8918 = G__8926;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8915);
if(temp__6753__auto__){
var seq__8915__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8915__$1)){
var c__8398__auto__ = cljs.core.chunk_first.call(null,seq__8915__$1);
var G__8927 = cljs.core.chunk_rest.call(null,seq__8915__$1);
var G__8928 = c__8398__auto__;
var G__8929 = cljs.core.count.call(null,c__8398__auto__);
var G__8930 = (0);
seq__8915 = G__8927;
chunk__8916 = G__8928;
count__8917 = G__8929;
i__8918 = G__8930;
continue;
} else {
var s = cljs.core.first.call(null,seq__8915__$1);
var temp__6753__auto___8931__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___8931__$1)){
var sheet_8932 = temp__6753__auto___8931__$1;
var temp__6753__auto___8933__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8932.href,changed);
if(cljs.core.truth_(temp__6753__auto___8933__$2)){
var href_uri_8934 = temp__6753__auto___8933__$2;
sheet_8932.ownerNode.href = href_uri_8934.makeUnique().toString();
} else {
}
} else {
}

var G__8935 = cljs.core.next.call(null,seq__8915__$1);
var G__8936 = null;
var G__8937 = (0);
var G__8938 = (0);
seq__8915 = G__8935;
chunk__8916 = G__8936;
count__8917 = G__8937;
i__8918 = G__8938;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__8943 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8944 = null;
var count__8945 = (0);
var i__8946 = (0);
while(true){
if((i__8946 < count__8945)){
var s = cljs.core._nth.call(null,chunk__8944,i__8946);
var temp__6753__auto___8947 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___8947)){
var image_8948 = temp__6753__auto___8947;
var temp__6753__auto___8949__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_8948.src,changed);
if(cljs.core.truth_(temp__6753__auto___8949__$1)){
var href_uri_8950 = temp__6753__auto___8949__$1;
image_8948.src = href_uri_8950.makeUnique().toString();
} else {
}
} else {
}

var G__8951 = seq__8943;
var G__8952 = chunk__8944;
var G__8953 = count__8945;
var G__8954 = (i__8946 + (1));
seq__8943 = G__8951;
chunk__8944 = G__8952;
count__8945 = G__8953;
i__8946 = G__8954;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8943);
if(temp__6753__auto__){
var seq__8943__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8943__$1)){
var c__8398__auto__ = cljs.core.chunk_first.call(null,seq__8943__$1);
var G__8955 = cljs.core.chunk_rest.call(null,seq__8943__$1);
var G__8956 = c__8398__auto__;
var G__8957 = cljs.core.count.call(null,c__8398__auto__);
var G__8958 = (0);
seq__8943 = G__8955;
chunk__8944 = G__8956;
count__8945 = G__8957;
i__8946 = G__8958;
continue;
} else {
var s = cljs.core.first.call(null,seq__8943__$1);
var temp__6753__auto___8959__$1 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___8959__$1)){
var image_8960 = temp__6753__auto___8959__$1;
var temp__6753__auto___8961__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_8960.src,changed);
if(cljs.core.truth_(temp__6753__auto___8961__$2)){
var href_uri_8962 = temp__6753__auto___8961__$2;
image_8960.src = href_uri_8962.makeUnique().toString();
} else {
}
} else {
}

var G__8963 = cljs.core.next.call(null,seq__8943__$1);
var G__8964 = null;
var G__8965 = (0);
var G__8966 = (0);
seq__8943 = G__8963;
chunk__8944 = G__8964;
count__8945 = G__8965;
i__8946 = G__8966;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8969){
var map__8972 = p__8969;
var map__8972__$1 = ((((!((map__8972 == null)))?((((map__8972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8972):map__8972);
var on_jsload = cljs.core.get.call(null,map__8972__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8972,map__8972__$1,on_jsload){
return (function (p1__8967_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8967_SHARP_,".js");
});})(map__8972,map__8972__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8972,map__8972__$1,on_jsload){
return (function (p1__8968_SHARP_){
return goog.Uri.parse(p1__8968_SHARP_).makeUnique();
});})(js_files,map__8972,map__8972__$1,on_jsload))
,js_files)),({"cleanupWhenDone": true})).addCallbacks(((function (js_files,map__8972,map__8972__$1,on_jsload){
return (function() { 
var G__8974__delegate = function (_){
return on_jsload.call(null);
};
var G__8974 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8975__i = 0, G__8975__a = new Array(arguments.length -  0);
while (G__8975__i < G__8975__a.length) {G__8975__a[G__8975__i] = arguments[G__8975__i + 0]; ++G__8975__i;}
  _ = new cljs.core.IndexedSeq(G__8975__a,0);
} 
return G__8974__delegate.call(this,_);};
G__8974.cljs$lang$maxFixedArity = 0;
G__8974.cljs$lang$applyTo = (function (arglist__8976){
var _ = cljs.core.seq(arglist__8976);
return G__8974__delegate(_);
});
G__8974.cljs$core$IFn$_invoke$arity$variadic = G__8974__delegate;
return G__8974;
})()
;})(js_files,map__8972,map__8972__$1,on_jsload))
,((function (js_files,map__8972,map__8972__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8972,map__8972__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__8981_8985 = cljs.core.seq.call(null,things_to_log);
var chunk__8982_8986 = null;
var count__8983_8987 = (0);
var i__8984_8988 = (0);
while(true){
if((i__8984_8988 < count__8983_8987)){
var t_8989 = cljs.core._nth.call(null,chunk__8982_8986,i__8984_8988);
console.log(t_8989);

var G__8990 = seq__8981_8985;
var G__8991 = chunk__8982_8986;
var G__8992 = count__8983_8987;
var G__8993 = (i__8984_8988 + (1));
seq__8981_8985 = G__8990;
chunk__8982_8986 = G__8991;
count__8983_8987 = G__8992;
i__8984_8988 = G__8993;
continue;
} else {
var temp__6753__auto___8994 = cljs.core.seq.call(null,seq__8981_8985);
if(temp__6753__auto___8994){
var seq__8981_8995__$1 = temp__6753__auto___8994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8981_8995__$1)){
var c__8398__auto___8996 = cljs.core.chunk_first.call(null,seq__8981_8995__$1);
var G__8997 = cljs.core.chunk_rest.call(null,seq__8981_8995__$1);
var G__8998 = c__8398__auto___8996;
var G__8999 = cljs.core.count.call(null,c__8398__auto___8996);
var G__9000 = (0);
seq__8981_8985 = G__8997;
chunk__8982_8986 = G__8998;
count__8983_8987 = G__8999;
i__8984_8988 = G__9000;
continue;
} else {
var t_9001 = cljs.core.first.call(null,seq__8981_8995__$1);
console.log(t_9001);

var G__9002 = cljs.core.next.call(null,seq__8981_8995__$1);
var G__9003 = null;
var G__9004 = (0);
var G__9005 = (0);
seq__8981_8985 = G__9002;
chunk__8982_8986 = G__9003;
count__8983_8987 = G__9004;
i__8984_8988 = G__9005;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9006_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__9006_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__9012){
var map__9013 = p__9012;
var map__9013__$1 = ((((!((map__9013 == null)))?((((map__9013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9013):map__9013);
var canonical_path = cljs.core.get.call(null,map__9013__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__9013__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__9015 = window;
var G__9015__$1 = (((G__9015 == null))?null:G__9015.location);
if((G__9015__$1 == null)){
return null;
} else {
return G__9015__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9016 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9016);

adzerk.boot_reload.reload.reload_css.call(null,G__9016);

adzerk.boot_reload.reload.reload_img.call(null,G__9016);

return G__9016;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map