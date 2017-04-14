// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace(s,/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__6404__auto__ = (cljs.core.count(attr) < (5));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var G__15330 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(attr,(0),(5));
switch (G__15330) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case(attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__15333 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__15333) {
case "class":
return cljs.core.cst$kw$className;

break;
case "for":
return cljs.core.cst$kw$htmlFor;

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_tools.dom.opt_key_case(cljs.core.name(om_tools.dom.opt_key_alias(opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_(opt_val)){
return (om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1 ? om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1(opt_val) : om_tools.dom.format_opts.call(null,opt_val));
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_(opts)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15339){
var vec__15340 = p__15339;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15340,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key(k),om_tools.dom.format_opt_val(v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_(form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_(form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__6404__auto__ = React.isValidElement;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_(x)) && (!(om_tools.dom.valid_element_QMARK_(x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts(opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_(opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__15346 = om_tools.dom.element_args(opts,children);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15346,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15346,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor,cljs.core.flatten(cljs.core.cons(opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args15349 = [];
var len__7479__auto___15974 = arguments.length;
var i__7480__auto___15975 = (0);
while(true){
if((i__7480__auto___15975 < len__7479__auto___15974)){
args15349.push((arguments[i__7480__auto___15975]));

var G__15976 = (i__7480__auto___15975 + (1));
i__7480__auto___15975 = G__15976;
continue;
} else {
}
break;
}

var G__15353 = args15349.length;
switch (G__15353) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15349.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.a,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq15350){
var G__15351 = cljs.core.first(seq15350);
var seq15350__$1 = cljs.core.next(seq15350);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__15351,seq15350__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args15354 = [];
var len__7479__auto___15978 = arguments.length;
var i__7480__auto___15979 = (0);
while(true){
if((i__7480__auto___15979 < len__7479__auto___15978)){
args15354.push((arguments[i__7480__auto___15979]));

var G__15980 = (i__7480__auto___15979 + (1));
i__7480__auto___15979 = G__15980;
continue;
} else {
}
break;
}

var G__15358 = args15354.length;
switch (G__15358) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15354.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.abbr,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq15355){
var G__15356 = cljs.core.first(seq15355);
var seq15355__$1 = cljs.core.next(seq15355);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__15356,seq15355__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args15359 = [];
var len__7479__auto___15982 = arguments.length;
var i__7480__auto___15983 = (0);
while(true){
if((i__7480__auto___15983 < len__7479__auto___15982)){
args15359.push((arguments[i__7480__auto___15983]));

var G__15984 = (i__7480__auto___15983 + (1));
i__7480__auto___15983 = G__15984;
continue;
} else {
}
break;
}

var G__15363 = args15359.length;
switch (G__15363) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15359.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.address,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq15360){
var G__15361 = cljs.core.first(seq15360);
var seq15360__$1 = cljs.core.next(seq15360);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__15361,seq15360__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args15364 = [];
var len__7479__auto___15986 = arguments.length;
var i__7480__auto___15987 = (0);
while(true){
if((i__7480__auto___15987 < len__7479__auto___15986)){
args15364.push((arguments[i__7480__auto___15987]));

var G__15988 = (i__7480__auto___15987 + (1));
i__7480__auto___15987 = G__15988;
continue;
} else {
}
break;
}

var G__15368 = args15364.length;
switch (G__15368) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15364.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.area,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq15365){
var G__15366 = cljs.core.first(seq15365);
var seq15365__$1 = cljs.core.next(seq15365);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__15366,seq15365__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args15369 = [];
var len__7479__auto___15990 = arguments.length;
var i__7480__auto___15991 = (0);
while(true){
if((i__7480__auto___15991 < len__7479__auto___15990)){
args15369.push((arguments[i__7480__auto___15991]));

var G__15992 = (i__7480__auto___15991 + (1));
i__7480__auto___15991 = G__15992;
continue;
} else {
}
break;
}

var G__15373 = args15369.length;
switch (G__15373) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15369.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.article,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq15370){
var G__15371 = cljs.core.first(seq15370);
var seq15370__$1 = cljs.core.next(seq15370);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__15371,seq15370__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args15374 = [];
var len__7479__auto___15994 = arguments.length;
var i__7480__auto___15995 = (0);
while(true){
if((i__7480__auto___15995 < len__7479__auto___15994)){
args15374.push((arguments[i__7480__auto___15995]));

var G__15996 = (i__7480__auto___15995 + (1));
i__7480__auto___15995 = G__15996;
continue;
} else {
}
break;
}

var G__15378 = args15374.length;
switch (G__15378) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15374.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.aside,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq15375){
var G__15376 = cljs.core.first(seq15375);
var seq15375__$1 = cljs.core.next(seq15375);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__15376,seq15375__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args15379 = [];
var len__7479__auto___15998 = arguments.length;
var i__7480__auto___15999 = (0);
while(true){
if((i__7480__auto___15999 < len__7479__auto___15998)){
args15379.push((arguments[i__7480__auto___15999]));

var G__16000 = (i__7480__auto___15999 + (1));
i__7480__auto___15999 = G__16000;
continue;
} else {
}
break;
}

var G__15383 = args15379.length;
switch (G__15383) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15379.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.audio,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq15380){
var G__15381 = cljs.core.first(seq15380);
var seq15380__$1 = cljs.core.next(seq15380);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__15381,seq15380__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args15384 = [];
var len__7479__auto___16002 = arguments.length;
var i__7480__auto___16003 = (0);
while(true){
if((i__7480__auto___16003 < len__7479__auto___16002)){
args15384.push((arguments[i__7480__auto___16003]));

var G__16004 = (i__7480__auto___16003 + (1));
i__7480__auto___16003 = G__16004;
continue;
} else {
}
break;
}

var G__15388 = args15384.length;
switch (G__15388) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15384.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.b,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq15385){
var G__15386 = cljs.core.first(seq15385);
var seq15385__$1 = cljs.core.next(seq15385);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__15386,seq15385__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args15389 = [];
var len__7479__auto___16006 = arguments.length;
var i__7480__auto___16007 = (0);
while(true){
if((i__7480__auto___16007 < len__7479__auto___16006)){
args15389.push((arguments[i__7480__auto___16007]));

var G__16008 = (i__7480__auto___16007 + (1));
i__7480__auto___16007 = G__16008;
continue;
} else {
}
break;
}

var G__15393 = args15389.length;
switch (G__15393) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15389.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.base,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq15390){
var G__15391 = cljs.core.first(seq15390);
var seq15390__$1 = cljs.core.next(seq15390);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__15391,seq15390__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args15394 = [];
var len__7479__auto___16010 = arguments.length;
var i__7480__auto___16011 = (0);
while(true){
if((i__7480__auto___16011 < len__7479__auto___16010)){
args15394.push((arguments[i__7480__auto___16011]));

var G__16012 = (i__7480__auto___16011 + (1));
i__7480__auto___16011 = G__16012;
continue;
} else {
}
break;
}

var G__15398 = args15394.length;
switch (G__15398) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15394.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.bdi,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq15395){
var G__15396 = cljs.core.first(seq15395);
var seq15395__$1 = cljs.core.next(seq15395);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__15396,seq15395__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args15399 = [];
var len__7479__auto___16014 = arguments.length;
var i__7480__auto___16015 = (0);
while(true){
if((i__7480__auto___16015 < len__7479__auto___16014)){
args15399.push((arguments[i__7480__auto___16015]));

var G__16016 = (i__7480__auto___16015 + (1));
i__7480__auto___16015 = G__16016;
continue;
} else {
}
break;
}

var G__15403 = args15399.length;
switch (G__15403) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15399.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.bdo,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq15400){
var G__15401 = cljs.core.first(seq15400);
var seq15400__$1 = cljs.core.next(seq15400);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__15401,seq15400__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args15404 = [];
var len__7479__auto___16018 = arguments.length;
var i__7480__auto___16019 = (0);
while(true){
if((i__7480__auto___16019 < len__7479__auto___16018)){
args15404.push((arguments[i__7480__auto___16019]));

var G__16020 = (i__7480__auto___16019 + (1));
i__7480__auto___16019 = G__16020;
continue;
} else {
}
break;
}

var G__15408 = args15404.length;
switch (G__15408) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15404.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.big,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq15405){
var G__15406 = cljs.core.first(seq15405);
var seq15405__$1 = cljs.core.next(seq15405);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__15406,seq15405__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args15409 = [];
var len__7479__auto___16022 = arguments.length;
var i__7480__auto___16023 = (0);
while(true){
if((i__7480__auto___16023 < len__7479__auto___16022)){
args15409.push((arguments[i__7480__auto___16023]));

var G__16024 = (i__7480__auto___16023 + (1));
i__7480__auto___16023 = G__16024;
continue;
} else {
}
break;
}

var G__15413 = args15409.length;
switch (G__15413) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15409.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.blockquote,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq15410){
var G__15411 = cljs.core.first(seq15410);
var seq15410__$1 = cljs.core.next(seq15410);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__15411,seq15410__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args15414 = [];
var len__7479__auto___16026 = arguments.length;
var i__7480__auto___16027 = (0);
while(true){
if((i__7480__auto___16027 < len__7479__auto___16026)){
args15414.push((arguments[i__7480__auto___16027]));

var G__16028 = (i__7480__auto___16027 + (1));
i__7480__auto___16027 = G__16028;
continue;
} else {
}
break;
}

var G__15418 = args15414.length;
switch (G__15418) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15414.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.body,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq15415){
var G__15416 = cljs.core.first(seq15415);
var seq15415__$1 = cljs.core.next(seq15415);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__15416,seq15415__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args15419 = [];
var len__7479__auto___16030 = arguments.length;
var i__7480__auto___16031 = (0);
while(true){
if((i__7480__auto___16031 < len__7479__auto___16030)){
args15419.push((arguments[i__7480__auto___16031]));

var G__16032 = (i__7480__auto___16031 + (1));
i__7480__auto___16031 = G__16032;
continue;
} else {
}
break;
}

var G__15423 = args15419.length;
switch (G__15423) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15419.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.br,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq15420){
var G__15421 = cljs.core.first(seq15420);
var seq15420__$1 = cljs.core.next(seq15420);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__15421,seq15420__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args15424 = [];
var len__7479__auto___16034 = arguments.length;
var i__7480__auto___16035 = (0);
while(true){
if((i__7480__auto___16035 < len__7479__auto___16034)){
args15424.push((arguments[i__7480__auto___16035]));

var G__16036 = (i__7480__auto___16035 + (1));
i__7480__auto___16035 = G__16036;
continue;
} else {
}
break;
}

var G__15428 = args15424.length;
switch (G__15428) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15424.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.button,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq15425){
var G__15426 = cljs.core.first(seq15425);
var seq15425__$1 = cljs.core.next(seq15425);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__15426,seq15425__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args15429 = [];
var len__7479__auto___16038 = arguments.length;
var i__7480__auto___16039 = (0);
while(true){
if((i__7480__auto___16039 < len__7479__auto___16038)){
args15429.push((arguments[i__7480__auto___16039]));

var G__16040 = (i__7480__auto___16039 + (1));
i__7480__auto___16039 = G__16040;
continue;
} else {
}
break;
}

var G__15433 = args15429.length;
switch (G__15433) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15429.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.canvas,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq15430){
var G__15431 = cljs.core.first(seq15430);
var seq15430__$1 = cljs.core.next(seq15430);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__15431,seq15430__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args15434 = [];
var len__7479__auto___16042 = arguments.length;
var i__7480__auto___16043 = (0);
while(true){
if((i__7480__auto___16043 < len__7479__auto___16042)){
args15434.push((arguments[i__7480__auto___16043]));

var G__16044 = (i__7480__auto___16043 + (1));
i__7480__auto___16043 = G__16044;
continue;
} else {
}
break;
}

var G__15438 = args15434.length;
switch (G__15438) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15434.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.caption,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq15435){
var G__15436 = cljs.core.first(seq15435);
var seq15435__$1 = cljs.core.next(seq15435);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__15436,seq15435__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args15439 = [];
var len__7479__auto___16046 = arguments.length;
var i__7480__auto___16047 = (0);
while(true){
if((i__7480__auto___16047 < len__7479__auto___16046)){
args15439.push((arguments[i__7480__auto___16047]));

var G__16048 = (i__7480__auto___16047 + (1));
i__7480__auto___16047 = G__16048;
continue;
} else {
}
break;
}

var G__15443 = args15439.length;
switch (G__15443) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15439.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.cite,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq15440){
var G__15441 = cljs.core.first(seq15440);
var seq15440__$1 = cljs.core.next(seq15440);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__15441,seq15440__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args15444 = [];
var len__7479__auto___16050 = arguments.length;
var i__7480__auto___16051 = (0);
while(true){
if((i__7480__auto___16051 < len__7479__auto___16050)){
args15444.push((arguments[i__7480__auto___16051]));

var G__16052 = (i__7480__auto___16051 + (1));
i__7480__auto___16051 = G__16052;
continue;
} else {
}
break;
}

var G__15448 = args15444.length;
switch (G__15448) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15444.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.code,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq15445){
var G__15446 = cljs.core.first(seq15445);
var seq15445__$1 = cljs.core.next(seq15445);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__15446,seq15445__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args15449 = [];
var len__7479__auto___16054 = arguments.length;
var i__7480__auto___16055 = (0);
while(true){
if((i__7480__auto___16055 < len__7479__auto___16054)){
args15449.push((arguments[i__7480__auto___16055]));

var G__16056 = (i__7480__auto___16055 + (1));
i__7480__auto___16055 = G__16056;
continue;
} else {
}
break;
}

var G__15453 = args15449.length;
switch (G__15453) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15449.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.col,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq15450){
var G__15451 = cljs.core.first(seq15450);
var seq15450__$1 = cljs.core.next(seq15450);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__15451,seq15450__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args15454 = [];
var len__7479__auto___16058 = arguments.length;
var i__7480__auto___16059 = (0);
while(true){
if((i__7480__auto___16059 < len__7479__auto___16058)){
args15454.push((arguments[i__7480__auto___16059]));

var G__16060 = (i__7480__auto___16059 + (1));
i__7480__auto___16059 = G__16060;
continue;
} else {
}
break;
}

var G__15458 = args15454.length;
switch (G__15458) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15454.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.colgroup,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq15455){
var G__15456 = cljs.core.first(seq15455);
var seq15455__$1 = cljs.core.next(seq15455);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__15456,seq15455__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args15459 = [];
var len__7479__auto___16062 = arguments.length;
var i__7480__auto___16063 = (0);
while(true){
if((i__7480__auto___16063 < len__7479__auto___16062)){
args15459.push((arguments[i__7480__auto___16063]));

var G__16064 = (i__7480__auto___16063 + (1));
i__7480__auto___16063 = G__16064;
continue;
} else {
}
break;
}

var G__15463 = args15459.length;
switch (G__15463) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15459.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.data,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq15460){
var G__15461 = cljs.core.first(seq15460);
var seq15460__$1 = cljs.core.next(seq15460);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__15461,seq15460__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args15464 = [];
var len__7479__auto___16066 = arguments.length;
var i__7480__auto___16067 = (0);
while(true){
if((i__7480__auto___16067 < len__7479__auto___16066)){
args15464.push((arguments[i__7480__auto___16067]));

var G__16068 = (i__7480__auto___16067 + (1));
i__7480__auto___16067 = G__16068;
continue;
} else {
}
break;
}

var G__15468 = args15464.length;
switch (G__15468) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15464.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.datalist,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq15465){
var G__15466 = cljs.core.first(seq15465);
var seq15465__$1 = cljs.core.next(seq15465);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__15466,seq15465__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args15469 = [];
var len__7479__auto___16070 = arguments.length;
var i__7480__auto___16071 = (0);
while(true){
if((i__7480__auto___16071 < len__7479__auto___16070)){
args15469.push((arguments[i__7480__auto___16071]));

var G__16072 = (i__7480__auto___16071 + (1));
i__7480__auto___16071 = G__16072;
continue;
} else {
}
break;
}

var G__15473 = args15469.length;
switch (G__15473) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15469.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.dd,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq15470){
var G__15471 = cljs.core.first(seq15470);
var seq15470__$1 = cljs.core.next(seq15470);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__15471,seq15470__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args15474 = [];
var len__7479__auto___16074 = arguments.length;
var i__7480__auto___16075 = (0);
while(true){
if((i__7480__auto___16075 < len__7479__auto___16074)){
args15474.push((arguments[i__7480__auto___16075]));

var G__16076 = (i__7480__auto___16075 + (1));
i__7480__auto___16075 = G__16076;
continue;
} else {
}
break;
}

var G__15478 = args15474.length;
switch (G__15478) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15474.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.del,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq15475){
var G__15476 = cljs.core.first(seq15475);
var seq15475__$1 = cljs.core.next(seq15475);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__15476,seq15475__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args15479 = [];
var len__7479__auto___16078 = arguments.length;
var i__7480__auto___16079 = (0);
while(true){
if((i__7480__auto___16079 < len__7479__auto___16078)){
args15479.push((arguments[i__7480__auto___16079]));

var G__16080 = (i__7480__auto___16079 + (1));
i__7480__auto___16079 = G__16080;
continue;
} else {
}
break;
}

var G__15483 = args15479.length;
switch (G__15483) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15479.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.dfn,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq15480){
var G__15481 = cljs.core.first(seq15480);
var seq15480__$1 = cljs.core.next(seq15480);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__15481,seq15480__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args15484 = [];
var len__7479__auto___16082 = arguments.length;
var i__7480__auto___16083 = (0);
while(true){
if((i__7480__auto___16083 < len__7479__auto___16082)){
args15484.push((arguments[i__7480__auto___16083]));

var G__16084 = (i__7480__auto___16083 + (1));
i__7480__auto___16083 = G__16084;
continue;
} else {
}
break;
}

var G__15488 = args15484.length;
switch (G__15488) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15484.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.div,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq15485){
var G__15486 = cljs.core.first(seq15485);
var seq15485__$1 = cljs.core.next(seq15485);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__15486,seq15485__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args15489 = [];
var len__7479__auto___16086 = arguments.length;
var i__7480__auto___16087 = (0);
while(true){
if((i__7480__auto___16087 < len__7479__auto___16086)){
args15489.push((arguments[i__7480__auto___16087]));

var G__16088 = (i__7480__auto___16087 + (1));
i__7480__auto___16087 = G__16088;
continue;
} else {
}
break;
}

var G__15493 = args15489.length;
switch (G__15493) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15489.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.dl,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq15490){
var G__15491 = cljs.core.first(seq15490);
var seq15490__$1 = cljs.core.next(seq15490);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__15491,seq15490__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args15494 = [];
var len__7479__auto___16090 = arguments.length;
var i__7480__auto___16091 = (0);
while(true){
if((i__7480__auto___16091 < len__7479__auto___16090)){
args15494.push((arguments[i__7480__auto___16091]));

var G__16092 = (i__7480__auto___16091 + (1));
i__7480__auto___16091 = G__16092;
continue;
} else {
}
break;
}

var G__15498 = args15494.length;
switch (G__15498) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15494.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.dt,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq15495){
var G__15496 = cljs.core.first(seq15495);
var seq15495__$1 = cljs.core.next(seq15495);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__15496,seq15495__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args15499 = [];
var len__7479__auto___16094 = arguments.length;
var i__7480__auto___16095 = (0);
while(true){
if((i__7480__auto___16095 < len__7479__auto___16094)){
args15499.push((arguments[i__7480__auto___16095]));

var G__16096 = (i__7480__auto___16095 + (1));
i__7480__auto___16095 = G__16096;
continue;
} else {
}
break;
}

var G__15503 = args15499.length;
switch (G__15503) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15499.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.em,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq15500){
var G__15501 = cljs.core.first(seq15500);
var seq15500__$1 = cljs.core.next(seq15500);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__15501,seq15500__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args15504 = [];
var len__7479__auto___16098 = arguments.length;
var i__7480__auto___16099 = (0);
while(true){
if((i__7480__auto___16099 < len__7479__auto___16098)){
args15504.push((arguments[i__7480__auto___16099]));

var G__16100 = (i__7480__auto___16099 + (1));
i__7480__auto___16099 = G__16100;
continue;
} else {
}
break;
}

var G__15508 = args15504.length;
switch (G__15508) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15504.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.embed,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq15505){
var G__15506 = cljs.core.first(seq15505);
var seq15505__$1 = cljs.core.next(seq15505);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__15506,seq15505__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args15514 = [];
var len__7479__auto___16102 = arguments.length;
var i__7480__auto___16103 = (0);
while(true){
if((i__7480__auto___16103 < len__7479__auto___16102)){
args15514.push((arguments[i__7480__auto___16103]));

var G__16104 = (i__7480__auto___16103 + (1));
i__7480__auto___16103 = G__16104;
continue;
} else {
}
break;
}

var G__15518 = args15514.length;
switch (G__15518) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15514.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.fieldset,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq15515){
var G__15516 = cljs.core.first(seq15515);
var seq15515__$1 = cljs.core.next(seq15515);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__15516,seq15515__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args15519 = [];
var len__7479__auto___16106 = arguments.length;
var i__7480__auto___16107 = (0);
while(true){
if((i__7480__auto___16107 < len__7479__auto___16106)){
args15519.push((arguments[i__7480__auto___16107]));

var G__16108 = (i__7480__auto___16107 + (1));
i__7480__auto___16107 = G__16108;
continue;
} else {
}
break;
}

var G__15523 = args15519.length;
switch (G__15523) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15519.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.figcaption,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq15520){
var G__15521 = cljs.core.first(seq15520);
var seq15520__$1 = cljs.core.next(seq15520);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__15521,seq15520__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args15524 = [];
var len__7479__auto___16110 = arguments.length;
var i__7480__auto___16111 = (0);
while(true){
if((i__7480__auto___16111 < len__7479__auto___16110)){
args15524.push((arguments[i__7480__auto___16111]));

var G__16112 = (i__7480__auto___16111 + (1));
i__7480__auto___16111 = G__16112;
continue;
} else {
}
break;
}

var G__15528 = args15524.length;
switch (G__15528) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15524.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.figure,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq15525){
var G__15526 = cljs.core.first(seq15525);
var seq15525__$1 = cljs.core.next(seq15525);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__15526,seq15525__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args15529 = [];
var len__7479__auto___16114 = arguments.length;
var i__7480__auto___16115 = (0);
while(true){
if((i__7480__auto___16115 < len__7479__auto___16114)){
args15529.push((arguments[i__7480__auto___16115]));

var G__16116 = (i__7480__auto___16115 + (1));
i__7480__auto___16115 = G__16116;
continue;
} else {
}
break;
}

var G__15533 = args15529.length;
switch (G__15533) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15529.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.footer,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq15530){
var G__15531 = cljs.core.first(seq15530);
var seq15530__$1 = cljs.core.next(seq15530);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__15531,seq15530__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args15534 = [];
var len__7479__auto___16118 = arguments.length;
var i__7480__auto___16119 = (0);
while(true){
if((i__7480__auto___16119 < len__7479__auto___16118)){
args15534.push((arguments[i__7480__auto___16119]));

var G__16120 = (i__7480__auto___16119 + (1));
i__7480__auto___16119 = G__16120;
continue;
} else {
}
break;
}

var G__15538 = args15534.length;
switch (G__15538) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15534.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.form,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq15535){
var G__15536 = cljs.core.first(seq15535);
var seq15535__$1 = cljs.core.next(seq15535);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__15536,seq15535__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args15539 = [];
var len__7479__auto___16122 = arguments.length;
var i__7480__auto___16123 = (0);
while(true){
if((i__7480__auto___16123 < len__7479__auto___16122)){
args15539.push((arguments[i__7480__auto___16123]));

var G__16124 = (i__7480__auto___16123 + (1));
i__7480__auto___16123 = G__16124;
continue;
} else {
}
break;
}

var G__15543 = args15539.length;
switch (G__15543) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15539.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.h1,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq15540){
var G__15541 = cljs.core.first(seq15540);
var seq15540__$1 = cljs.core.next(seq15540);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__15541,seq15540__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args15544 = [];
var len__7479__auto___16126 = arguments.length;
var i__7480__auto___16127 = (0);
while(true){
if((i__7480__auto___16127 < len__7479__auto___16126)){
args15544.push((arguments[i__7480__auto___16127]));

var G__16128 = (i__7480__auto___16127 + (1));
i__7480__auto___16127 = G__16128;
continue;
} else {
}
break;
}

var G__15548 = args15544.length;
switch (G__15548) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15544.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.h2,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq15545){
var G__15546 = cljs.core.first(seq15545);
var seq15545__$1 = cljs.core.next(seq15545);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__15546,seq15545__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args15549 = [];
var len__7479__auto___16130 = arguments.length;
var i__7480__auto___16131 = (0);
while(true){
if((i__7480__auto___16131 < len__7479__auto___16130)){
args15549.push((arguments[i__7480__auto___16131]));

var G__16132 = (i__7480__auto___16131 + (1));
i__7480__auto___16131 = G__16132;
continue;
} else {
}
break;
}

var G__15553 = args15549.length;
switch (G__15553) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15549.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.h3,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq15550){
var G__15551 = cljs.core.first(seq15550);
var seq15550__$1 = cljs.core.next(seq15550);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__15551,seq15550__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args15554 = [];
var len__7479__auto___16134 = arguments.length;
var i__7480__auto___16135 = (0);
while(true){
if((i__7480__auto___16135 < len__7479__auto___16134)){
args15554.push((arguments[i__7480__auto___16135]));

var G__16136 = (i__7480__auto___16135 + (1));
i__7480__auto___16135 = G__16136;
continue;
} else {
}
break;
}

var G__15558 = args15554.length;
switch (G__15558) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15554.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.h4,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq15555){
var G__15556 = cljs.core.first(seq15555);
var seq15555__$1 = cljs.core.next(seq15555);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__15556,seq15555__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args15559 = [];
var len__7479__auto___16138 = arguments.length;
var i__7480__auto___16139 = (0);
while(true){
if((i__7480__auto___16139 < len__7479__auto___16138)){
args15559.push((arguments[i__7480__auto___16139]));

var G__16140 = (i__7480__auto___16139 + (1));
i__7480__auto___16139 = G__16140;
continue;
} else {
}
break;
}

var G__15563 = args15559.length;
switch (G__15563) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15559.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.h5,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq15560){
var G__15561 = cljs.core.first(seq15560);
var seq15560__$1 = cljs.core.next(seq15560);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__15561,seq15560__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args15564 = [];
var len__7479__auto___16142 = arguments.length;
var i__7480__auto___16143 = (0);
while(true){
if((i__7480__auto___16143 < len__7479__auto___16142)){
args15564.push((arguments[i__7480__auto___16143]));

var G__16144 = (i__7480__auto___16143 + (1));
i__7480__auto___16143 = G__16144;
continue;
} else {
}
break;
}

var G__15568 = args15564.length;
switch (G__15568) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15564.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.h6,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq15565){
var G__15566 = cljs.core.first(seq15565);
var seq15565__$1 = cljs.core.next(seq15565);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__15566,seq15565__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args15569 = [];
var len__7479__auto___16146 = arguments.length;
var i__7480__auto___16147 = (0);
while(true){
if((i__7480__auto___16147 < len__7479__auto___16146)){
args15569.push((arguments[i__7480__auto___16147]));

var G__16148 = (i__7480__auto___16147 + (1));
i__7480__auto___16147 = G__16148;
continue;
} else {
}
break;
}

var G__15573 = args15569.length;
switch (G__15573) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15569.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.head,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq15570){
var G__15571 = cljs.core.first(seq15570);
var seq15570__$1 = cljs.core.next(seq15570);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__15571,seq15570__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args15574 = [];
var len__7479__auto___16150 = arguments.length;
var i__7480__auto___16151 = (0);
while(true){
if((i__7480__auto___16151 < len__7479__auto___16150)){
args15574.push((arguments[i__7480__auto___16151]));

var G__16152 = (i__7480__auto___16151 + (1));
i__7480__auto___16151 = G__16152;
continue;
} else {
}
break;
}

var G__15578 = args15574.length;
switch (G__15578) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15574.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.header,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq15575){
var G__15576 = cljs.core.first(seq15575);
var seq15575__$1 = cljs.core.next(seq15575);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__15576,seq15575__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args15579 = [];
var len__7479__auto___16154 = arguments.length;
var i__7480__auto___16155 = (0);
while(true){
if((i__7480__auto___16155 < len__7479__auto___16154)){
args15579.push((arguments[i__7480__auto___16155]));

var G__16156 = (i__7480__auto___16155 + (1));
i__7480__auto___16155 = G__16156;
continue;
} else {
}
break;
}

var G__15583 = args15579.length;
switch (G__15583) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15579.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.hr,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq15580){
var G__15581 = cljs.core.first(seq15580);
var seq15580__$1 = cljs.core.next(seq15580);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__15581,seq15580__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args15584 = [];
var len__7479__auto___16158 = arguments.length;
var i__7480__auto___16159 = (0);
while(true){
if((i__7480__auto___16159 < len__7479__auto___16158)){
args15584.push((arguments[i__7480__auto___16159]));

var G__16160 = (i__7480__auto___16159 + (1));
i__7480__auto___16159 = G__16160;
continue;
} else {
}
break;
}

var G__15588 = args15584.length;
switch (G__15588) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15584.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.html,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq15585){
var G__15586 = cljs.core.first(seq15585);
var seq15585__$1 = cljs.core.next(seq15585);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__15586,seq15585__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args15589 = [];
var len__7479__auto___16162 = arguments.length;
var i__7480__auto___16163 = (0);
while(true){
if((i__7480__auto___16163 < len__7479__auto___16162)){
args15589.push((arguments[i__7480__auto___16163]));

var G__16164 = (i__7480__auto___16163 + (1));
i__7480__auto___16163 = G__16164;
continue;
} else {
}
break;
}

var G__15593 = args15589.length;
switch (G__15593) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15589.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.i,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq15590){
var G__15591 = cljs.core.first(seq15590);
var seq15590__$1 = cljs.core.next(seq15590);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__15591,seq15590__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args15594 = [];
var len__7479__auto___16166 = arguments.length;
var i__7480__auto___16167 = (0);
while(true){
if((i__7480__auto___16167 < len__7479__auto___16166)){
args15594.push((arguments[i__7480__auto___16167]));

var G__16168 = (i__7480__auto___16167 + (1));
i__7480__auto___16167 = G__16168;
continue;
} else {
}
break;
}

var G__15598 = args15594.length;
switch (G__15598) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15594.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.iframe,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq15595){
var G__15596 = cljs.core.first(seq15595);
var seq15595__$1 = cljs.core.next(seq15595);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__15596,seq15595__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args15599 = [];
var len__7479__auto___16170 = arguments.length;
var i__7480__auto___16171 = (0);
while(true){
if((i__7480__auto___16171 < len__7479__auto___16170)){
args15599.push((arguments[i__7480__auto___16171]));

var G__16172 = (i__7480__auto___16171 + (1));
i__7480__auto___16171 = G__16172;
continue;
} else {
}
break;
}

var G__15603 = args15599.length;
switch (G__15603) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15599.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.img,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq15600){
var G__15601 = cljs.core.first(seq15600);
var seq15600__$1 = cljs.core.next(seq15600);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__15601,seq15600__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args15604 = [];
var len__7479__auto___16174 = arguments.length;
var i__7480__auto___16175 = (0);
while(true){
if((i__7480__auto___16175 < len__7479__auto___16174)){
args15604.push((arguments[i__7480__auto___16175]));

var G__16176 = (i__7480__auto___16175 + (1));
i__7480__auto___16175 = G__16176;
continue;
} else {
}
break;
}

var G__15608 = args15604.length;
switch (G__15608) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15604.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.ins,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq15605){
var G__15606 = cljs.core.first(seq15605);
var seq15605__$1 = cljs.core.next(seq15605);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__15606,seq15605__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args15609 = [];
var len__7479__auto___16178 = arguments.length;
var i__7480__auto___16179 = (0);
while(true){
if((i__7480__auto___16179 < len__7479__auto___16178)){
args15609.push((arguments[i__7480__auto___16179]));

var G__16180 = (i__7480__auto___16179 + (1));
i__7480__auto___16179 = G__16180;
continue;
} else {
}
break;
}

var G__15613 = args15609.length;
switch (G__15613) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15609.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.kbd,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq15610){
var G__15611 = cljs.core.first(seq15610);
var seq15610__$1 = cljs.core.next(seq15610);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__15611,seq15610__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args15614 = [];
var len__7479__auto___16182 = arguments.length;
var i__7480__auto___16183 = (0);
while(true){
if((i__7480__auto___16183 < len__7479__auto___16182)){
args15614.push((arguments[i__7480__auto___16183]));

var G__16184 = (i__7480__auto___16183 + (1));
i__7480__auto___16183 = G__16184;
continue;
} else {
}
break;
}

var G__15618 = args15614.length;
switch (G__15618) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15614.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.keygen,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq15615){
var G__15616 = cljs.core.first(seq15615);
var seq15615__$1 = cljs.core.next(seq15615);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__15616,seq15615__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args15619 = [];
var len__7479__auto___16186 = arguments.length;
var i__7480__auto___16187 = (0);
while(true){
if((i__7480__auto___16187 < len__7479__auto___16186)){
args15619.push((arguments[i__7480__auto___16187]));

var G__16188 = (i__7480__auto___16187 + (1));
i__7480__auto___16187 = G__16188;
continue;
} else {
}
break;
}

var G__15623 = args15619.length;
switch (G__15623) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15619.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.label,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq15620){
var G__15621 = cljs.core.first(seq15620);
var seq15620__$1 = cljs.core.next(seq15620);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__15621,seq15620__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args15624 = [];
var len__7479__auto___16190 = arguments.length;
var i__7480__auto___16191 = (0);
while(true){
if((i__7480__auto___16191 < len__7479__auto___16190)){
args15624.push((arguments[i__7480__auto___16191]));

var G__16192 = (i__7480__auto___16191 + (1));
i__7480__auto___16191 = G__16192;
continue;
} else {
}
break;
}

var G__15628 = args15624.length;
switch (G__15628) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15624.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.legend,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq15625){
var G__15626 = cljs.core.first(seq15625);
var seq15625__$1 = cljs.core.next(seq15625);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__15626,seq15625__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args15629 = [];
var len__7479__auto___16194 = arguments.length;
var i__7480__auto___16195 = (0);
while(true){
if((i__7480__auto___16195 < len__7479__auto___16194)){
args15629.push((arguments[i__7480__auto___16195]));

var G__16196 = (i__7480__auto___16195 + (1));
i__7480__auto___16195 = G__16196;
continue;
} else {
}
break;
}

var G__15633 = args15629.length;
switch (G__15633) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15629.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.li,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq15630){
var G__15631 = cljs.core.first(seq15630);
var seq15630__$1 = cljs.core.next(seq15630);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__15631,seq15630__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args15634 = [];
var len__7479__auto___16198 = arguments.length;
var i__7480__auto___16199 = (0);
while(true){
if((i__7480__auto___16199 < len__7479__auto___16198)){
args15634.push((arguments[i__7480__auto___16199]));

var G__16200 = (i__7480__auto___16199 + (1));
i__7480__auto___16199 = G__16200;
continue;
} else {
}
break;
}

var G__15638 = args15634.length;
switch (G__15638) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15634.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.link,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq15635){
var G__15636 = cljs.core.first(seq15635);
var seq15635__$1 = cljs.core.next(seq15635);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__15636,seq15635__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args15639 = [];
var len__7479__auto___16202 = arguments.length;
var i__7480__auto___16203 = (0);
while(true){
if((i__7480__auto___16203 < len__7479__auto___16202)){
args15639.push((arguments[i__7480__auto___16203]));

var G__16204 = (i__7480__auto___16203 + (1));
i__7480__auto___16203 = G__16204;
continue;
} else {
}
break;
}

var G__15643 = args15639.length;
switch (G__15643) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15639.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.main,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq15640){
var G__15641 = cljs.core.first(seq15640);
var seq15640__$1 = cljs.core.next(seq15640);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__15641,seq15640__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args15644 = [];
var len__7479__auto___16206 = arguments.length;
var i__7480__auto___16207 = (0);
while(true){
if((i__7480__auto___16207 < len__7479__auto___16206)){
args15644.push((arguments[i__7480__auto___16207]));

var G__16208 = (i__7480__auto___16207 + (1));
i__7480__auto___16207 = G__16208;
continue;
} else {
}
break;
}

var G__15648 = args15644.length;
switch (G__15648) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15644.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.map,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq15645){
var G__15646 = cljs.core.first(seq15645);
var seq15645__$1 = cljs.core.next(seq15645);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__15646,seq15645__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args15649 = [];
var len__7479__auto___16210 = arguments.length;
var i__7480__auto___16211 = (0);
while(true){
if((i__7480__auto___16211 < len__7479__auto___16210)){
args15649.push((arguments[i__7480__auto___16211]));

var G__16212 = (i__7480__auto___16211 + (1));
i__7480__auto___16211 = G__16212;
continue;
} else {
}
break;
}

var G__15653 = args15649.length;
switch (G__15653) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15649.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.mark,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq15650){
var G__15651 = cljs.core.first(seq15650);
var seq15650__$1 = cljs.core.next(seq15650);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__15651,seq15650__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args15654 = [];
var len__7479__auto___16214 = arguments.length;
var i__7480__auto___16215 = (0);
while(true){
if((i__7480__auto___16215 < len__7479__auto___16214)){
args15654.push((arguments[i__7480__auto___16215]));

var G__16216 = (i__7480__auto___16215 + (1));
i__7480__auto___16215 = G__16216;
continue;
} else {
}
break;
}

var G__15658 = args15654.length;
switch (G__15658) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15654.slice((1)),(0),null));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.marquee,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq15655){
var G__15656 = cljs.core.first(seq15655);
var seq15655__$1 = cljs.core.next(seq15655);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__15656,seq15655__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args15659 = [];
var len__7479__auto___16218 = arguments.length;
var i__7480__auto___16219 = (0);
while(true){
if((i__7480__auto___16219 < len__7479__auto___16218)){
args15659.push((arguments[i__7480__auto___16219]));

var G__16220 = (i__7480__auto___16219 + (1));
i__7480__auto___16219 = G__16220;
continue;
} else {
}
break;
}

var G__15663 = args15659.length;
switch (G__15663) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15659.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.menu,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq15660){
var G__15661 = cljs.core.first(seq15660);
var seq15660__$1 = cljs.core.next(seq15660);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__15661,seq15660__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args15664 = [];
var len__7479__auto___16222 = arguments.length;
var i__7480__auto___16223 = (0);
while(true){
if((i__7480__auto___16223 < len__7479__auto___16222)){
args15664.push((arguments[i__7480__auto___16223]));

var G__16224 = (i__7480__auto___16223 + (1));
i__7480__auto___16223 = G__16224;
continue;
} else {
}
break;
}

var G__15668 = args15664.length;
switch (G__15668) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15664.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.menuitem,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq15665){
var G__15666 = cljs.core.first(seq15665);
var seq15665__$1 = cljs.core.next(seq15665);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__15666,seq15665__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args15669 = [];
var len__7479__auto___16226 = arguments.length;
var i__7480__auto___16227 = (0);
while(true){
if((i__7480__auto___16227 < len__7479__auto___16226)){
args15669.push((arguments[i__7480__auto___16227]));

var G__16228 = (i__7480__auto___16227 + (1));
i__7480__auto___16227 = G__16228;
continue;
} else {
}
break;
}

var G__15673 = args15669.length;
switch (G__15673) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15669.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.meta,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq15670){
var G__15671 = cljs.core.first(seq15670);
var seq15670__$1 = cljs.core.next(seq15670);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__15671,seq15670__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args15674 = [];
var len__7479__auto___16230 = arguments.length;
var i__7480__auto___16231 = (0);
while(true){
if((i__7480__auto___16231 < len__7479__auto___16230)){
args15674.push((arguments[i__7480__auto___16231]));

var G__16232 = (i__7480__auto___16231 + (1));
i__7480__auto___16231 = G__16232;
continue;
} else {
}
break;
}

var G__15678 = args15674.length;
switch (G__15678) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15674.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.meter,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq15675){
var G__15676 = cljs.core.first(seq15675);
var seq15675__$1 = cljs.core.next(seq15675);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__15676,seq15675__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args15679 = [];
var len__7479__auto___16234 = arguments.length;
var i__7480__auto___16235 = (0);
while(true){
if((i__7480__auto___16235 < len__7479__auto___16234)){
args15679.push((arguments[i__7480__auto___16235]));

var G__16236 = (i__7480__auto___16235 + (1));
i__7480__auto___16235 = G__16236;
continue;
} else {
}
break;
}

var G__15683 = args15679.length;
switch (G__15683) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15679.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.nav,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq15680){
var G__15681 = cljs.core.first(seq15680);
var seq15680__$1 = cljs.core.next(seq15680);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__15681,seq15680__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args15684 = [];
var len__7479__auto___16238 = arguments.length;
var i__7480__auto___16239 = (0);
while(true){
if((i__7480__auto___16239 < len__7479__auto___16238)){
args15684.push((arguments[i__7480__auto___16239]));

var G__16240 = (i__7480__auto___16239 + (1));
i__7480__auto___16239 = G__16240;
continue;
} else {
}
break;
}

var G__15688 = args15684.length;
switch (G__15688) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15684.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.noscript,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq15685){
var G__15686 = cljs.core.first(seq15685);
var seq15685__$1 = cljs.core.next(seq15685);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__15686,seq15685__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args15689 = [];
var len__7479__auto___16242 = arguments.length;
var i__7480__auto___16243 = (0);
while(true){
if((i__7480__auto___16243 < len__7479__auto___16242)){
args15689.push((arguments[i__7480__auto___16243]));

var G__16244 = (i__7480__auto___16243 + (1));
i__7480__auto___16243 = G__16244;
continue;
} else {
}
break;
}

var G__15693 = args15689.length;
switch (G__15693) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15689.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.object,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq15690){
var G__15691 = cljs.core.first(seq15690);
var seq15690__$1 = cljs.core.next(seq15690);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__15691,seq15690__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args15694 = [];
var len__7479__auto___16246 = arguments.length;
var i__7480__auto___16247 = (0);
while(true){
if((i__7480__auto___16247 < len__7479__auto___16246)){
args15694.push((arguments[i__7480__auto___16247]));

var G__16248 = (i__7480__auto___16247 + (1));
i__7480__auto___16247 = G__16248;
continue;
} else {
}
break;
}

var G__15698 = args15694.length;
switch (G__15698) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15694.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.ol,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq15695){
var G__15696 = cljs.core.first(seq15695);
var seq15695__$1 = cljs.core.next(seq15695);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__15696,seq15695__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args15699 = [];
var len__7479__auto___16250 = arguments.length;
var i__7480__auto___16251 = (0);
while(true){
if((i__7480__auto___16251 < len__7479__auto___16250)){
args15699.push((arguments[i__7480__auto___16251]));

var G__16252 = (i__7480__auto___16251 + (1));
i__7480__auto___16251 = G__16252;
continue;
} else {
}
break;
}

var G__15703 = args15699.length;
switch (G__15703) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15699.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.optgroup,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq15700){
var G__15701 = cljs.core.first(seq15700);
var seq15700__$1 = cljs.core.next(seq15700);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__15701,seq15700__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args15704 = [];
var len__7479__auto___16254 = arguments.length;
var i__7480__auto___16255 = (0);
while(true){
if((i__7480__auto___16255 < len__7479__auto___16254)){
args15704.push((arguments[i__7480__auto___16255]));

var G__16256 = (i__7480__auto___16255 + (1));
i__7480__auto___16255 = G__16256;
continue;
} else {
}
break;
}

var G__15708 = args15704.length;
switch (G__15708) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15704.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.output,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq15705){
var G__15706 = cljs.core.first(seq15705);
var seq15705__$1 = cljs.core.next(seq15705);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__15706,seq15705__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args15709 = [];
var len__7479__auto___16258 = arguments.length;
var i__7480__auto___16259 = (0);
while(true){
if((i__7480__auto___16259 < len__7479__auto___16258)){
args15709.push((arguments[i__7480__auto___16259]));

var G__16260 = (i__7480__auto___16259 + (1));
i__7480__auto___16259 = G__16260;
continue;
} else {
}
break;
}

var G__15713 = args15709.length;
switch (G__15713) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15709.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.p,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq15710){
var G__15711 = cljs.core.first(seq15710);
var seq15710__$1 = cljs.core.next(seq15710);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__15711,seq15710__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args15714 = [];
var len__7479__auto___16262 = arguments.length;
var i__7480__auto___16263 = (0);
while(true){
if((i__7480__auto___16263 < len__7479__auto___16262)){
args15714.push((arguments[i__7480__auto___16263]));

var G__16264 = (i__7480__auto___16263 + (1));
i__7480__auto___16263 = G__16264;
continue;
} else {
}
break;
}

var G__15718 = args15714.length;
switch (G__15718) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15714.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.param,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq15715){
var G__15716 = cljs.core.first(seq15715);
var seq15715__$1 = cljs.core.next(seq15715);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__15716,seq15715__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args15719 = [];
var len__7479__auto___16266 = arguments.length;
var i__7480__auto___16267 = (0);
while(true){
if((i__7480__auto___16267 < len__7479__auto___16266)){
args15719.push((arguments[i__7480__auto___16267]));

var G__16268 = (i__7480__auto___16267 + (1));
i__7480__auto___16267 = G__16268;
continue;
} else {
}
break;
}

var G__15723 = args15719.length;
switch (G__15723) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15719.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.pre,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq15720){
var G__15721 = cljs.core.first(seq15720);
var seq15720__$1 = cljs.core.next(seq15720);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__15721,seq15720__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args15724 = [];
var len__7479__auto___16270 = arguments.length;
var i__7480__auto___16271 = (0);
while(true){
if((i__7480__auto___16271 < len__7479__auto___16270)){
args15724.push((arguments[i__7480__auto___16271]));

var G__16272 = (i__7480__auto___16271 + (1));
i__7480__auto___16271 = G__16272;
continue;
} else {
}
break;
}

var G__15728 = args15724.length;
switch (G__15728) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15724.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.progress,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq15725){
var G__15726 = cljs.core.first(seq15725);
var seq15725__$1 = cljs.core.next(seq15725);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__15726,seq15725__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args15729 = [];
var len__7479__auto___16274 = arguments.length;
var i__7480__auto___16275 = (0);
while(true){
if((i__7480__auto___16275 < len__7479__auto___16274)){
args15729.push((arguments[i__7480__auto___16275]));

var G__16276 = (i__7480__auto___16275 + (1));
i__7480__auto___16275 = G__16276;
continue;
} else {
}
break;
}

var G__15733 = args15729.length;
switch (G__15733) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15729.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.q,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq15730){
var G__15731 = cljs.core.first(seq15730);
var seq15730__$1 = cljs.core.next(seq15730);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__15731,seq15730__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args15734 = [];
var len__7479__auto___16278 = arguments.length;
var i__7480__auto___16279 = (0);
while(true){
if((i__7480__auto___16279 < len__7479__auto___16278)){
args15734.push((arguments[i__7480__auto___16279]));

var G__16280 = (i__7480__auto___16279 + (1));
i__7480__auto___16279 = G__16280;
continue;
} else {
}
break;
}

var G__15738 = args15734.length;
switch (G__15738) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15734.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.rp,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq15735){
var G__15736 = cljs.core.first(seq15735);
var seq15735__$1 = cljs.core.next(seq15735);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__15736,seq15735__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args15739 = [];
var len__7479__auto___16282 = arguments.length;
var i__7480__auto___16283 = (0);
while(true){
if((i__7480__auto___16283 < len__7479__auto___16282)){
args15739.push((arguments[i__7480__auto___16283]));

var G__16284 = (i__7480__auto___16283 + (1));
i__7480__auto___16283 = G__16284;
continue;
} else {
}
break;
}

var G__15743 = args15739.length;
switch (G__15743) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15739.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.rt,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq15740){
var G__15741 = cljs.core.first(seq15740);
var seq15740__$1 = cljs.core.next(seq15740);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__15741,seq15740__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args15744 = [];
var len__7479__auto___16286 = arguments.length;
var i__7480__auto___16287 = (0);
while(true){
if((i__7480__auto___16287 < len__7479__auto___16286)){
args15744.push((arguments[i__7480__auto___16287]));

var G__16288 = (i__7480__auto___16287 + (1));
i__7480__auto___16287 = G__16288;
continue;
} else {
}
break;
}

var G__15748 = args15744.length;
switch (G__15748) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15744.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.ruby,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq15745){
var G__15746 = cljs.core.first(seq15745);
var seq15745__$1 = cljs.core.next(seq15745);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__15746,seq15745__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args15749 = [];
var len__7479__auto___16290 = arguments.length;
var i__7480__auto___16291 = (0);
while(true){
if((i__7480__auto___16291 < len__7479__auto___16290)){
args15749.push((arguments[i__7480__auto___16291]));

var G__16292 = (i__7480__auto___16291 + (1));
i__7480__auto___16291 = G__16292;
continue;
} else {
}
break;
}

var G__15753 = args15749.length;
switch (G__15753) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15749.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.s,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq15750){
var G__15751 = cljs.core.first(seq15750);
var seq15750__$1 = cljs.core.next(seq15750);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__15751,seq15750__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args15754 = [];
var len__7479__auto___16294 = arguments.length;
var i__7480__auto___16295 = (0);
while(true){
if((i__7480__auto___16295 < len__7479__auto___16294)){
args15754.push((arguments[i__7480__auto___16295]));

var G__16296 = (i__7480__auto___16295 + (1));
i__7480__auto___16295 = G__16296;
continue;
} else {
}
break;
}

var G__15758 = args15754.length;
switch (G__15758) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15754.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.samp,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq15755){
var G__15756 = cljs.core.first(seq15755);
var seq15755__$1 = cljs.core.next(seq15755);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__15756,seq15755__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args15759 = [];
var len__7479__auto___16298 = arguments.length;
var i__7480__auto___16299 = (0);
while(true){
if((i__7480__auto___16299 < len__7479__auto___16298)){
args15759.push((arguments[i__7480__auto___16299]));

var G__16300 = (i__7480__auto___16299 + (1));
i__7480__auto___16299 = G__16300;
continue;
} else {
}
break;
}

var G__15763 = args15759.length;
switch (G__15763) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15759.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.script,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq15760){
var G__15761 = cljs.core.first(seq15760);
var seq15760__$1 = cljs.core.next(seq15760);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__15761,seq15760__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args15764 = [];
var len__7479__auto___16302 = arguments.length;
var i__7480__auto___16303 = (0);
while(true){
if((i__7480__auto___16303 < len__7479__auto___16302)){
args15764.push((arguments[i__7480__auto___16303]));

var G__16304 = (i__7480__auto___16303 + (1));
i__7480__auto___16303 = G__16304;
continue;
} else {
}
break;
}

var G__15768 = args15764.length;
switch (G__15768) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15764.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.section,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq15765){
var G__15766 = cljs.core.first(seq15765);
var seq15765__$1 = cljs.core.next(seq15765);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__15766,seq15765__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.select = (function om_tools$dom$select(var_args){
var args15769 = [];
var len__7479__auto___16306 = arguments.length;
var i__7480__auto___16307 = (0);
while(true){
if((i__7480__auto___16307 < len__7479__auto___16306)){
args15769.push((arguments[i__7480__auto___16307]));

var G__16308 = (i__7480__auto___16307 + (1));
i__7480__auto___16307 = G__16308;
continue;
} else {
}
break;
}

var G__15773 = args15769.length;
switch (G__15773) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15769.slice((1)),(0),null));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.select,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq15770){
var G__15771 = cljs.core.first(seq15770);
var seq15770__$1 = cljs.core.next(seq15770);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__15771,seq15770__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args15774 = [];
var len__7479__auto___16310 = arguments.length;
var i__7480__auto___16311 = (0);
while(true){
if((i__7480__auto___16311 < len__7479__auto___16310)){
args15774.push((arguments[i__7480__auto___16311]));

var G__16312 = (i__7480__auto___16311 + (1));
i__7480__auto___16311 = G__16312;
continue;
} else {
}
break;
}

var G__15778 = args15774.length;
switch (G__15778) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15774.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.small,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq15775){
var G__15776 = cljs.core.first(seq15775);
var seq15775__$1 = cljs.core.next(seq15775);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__15776,seq15775__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args15779 = [];
var len__7479__auto___16314 = arguments.length;
var i__7480__auto___16315 = (0);
while(true){
if((i__7480__auto___16315 < len__7479__auto___16314)){
args15779.push((arguments[i__7480__auto___16315]));

var G__16316 = (i__7480__auto___16315 + (1));
i__7480__auto___16315 = G__16316;
continue;
} else {
}
break;
}

var G__15783 = args15779.length;
switch (G__15783) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15779.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.source,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq15780){
var G__15781 = cljs.core.first(seq15780);
var seq15780__$1 = cljs.core.next(seq15780);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__15781,seq15780__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args15784 = [];
var len__7479__auto___16318 = arguments.length;
var i__7480__auto___16319 = (0);
while(true){
if((i__7480__auto___16319 < len__7479__auto___16318)){
args15784.push((arguments[i__7480__auto___16319]));

var G__16320 = (i__7480__auto___16319 + (1));
i__7480__auto___16319 = G__16320;
continue;
} else {
}
break;
}

var G__15788 = args15784.length;
switch (G__15788) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15784.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.span,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq15785){
var G__15786 = cljs.core.first(seq15785);
var seq15785__$1 = cljs.core.next(seq15785);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__15786,seq15785__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args15789 = [];
var len__7479__auto___16322 = arguments.length;
var i__7480__auto___16323 = (0);
while(true){
if((i__7480__auto___16323 < len__7479__auto___16322)){
args15789.push((arguments[i__7480__auto___16323]));

var G__16324 = (i__7480__auto___16323 + (1));
i__7480__auto___16323 = G__16324;
continue;
} else {
}
break;
}

var G__15793 = args15789.length;
switch (G__15793) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15789.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.strong,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq15790){
var G__15791 = cljs.core.first(seq15790);
var seq15790__$1 = cljs.core.next(seq15790);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__15791,seq15790__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args15794 = [];
var len__7479__auto___16326 = arguments.length;
var i__7480__auto___16327 = (0);
while(true){
if((i__7480__auto___16327 < len__7479__auto___16326)){
args15794.push((arguments[i__7480__auto___16327]));

var G__16328 = (i__7480__auto___16327 + (1));
i__7480__auto___16327 = G__16328;
continue;
} else {
}
break;
}

var G__15798 = args15794.length;
switch (G__15798) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15794.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.style,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq15795){
var G__15796 = cljs.core.first(seq15795);
var seq15795__$1 = cljs.core.next(seq15795);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__15796,seq15795__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args15799 = [];
var len__7479__auto___16330 = arguments.length;
var i__7480__auto___16331 = (0);
while(true){
if((i__7480__auto___16331 < len__7479__auto___16330)){
args15799.push((arguments[i__7480__auto___16331]));

var G__16332 = (i__7480__auto___16331 + (1));
i__7480__auto___16331 = G__16332;
continue;
} else {
}
break;
}

var G__15803 = args15799.length;
switch (G__15803) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15799.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.sub,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq15800){
var G__15801 = cljs.core.first(seq15800);
var seq15800__$1 = cljs.core.next(seq15800);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__15801,seq15800__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args15804 = [];
var len__7479__auto___16334 = arguments.length;
var i__7480__auto___16335 = (0);
while(true){
if((i__7480__auto___16335 < len__7479__auto___16334)){
args15804.push((arguments[i__7480__auto___16335]));

var G__16336 = (i__7480__auto___16335 + (1));
i__7480__auto___16335 = G__16336;
continue;
} else {
}
break;
}

var G__15808 = args15804.length;
switch (G__15808) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15804.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.summary,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq15805){
var G__15806 = cljs.core.first(seq15805);
var seq15805__$1 = cljs.core.next(seq15805);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__15806,seq15805__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args15809 = [];
var len__7479__auto___16338 = arguments.length;
var i__7480__auto___16339 = (0);
while(true){
if((i__7480__auto___16339 < len__7479__auto___16338)){
args15809.push((arguments[i__7480__auto___16339]));

var G__16340 = (i__7480__auto___16339 + (1));
i__7480__auto___16339 = G__16340;
continue;
} else {
}
break;
}

var G__15813 = args15809.length;
switch (G__15813) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15809.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.sup,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq15810){
var G__15811 = cljs.core.first(seq15810);
var seq15810__$1 = cljs.core.next(seq15810);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__15811,seq15810__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args15814 = [];
var len__7479__auto___16342 = arguments.length;
var i__7480__auto___16343 = (0);
while(true){
if((i__7480__auto___16343 < len__7479__auto___16342)){
args15814.push((arguments[i__7480__auto___16343]));

var G__16344 = (i__7480__auto___16343 + (1));
i__7480__auto___16343 = G__16344;
continue;
} else {
}
break;
}

var G__15818 = args15814.length;
switch (G__15818) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15814.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.table,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq15815){
var G__15816 = cljs.core.first(seq15815);
var seq15815__$1 = cljs.core.next(seq15815);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__15816,seq15815__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args15819 = [];
var len__7479__auto___16346 = arguments.length;
var i__7480__auto___16347 = (0);
while(true){
if((i__7480__auto___16347 < len__7479__auto___16346)){
args15819.push((arguments[i__7480__auto___16347]));

var G__16348 = (i__7480__auto___16347 + (1));
i__7480__auto___16347 = G__16348;
continue;
} else {
}
break;
}

var G__15823 = args15819.length;
switch (G__15823) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15819.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.tbody,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq15820){
var G__15821 = cljs.core.first(seq15820);
var seq15820__$1 = cljs.core.next(seq15820);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__15821,seq15820__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args15824 = [];
var len__7479__auto___16350 = arguments.length;
var i__7480__auto___16351 = (0);
while(true){
if((i__7480__auto___16351 < len__7479__auto___16350)){
args15824.push((arguments[i__7480__auto___16351]));

var G__16352 = (i__7480__auto___16351 + (1));
i__7480__auto___16351 = G__16352;
continue;
} else {
}
break;
}

var G__15828 = args15824.length;
switch (G__15828) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15824.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.td,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq15825){
var G__15826 = cljs.core.first(seq15825);
var seq15825__$1 = cljs.core.next(seq15825);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__15826,seq15825__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args15829 = [];
var len__7479__auto___16354 = arguments.length;
var i__7480__auto___16355 = (0);
while(true){
if((i__7480__auto___16355 < len__7479__auto___16354)){
args15829.push((arguments[i__7480__auto___16355]));

var G__16356 = (i__7480__auto___16355 + (1));
i__7480__auto___16355 = G__16356;
continue;
} else {
}
break;
}

var G__15833 = args15829.length;
switch (G__15833) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15829.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.tfoot,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq15830){
var G__15831 = cljs.core.first(seq15830);
var seq15830__$1 = cljs.core.next(seq15830);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__15831,seq15830__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args15834 = [];
var len__7479__auto___16358 = arguments.length;
var i__7480__auto___16359 = (0);
while(true){
if((i__7480__auto___16359 < len__7479__auto___16358)){
args15834.push((arguments[i__7480__auto___16359]));

var G__16360 = (i__7480__auto___16359 + (1));
i__7480__auto___16359 = G__16360;
continue;
} else {
}
break;
}

var G__15838 = args15834.length;
switch (G__15838) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15834.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.th,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq15835){
var G__15836 = cljs.core.first(seq15835);
var seq15835__$1 = cljs.core.next(seq15835);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__15836,seq15835__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args15839 = [];
var len__7479__auto___16362 = arguments.length;
var i__7480__auto___16363 = (0);
while(true){
if((i__7480__auto___16363 < len__7479__auto___16362)){
args15839.push((arguments[i__7480__auto___16363]));

var G__16364 = (i__7480__auto___16363 + (1));
i__7480__auto___16363 = G__16364;
continue;
} else {
}
break;
}

var G__15843 = args15839.length;
switch (G__15843) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15839.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.thead,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq15840){
var G__15841 = cljs.core.first(seq15840);
var seq15840__$1 = cljs.core.next(seq15840);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__15841,seq15840__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args15844 = [];
var len__7479__auto___16366 = arguments.length;
var i__7480__auto___16367 = (0);
while(true){
if((i__7480__auto___16367 < len__7479__auto___16366)){
args15844.push((arguments[i__7480__auto___16367]));

var G__16368 = (i__7480__auto___16367 + (1));
i__7480__auto___16367 = G__16368;
continue;
} else {
}
break;
}

var G__15848 = args15844.length;
switch (G__15848) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15844.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.time,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq15845){
var G__15846 = cljs.core.first(seq15845);
var seq15845__$1 = cljs.core.next(seq15845);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__15846,seq15845__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args15849 = [];
var len__7479__auto___16370 = arguments.length;
var i__7480__auto___16371 = (0);
while(true){
if((i__7480__auto___16371 < len__7479__auto___16370)){
args15849.push((arguments[i__7480__auto___16371]));

var G__16372 = (i__7480__auto___16371 + (1));
i__7480__auto___16371 = G__16372;
continue;
} else {
}
break;
}

var G__15853 = args15849.length;
switch (G__15853) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15849.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.title,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq15850){
var G__15851 = cljs.core.first(seq15850);
var seq15850__$1 = cljs.core.next(seq15850);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__15851,seq15850__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args15854 = [];
var len__7479__auto___16374 = arguments.length;
var i__7480__auto___16375 = (0);
while(true){
if((i__7480__auto___16375 < len__7479__auto___16374)){
args15854.push((arguments[i__7480__auto___16375]));

var G__16376 = (i__7480__auto___16375 + (1));
i__7480__auto___16375 = G__16376;
continue;
} else {
}
break;
}

var G__15858 = args15854.length;
switch (G__15858) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15854.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.tr,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq15855){
var G__15856 = cljs.core.first(seq15855);
var seq15855__$1 = cljs.core.next(seq15855);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__15856,seq15855__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args15859 = [];
var len__7479__auto___16378 = arguments.length;
var i__7480__auto___16379 = (0);
while(true){
if((i__7480__auto___16379 < len__7479__auto___16378)){
args15859.push((arguments[i__7480__auto___16379]));

var G__16380 = (i__7480__auto___16379 + (1));
i__7480__auto___16379 = G__16380;
continue;
} else {
}
break;
}

var G__15863 = args15859.length;
switch (G__15863) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15859.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.track,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq15860){
var G__15861 = cljs.core.first(seq15860);
var seq15860__$1 = cljs.core.next(seq15860);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__15861,seq15860__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args15864 = [];
var len__7479__auto___16382 = arguments.length;
var i__7480__auto___16383 = (0);
while(true){
if((i__7480__auto___16383 < len__7479__auto___16382)){
args15864.push((arguments[i__7480__auto___16383]));

var G__16384 = (i__7480__auto___16383 + (1));
i__7480__auto___16383 = G__16384;
continue;
} else {
}
break;
}

var G__15868 = args15864.length;
switch (G__15868) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15864.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.u,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq15865){
var G__15866 = cljs.core.first(seq15865);
var seq15865__$1 = cljs.core.next(seq15865);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__15866,seq15865__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args15869 = [];
var len__7479__auto___16386 = arguments.length;
var i__7480__auto___16387 = (0);
while(true){
if((i__7480__auto___16387 < len__7479__auto___16386)){
args15869.push((arguments[i__7480__auto___16387]));

var G__16388 = (i__7480__auto___16387 + (1));
i__7480__auto___16387 = G__16388;
continue;
} else {
}
break;
}

var G__15873 = args15869.length;
switch (G__15873) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15869.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.ul,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq15870){
var G__15871 = cljs.core.first(seq15870);
var seq15870__$1 = cljs.core.next(seq15870);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__15871,seq15870__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args15874 = [];
var len__7479__auto___16390 = arguments.length;
var i__7480__auto___16391 = (0);
while(true){
if((i__7480__auto___16391 < len__7479__auto___16390)){
args15874.push((arguments[i__7480__auto___16391]));

var G__16392 = (i__7480__auto___16391 + (1));
i__7480__auto___16391 = G__16392;
continue;
} else {
}
break;
}

var G__15878 = args15874.length;
switch (G__15878) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15874.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.var$,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq15875){
var G__15876 = cljs.core.first(seq15875);
var seq15875__$1 = cljs.core.next(seq15875);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__15876,seq15875__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args15879 = [];
var len__7479__auto___16394 = arguments.length;
var i__7480__auto___16395 = (0);
while(true){
if((i__7480__auto___16395 < len__7479__auto___16394)){
args15879.push((arguments[i__7480__auto___16395]));

var G__16396 = (i__7480__auto___16395 + (1));
i__7480__auto___16395 = G__16396;
continue;
} else {
}
break;
}

var G__15883 = args15879.length;
switch (G__15883) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15879.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.video,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq15880){
var G__15881 = cljs.core.first(seq15880);
var seq15880__$1 = cljs.core.next(seq15880);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__15881,seq15880__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args15884 = [];
var len__7479__auto___16398 = arguments.length;
var i__7480__auto___16399 = (0);
while(true){
if((i__7480__auto___16399 < len__7479__auto___16398)){
args15884.push((arguments[i__7480__auto___16399]));

var G__16400 = (i__7480__auto___16399 + (1));
i__7480__auto___16399 = G__16400;
continue;
} else {
}
break;
}

var G__15888 = args15884.length;
switch (G__15888) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15884.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.wbr,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq15885){
var G__15886 = cljs.core.first(seq15885);
var seq15885__$1 = cljs.core.next(seq15885);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__15886,seq15885__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args15889 = [];
var len__7479__auto___16402 = arguments.length;
var i__7480__auto___16403 = (0);
while(true){
if((i__7480__auto___16403 < len__7479__auto___16402)){
args15889.push((arguments[i__7480__auto___16403]));

var G__16404 = (i__7480__auto___16403 + (1));
i__7480__auto___16403 = G__16404;
continue;
} else {
}
break;
}

var G__15893 = args15889.length;
switch (G__15893) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15889.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.circle,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq15890){
var G__15891 = cljs.core.first(seq15890);
var seq15890__$1 = cljs.core.next(seq15890);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__15891,seq15890__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args15894 = [];
var len__7479__auto___16406 = arguments.length;
var i__7480__auto___16407 = (0);
while(true){
if((i__7480__auto___16407 < len__7479__auto___16406)){
args15894.push((arguments[i__7480__auto___16407]));

var G__16408 = (i__7480__auto___16407 + (1));
i__7480__auto___16407 = G__16408;
continue;
} else {
}
break;
}

var G__15898 = args15894.length;
switch (G__15898) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15894.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.ellipse,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq15895){
var G__15896 = cljs.core.first(seq15895);
var seq15895__$1 = cljs.core.next(seq15895);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__15896,seq15895__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args15899 = [];
var len__7479__auto___16410 = arguments.length;
var i__7480__auto___16411 = (0);
while(true){
if((i__7480__auto___16411 < len__7479__auto___16410)){
args15899.push((arguments[i__7480__auto___16411]));

var G__16412 = (i__7480__auto___16411 + (1));
i__7480__auto___16411 = G__16412;
continue;
} else {
}
break;
}

var G__15903 = args15899.length;
switch (G__15903) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15899.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.g,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq15900){
var G__15901 = cljs.core.first(seq15900);
var seq15900__$1 = cljs.core.next(seq15900);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__15901,seq15900__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args15904 = [];
var len__7479__auto___16414 = arguments.length;
var i__7480__auto___16415 = (0);
while(true){
if((i__7480__auto___16415 < len__7479__auto___16414)){
args15904.push((arguments[i__7480__auto___16415]));

var G__16416 = (i__7480__auto___16415 + (1));
i__7480__auto___16415 = G__16416;
continue;
} else {
}
break;
}

var G__15908 = args15904.length;
switch (G__15908) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15904.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.line,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq15905){
var G__15906 = cljs.core.first(seq15905);
var seq15905__$1 = cljs.core.next(seq15905);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__15906,seq15905__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args15909 = [];
var len__7479__auto___16418 = arguments.length;
var i__7480__auto___16419 = (0);
while(true){
if((i__7480__auto___16419 < len__7479__auto___16418)){
args15909.push((arguments[i__7480__auto___16419]));

var G__16420 = (i__7480__auto___16419 + (1));
i__7480__auto___16419 = G__16420;
continue;
} else {
}
break;
}

var G__15913 = args15909.length;
switch (G__15913) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15909.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.path,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq15910){
var G__15911 = cljs.core.first(seq15910);
var seq15910__$1 = cljs.core.next(seq15910);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__15911,seq15910__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args15914 = [];
var len__7479__auto___16422 = arguments.length;
var i__7480__auto___16423 = (0);
while(true){
if((i__7480__auto___16423 < len__7479__auto___16422)){
args15914.push((arguments[i__7480__auto___16423]));

var G__16424 = (i__7480__auto___16423 + (1));
i__7480__auto___16423 = G__16424;
continue;
} else {
}
break;
}

var G__15918 = args15914.length;
switch (G__15918) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15914.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.polyline,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq15915){
var G__15916 = cljs.core.first(seq15915);
var seq15915__$1 = cljs.core.next(seq15915);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__15916,seq15915__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args15919 = [];
var len__7479__auto___16426 = arguments.length;
var i__7480__auto___16427 = (0);
while(true){
if((i__7480__auto___16427 < len__7479__auto___16426)){
args15919.push((arguments[i__7480__auto___16427]));

var G__16428 = (i__7480__auto___16427 + (1));
i__7480__auto___16427 = G__16428;
continue;
} else {
}
break;
}

var G__15923 = args15919.length;
switch (G__15923) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15919.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.rect,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq15920){
var G__15921 = cljs.core.first(seq15920);
var seq15920__$1 = cljs.core.next(seq15920);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__15921,seq15920__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args15924 = [];
var len__7479__auto___16430 = arguments.length;
var i__7480__auto___16431 = (0);
while(true){
if((i__7480__auto___16431 < len__7479__auto___16430)){
args15924.push((arguments[i__7480__auto___16431]));

var G__16432 = (i__7480__auto___16431 + (1));
i__7480__auto___16431 = G__16432;
continue;
} else {
}
break;
}

var G__15928 = args15924.length;
switch (G__15928) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15924.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.svg,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq15925){
var G__15926 = cljs.core.first(seq15925);
var seq15925__$1 = cljs.core.next(seq15925);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__15926,seq15925__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args15929 = [];
var len__7479__auto___16434 = arguments.length;
var i__7480__auto___16435 = (0);
while(true){
if((i__7480__auto___16435 < len__7479__auto___16434)){
args15929.push((arguments[i__7480__auto___16435]));

var G__16436 = (i__7480__auto___16435 + (1));
i__7480__auto___16435 = G__16436;
continue;
} else {
}
break;
}

var G__15933 = args15929.length;
switch (G__15933) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15929.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.text,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq15930){
var G__15931 = cljs.core.first(seq15930);
var seq15930__$1 = cljs.core.next(seq15930);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__15931,seq15930__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args15934 = [];
var len__7479__auto___16438 = arguments.length;
var i__7480__auto___16439 = (0);
while(true){
if((i__7480__auto___16439 < len__7479__auto___16438)){
args15934.push((arguments[i__7480__auto___16439]));

var G__16440 = (i__7480__auto___16439 + (1));
i__7480__auto___16439 = G__16440;
continue;
} else {
}
break;
}

var G__15938 = args15934.length;
switch (G__15938) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15934.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.defs,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq15935){
var G__15936 = cljs.core.first(seq15935);
var seq15935__$1 = cljs.core.next(seq15935);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__15936,seq15935__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args15939 = [];
var len__7479__auto___16442 = arguments.length;
var i__7480__auto___16443 = (0);
while(true){
if((i__7480__auto___16443 < len__7479__auto___16442)){
args15939.push((arguments[i__7480__auto___16443]));

var G__16444 = (i__7480__auto___16443 + (1));
i__7480__auto___16443 = G__16444;
continue;
} else {
}
break;
}

var G__15943 = args15939.length;
switch (G__15943) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15939.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.linearGradient,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq15940){
var G__15941 = cljs.core.first(seq15940);
var seq15940__$1 = cljs.core.next(seq15940);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__15941,seq15940__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args15944 = [];
var len__7479__auto___16446 = arguments.length;
var i__7480__auto___16447 = (0);
while(true){
if((i__7480__auto___16447 < len__7479__auto___16446)){
args15944.push((arguments[i__7480__auto___16447]));

var G__16448 = (i__7480__auto___16447 + (1));
i__7480__auto___16447 = G__16448;
continue;
} else {
}
break;
}

var G__15948 = args15944.length;
switch (G__15948) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15944.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.polygon,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq15945){
var G__15946 = cljs.core.first(seq15945);
var seq15945__$1 = cljs.core.next(seq15945);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__15946,seq15945__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args15949 = [];
var len__7479__auto___16450 = arguments.length;
var i__7480__auto___16451 = (0);
while(true){
if((i__7480__auto___16451 < len__7479__auto___16450)){
args15949.push((arguments[i__7480__auto___16451]));

var G__16452 = (i__7480__auto___16451 + (1));
i__7480__auto___16451 = G__16452;
continue;
} else {
}
break;
}

var G__15953 = args15949.length;
switch (G__15953) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15949.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.radialGradient,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq15950){
var G__15951 = cljs.core.first(seq15950);
var seq15950__$1 = cljs.core.next(seq15950);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__15951,seq15950__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args15954 = [];
var len__7479__auto___16454 = arguments.length;
var i__7480__auto___16455 = (0);
while(true){
if((i__7480__auto___16455 < len__7479__auto___16454)){
args15954.push((arguments[i__7480__auto___16455]));

var G__16456 = (i__7480__auto___16455 + (1));
i__7480__auto___16455 = G__16456;
continue;
} else {
}
break;
}

var G__15958 = args15954.length;
switch (G__15958) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15954.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.stop,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq15955){
var G__15956 = cljs.core.first(seq15955);
var seq15955__$1 = cljs.core.next(seq15955);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__15956,seq15955__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args15959 = [];
var len__7479__auto___16458 = arguments.length;
var i__7480__auto___16459 = (0);
while(true){
if((i__7480__auto___16459 < len__7479__auto___16458)){
args15959.push((arguments[i__7480__auto___16459]));

var G__16460 = (i__7480__auto___16459 + (1));
i__7480__auto___16459 = G__16460;
continue;
} else {
}
break;
}

var G__15963 = args15959.length;
switch (G__15963) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15959.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(React.DOM.tspan,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq15960){
var G__15961 = cljs.core.first(seq15960);
var seq15960__$1 = cljs.core.next(seq15960);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__15961,seq15960__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args15964 = [];
var len__7479__auto___16462 = arguments.length;
var i__7480__auto___16463 = (0);
while(true){
if((i__7480__auto___16463 < len__7479__auto___16462)){
args15964.push((arguments[i__7480__auto___16463]));

var G__16464 = (i__7480__auto___16463 + (1));
i__7480__auto___16463 = G__16464;
continue;
} else {
}
break;
}

var G__15968 = args15964.length;
switch (G__15968) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15964.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(om.dom.input,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq15965){
var G__15966 = cljs.core.first(seq15965);
var seq15965__$1 = cljs.core.next(seq15965);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__15966,seq15965__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args15969 = [];
var len__7479__auto___16466 = arguments.length;
var i__7480__auto___16467 = (0);
while(true){
if((i__7480__auto___16467 < len__7479__auto___16466)){
args15969.push((arguments[i__7480__auto___16467]));

var G__16468 = (i__7480__auto___16467 + (1));
i__7480__auto___16467 = G__16468;
continue;
} else {
}
break;
}

var G__15973 = args15969.length;
switch (G__15973) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15969.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(om.dom.textarea,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq15970){
var G__15971 = cljs.core.first(seq15970);
var seq15970__$1 = cljs.core.next(seq15970);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__15971,seq15970__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args15509 = [];
var len__7479__auto___16470 = arguments.length;
var i__7480__auto___16471 = (0);
while(true){
if((i__7480__auto___16471 < len__7479__auto___16470)){
args15509.push((arguments[i__7480__auto___16471]));

var G__16472 = (i__7480__auto___16471 + (1));
i__7480__auto___16471 = G__16472;
continue;
} else {
}
break;
}

var G__15513 = args15509.length;
switch (G__15513) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15509.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15317__auto__,children__15318__auto__){
return om_tools.dom.element(om.dom.option,opts__15317__auto__,children__15318__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq15510){
var G__15511 = cljs.core.first(seq15510);
var seq15510__$1 = cljs.core.next(seq15510);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__15511,seq15510__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ks);
} else {
return null;
}
});
