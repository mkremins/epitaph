// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('epitaph.app');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('epitaph.civs');
goog.require('om.core');
goog.require('om_tools.core');
goog.require('om_tools.dom');
epitaph.app.synth = (new Tone.Synth()).toMaster();
/**
 * Converts the number `x` from the scale `[old-min old-max]` to the scale
 * `[new-min new-max]`.
 */
epitaph.app.scale = (function epitaph$app$scale(x,p__16710,p__16711){
var vec__16718 = p__16710;
var old_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16718,(0),null);
var old_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16718,(1),null);
var vec__16721 = p__16711;
var new_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16721,(0),null);
var new_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16721,(1),null);
var old_range = (old_max - old_min);
var new_range = (new_max - new_min);
return ((((x - old_min) * new_range) / old_range) + new_min);
});
if(typeof epitaph.app.app_state !== 'undefined'){
} else {
epitaph.app.app_state = (function (){var stardate = ((2200) + cljs.core.rand_int((700)));
var G__16724 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$civs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [epitaph.civs.gen_civ(stardate)], null),cljs.core.cst$kw$stardate,stardate,cljs.core.cst$kw$sound_DASH_on_QMARK_,true], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16724) : cljs.core.atom.call(null,G__16724));
})();
}
epitaph.app.play_notification_sound_BANG_ = (function epitaph$app$play_notification_sound_BANG_(pitch){
if(cljs.core.truth_(cljs.core.cst$kw$sound_DASH_on_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(epitaph.app.app_state) : cljs.core.deref.call(null,epitaph.app.app_state))))){
return epitaph.app.synth.triggerAttackRelease(pitch,"8n");
} else {
return null;
}
});
epitaph.app.get_notification_pitch = (function epitaph$app$get_notification_pitch(old_civs,new_civs){
if((cljs.core.count(new_civs) > cljs.core.count(old_civs))){
return cljs.core.cst$kw$notification_DASH_pitch.cljs$core$IFn$_invoke$arity$1(cljs.core.peek(new_civs));
} else {
if((cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16725_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__16725_SHARP_),cljs.core.cst$kw$extinct);
}),new_civs)) > cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16726_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__16726_SHARP_),cljs.core.cst$kw$extinct);
}),old_civs)))){
return "C3";
} else {
var civs_with_new_events = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new_civs,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16727_SHARP_){
return (cljs.core.count(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_civs,p1__16727_SHARP_))) > cljs.core.count(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(old_civs,p1__16727_SHARP_))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(old_civs))));
if(cljs.core.seq(civs_with_new_events)){
return cljs.core.rand_nth(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$notification_DASH_pitch,civs_with_new_events));
} else {
return null;
}

}
}
});
epitaph.app.tick = (function epitaph$app$tick(){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.root_cursor(epitaph.app.app_state),(function (state){
var new_stardate = (cljs.core.cst$kw$stardate.cljs$core$IFn$_invoke$arity$1(state) + (1));
var civs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_stardate){
return (function (p1__16728_SHARP_){
return epitaph.civs.civ_tick(p1__16728_SHARP_,new_stardate);
});})(new_stardate))
,cljs.core.cst$kw$civs.cljs$core$IFn$_invoke$arity$1(state));
var new_civ_chance = ((cljs.core.every_QMARK_(((function (new_stardate,civs){
return (function (p1__16729_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__16729_SHARP_),cljs.core.cst$kw$normal);
});})(new_stardate,civs))
,civs))?((1) / (15)):((1) / (180)));
var civs__$1 = (function (){var G__16731 = civs;
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < new_civ_chance)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16731,epitaph.civs.gen_civ(new_stardate));
} else {
return G__16731;
}
})();
var temp__4657__auto___16732 = epitaph.app.get_notification_pitch(cljs.core.cst$kw$civs.cljs$core$IFn$_invoke$arity$1(state),civs__$1);
if(cljs.core.truth_(temp__4657__auto___16732)){
var pitch_16733 = temp__4657__auto___16732;
epitaph.app.play_notification_sound_BANG_(pitch_16733);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$civs,civs__$1,cljs.core.array_seq([cljs.core.cst$kw$stardate,new_stardate], 0));
}));
});

var ufv___16750 = schema.utils.use_fn_validation;
var output_schema16735_16751 = schema.core.Any;
var input_schema16736_16752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker16737_16753 = schema.core.checker(input_schema16736_16752);
var output_checker16738_16754 = schema.core.checker(output_schema16735_16751);
/**
 * Inputs: [data owner]
 */
epitaph.app.event_view = ((function (ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754){
return (function epitaph$app$event_view(G__16739,G__16740){
var validate__12774__auto__ = ufv___16750.get_cell();
if(cljs.core.truth_(validate__12774__auto__)){
var args__12775__auto___16755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16739,G__16740], null);
var temp__4657__auto___16756 = (input_checker16737_16753.cljs$core$IFn$_invoke$arity$1 ? input_checker16737_16753.cljs$core$IFn$_invoke$arity$1(args__12775__auto___16755) : input_checker16737_16753.call(null,args__12775__auto___16755));
if(cljs.core.truth_(temp__4657__auto___16756)){
var error__12776__auto___16757 = temp__4657__auto___16756;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$event_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12776__auto___16757], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16736_16752,cljs.core.cst$kw$value,args__12775__auto___16755,cljs.core.cst$kw$error,error__12776__auto___16757], null));
} else {
}
} else {
}

var o__12777__auto__ = (function (){var data = G__16739;
var owner = G__16740;
while(true){
if(typeof epitaph.app.t_epitaph$app16744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
epitaph.app.t_epitaph$app16744 = (function (G__16739,owner,event_view,data,output_checker16738,validate__12774__auto__,input_schema16736,G__16740,input_checker16737,ufv__,output_schema16735,meta16745){
this.G__16739 = G__16739;
this.owner = owner;
this.event_view = event_view;
this.data = data;
this.output_checker16738 = output_checker16738;
this.validate__12774__auto__ = validate__12774__auto__;
this.input_schema16736 = input_schema16736;
this.G__16740 = G__16740;
this.input_checker16737 = input_checker16737;
this.ufv__ = ufv__;
this.output_schema16735 = output_schema16735;
this.meta16745 = meta16745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
epitaph.app.t_epitaph$app16744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754){
return (function (_16746,meta16745__$1){
var self__ = this;
var _16746__$1 = this;
return (new epitaph.app.t_epitaph$app16744(self__.G__16739,self__.owner,self__.event_view,self__.data,self__.output_checker16738,self__.validate__12774__auto__,self__.input_schema16736,self__.G__16740,self__.input_checker16737,self__.ufv__,self__.output_schema16735,meta16745__$1));
});})(validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754))
;

epitaph.app.t_epitaph$app16744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754){
return (function (_16746){
var self__ = this;
var _16746__$1 = this;
return self__.meta16745;
});})(validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754))
;

epitaph.app.t_epitaph$app16744.prototype.om$core$IDisplayName$ = true;

epitaph.app.t_epitaph$app16744.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754){
return (function (_){
var self__ = this;
var ___$1 = this;
return "event-view";
});})(validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754))
;

epitaph.app.t_epitaph$app16744.prototype.om$core$IRender$ = true;

epitaph.app.t_epitaph$app16744.prototype.om$core$IRender$render$arity$1 = ((function (validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "event"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$desc.cljs$core$IFn$_invoke$arity$1(self__.data)],null))));
});})(validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754))
;

epitaph.app.t_epitaph$app16744.getBasis = ((function (validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__16739,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$event_DASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema16735,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema16736], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_checker16738,cljs.core.cst$sym$validate__12774__auto__,cljs.core.cst$sym$input_DASH_schema16736,cljs.core.with_meta(cljs.core.cst$sym$G__16740,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker16737,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_schema16735,cljs.core.cst$sym$meta16745], null);
});})(validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754))
;

epitaph.app.t_epitaph$app16744.cljs$lang$type = true;

epitaph.app.t_epitaph$app16744.cljs$lang$ctorStr = "epitaph.app/t_epitaph$app16744";

epitaph.app.t_epitaph$app16744.cljs$lang$ctorPrWriter = ((function (validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"epitaph.app/t_epitaph$app16744");
});})(validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754))
;

epitaph.app.__GT_t_epitaph$app16744 = ((function (validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754){
return (function epitaph$app$event_view_$___GT_t_epitaph$app16744(G__16739__$1,owner__$1,event_view__$1,data__$1,output_checker16738__$1,validate__12774__auto____$1,input_schema16736__$1,G__16740__$1,input_checker16737__$1,ufv____$1,output_schema16735__$1,meta16745){
return (new epitaph.app.t_epitaph$app16744(G__16739__$1,owner__$1,event_view__$1,data__$1,output_checker16738__$1,validate__12774__auto____$1,input_schema16736__$1,G__16740__$1,input_checker16737__$1,ufv____$1,output_schema16735__$1,meta16745));
});})(validate__12774__auto__,ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754))
;

}

return (new epitaph.app.t_epitaph$app16744(G__16739,owner,epitaph$app$event_view,data,output_checker16738_16754,validate__12774__auto__,input_schema16736_16752,G__16740,input_checker16737_16753,ufv___16750,output_schema16735_16751,null));
break;
}
})();
if(cljs.core.truth_(validate__12774__auto__)){
var temp__4657__auto___16758 = (output_checker16738_16754.cljs$core$IFn$_invoke$arity$1 ? output_checker16738_16754.cljs$core$IFn$_invoke$arity$1(o__12777__auto__) : output_checker16738_16754.call(null,o__12777__auto__));
if(cljs.core.truth_(temp__4657__auto___16758)){
var error__12776__auto___16759 = temp__4657__auto___16758;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$event_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12776__auto___16759], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16735_16751,cljs.core.cst$kw$value,o__12777__auto__,cljs.core.cst$kw$error,error__12776__auto___16759], null));
} else {
}
} else {
}

return o__12777__auto__;
});})(ufv___16750,output_schema16735_16751,input_schema16736_16752,input_checker16737_16753,output_checker16738_16754))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(epitaph.app.event_view),schema.core.make_fn_schema(output_schema16735_16751,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16736_16752], null)));

epitaph.app.__GT_event_view = (function epitaph$app$__GT_event_view(var_args){
var args16747 = [];
var len__7479__auto___16760 = arguments.length;
var i__7480__auto___16761 = (0);
while(true){
if((i__7480__auto___16761 < len__7479__auto___16760)){
args16747.push((arguments[i__7480__auto___16761]));

var G__16762 = (i__7480__auto___16761 + (1));
i__7480__auto___16761 = G__16762;
continue;
} else {
}
break;
}

var G__16749 = args16747.length;
switch (G__16749) {
case 1:
return epitaph.app.__GT_event_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return epitaph.app.__GT_event_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16747.length)].join('')));

}
});

epitaph.app.__GT_event_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16655__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.event_view,cursor__16655__auto__);
});

epitaph.app.__GT_event_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16655__auto__,m16734){
return om.core.build.cljs$core$IFn$_invoke$arity$3(epitaph.app.event_view,cursor__16655__auto__,m16734);
});

epitaph.app.__GT_event_view.cljs$lang$maxFixedArity = 2;


var ufv___16800 = schema.utils.use_fn_validation;
var output_schema16767_16801 = schema.core.Any;
var input_schema16768_16802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker16769_16803 = schema.core.checker(input_schema16768_16802);
var output_checker16770_16804 = schema.core.checker(output_schema16767_16801);
/**
 * Inputs: [data owner]
 */
epitaph.app.civ_view = ((function (ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function epitaph$app$civ_view(G__16771,G__16772){
var validate__12774__auto__ = ufv___16800.get_cell();
if(cljs.core.truth_(validate__12774__auto__)){
var args__12775__auto___16805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16771,G__16772], null);
var temp__4657__auto___16806 = (input_checker16769_16803.cljs$core$IFn$_invoke$arity$1 ? input_checker16769_16803.cljs$core$IFn$_invoke$arity$1(args__12775__auto___16805) : input_checker16769_16803.call(null,args__12775__auto___16805));
if(cljs.core.truth_(temp__4657__auto___16806)){
var error__12776__auto___16807 = temp__4657__auto___16806;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$civ_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12776__auto___16807], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16768_16802,cljs.core.cst$kw$value,args__12775__auto___16805,cljs.core.cst$kw$error,error__12776__auto___16807], null));
} else {
}
} else {
}

var o__12777__auto__ = (function (){var data = G__16771;
var owner = G__16772;
while(true){
if(typeof epitaph.app.t_epitaph$app16785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
epitaph.app.t_epitaph$app16785 = (function (G__16772,owner,civ_view,data,validate__12774__auto__,input_checker16769,input_schema16768,output_checker16770,G__16771,output_schema16767,ufv__,meta16786){
this.G__16772 = G__16772;
this.owner = owner;
this.civ_view = civ_view;
this.data = data;
this.validate__12774__auto__ = validate__12774__auto__;
this.input_checker16769 = input_checker16769;
this.input_schema16768 = input_schema16768;
this.output_checker16770 = output_checker16770;
this.G__16771 = G__16771;
this.output_schema16767 = output_schema16767;
this.ufv__ = ufv__;
this.meta16786 = meta16786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
epitaph.app.t_epitaph$app16785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (_16787,meta16786__$1){
var self__ = this;
var _16787__$1 = this;
return (new epitaph.app.t_epitaph$app16785(self__.G__16772,self__.owner,self__.civ_view,self__.data,self__.validate__12774__auto__,self__.input_checker16769,self__.input_schema16768,self__.output_checker16770,self__.G__16771,self__.output_schema16767,self__.ufv__,meta16786__$1));
});})(validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
;

epitaph.app.t_epitaph$app16785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (_16787){
var self__ = this;
var _16787__$1 = this;
return self__.meta16786;
});})(validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
;

epitaph.app.t_epitaph$app16785.prototype.om$core$IDisplayName$ = true;

epitaph.app.t_epitaph$app16785.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (_){
var self__ = this;
var ___$1 = this;
return "civ-view";
});})(validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
;

epitaph.app.t_epitaph$app16785.prototype.om$core$IRender$ = true;

epitaph.app.t_epitaph$app16785.prototype.om$core$IRender$render$arity$1 = ((function (validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts([cljs.core.str("civ "),cljs.core.str(cljs.core.name(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.data)))].join('')), "style": ({"opacity": om_tools.dom.format_opts(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.cst$kw$extinct))?[cljs.core.str((function (){var x__6735__auto__ = epitaph.app.scale(cljs.core.cst$kw$cycles_DASH_since_DASH_extinction.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((160) + ((20) * cljs.core.count(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(self__.data))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75,0.1], null));
var y__6736__auto__ = 0.1;
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
})())].join(''):null))})}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "profile"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,({"className": "name"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(self__.data)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "events"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.cljs$core$IFn$_invoke$arity$2(epitaph.app.event_view,cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(self__.data))],null)))),(function (){var G__16788 = (((cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.data) instanceof cljs.core.Keyword))?cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.data).fqn:null);
switch (G__16788) {
case "normal":
if(cljs.core.seq(epitaph.civs.possible_techs(self__.data))){
var date = cljs.core.cst$kw$stardate.cljs$core$IFn$_invoke$arity$1(self__.data);
var date_allowed_to_intervene = (cljs.core.cst$kw$last_DASH_intervened.cljs$core$IFn$_invoke$arity$1(self__.data) + (30));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "enlighten"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(((date < date_allowed_to_intervene))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,["We have recently interfered with the development of ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(self__.data)," civilization. Further interference is forbidden"," until ",date_allowed_to_intervene,"."],null)))):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["We could teach them the secrets of ",(function (){var iter__7184__auto__ = ((function (date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function epitaph$app$civ_view_$_iter__16789(s__16790){
return (new cljs.core.LazySeq(null,((function (date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (){
var s__16790__$1 = s__16790;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16790__$1);
if(temp__4657__auto__){
var s__16790__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16790__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16790__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16792 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16791 = (0);
while(true){
if((i__16791 < size__7183__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16791);
cljs.core.chunk_append(b__16792,((cljs.core.map_QMARK_(part))?(function (){var tech = part;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"href": "#", "onClick": om_tools.dom.format_opts(((function (i__16791,tech,part,c__7182__auto__,size__7183__auto__,b__16792,s__16790__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (e){
e.preventDefault();

epitaph.app.play_notification_sound_BANG_(cljs.core.cst$kw$notification_DASH_pitch.cljs$core$IFn$_invoke$arity$1(self__.data));

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,((function (i__16791,tech,part,c__7182__auto__,size__7183__auto__,b__16792,s__16790__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (p1__16764_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(epitaph.civs.process_event(p1__16764_SHARP_,tech,date),cljs.core.cst$kw$last_DASH_intervened,date);
});})(i__16791,tech,part,c__7182__auto__,size__7183__auto__,b__16792,s__16790__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
);
});})(i__16791,tech,part,c__7182__auto__,size__7183__auto__,b__16792,s__16790__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.string.replace(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(tech)),/-/," ")],null))));
})():om_tools.dom.element(React.DOM.span,part,cljs.core.PersistentVector.EMPTY)));

var G__16809 = (i__16791 + (1));
i__16791 = G__16809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16792),epitaph$app$civ_view_$_iter__16789(cljs.core.chunk_rest(s__16790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16792),null);
}
} else {
var part = cljs.core.first(s__16790__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(part))?(function (){var tech = part;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"href": "#", "onClick": om_tools.dom.format_opts(((function (tech,part,s__16790__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (e){
e.preventDefault();

epitaph.app.play_notification_sound_BANG_(cljs.core.cst$kw$notification_DASH_pitch.cljs$core$IFn$_invoke$arity$1(self__.data));

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,((function (tech,part,s__16790__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (p1__16764_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(epitaph.civs.process_event(p1__16764_SHARP_,tech,date),cljs.core.cst$kw$last_DASH_intervened,date);
});})(tech,part,s__16790__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
);
});})(tech,part,s__16790__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.string.replace(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(tech)),/-/," ")],null))));
})():om_tools.dom.element(React.DOM.span,part,cljs.core.PersistentVector.EMPTY)),epitaph$app$civ_view_$_iter__16789(cljs.core.rest(s__16790__$2)));
}
} else {
return null;
}
break;
}
});})(date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
,null,null));
});})(date,date_allowed_to_intervene,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
;
return iter__7184__auto__(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", or of ",epitaph.civs.possible_techs(self__.data)));
})(),"."],null)))))],null))));
} else {
return null;
}

break;
case "pending-invite":
var date = cljs.core.cst$kw$stardate.cljs$core$IFn$_invoke$arity$1(self__.data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "enlighten"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "invite"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["We could ",(function (){var G__16795 = ({"onClick": om_tools.dom.format_opts(((function (date,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,((function (date,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (p1__16765_SHARP_){
return epitaph.civs.invite(p1__16765_SHARP_,date);
});})(date,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
);
});})(date,G__16788,___$1,validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
)});
var G__16796 = "invite them in";
return React.DOM.a(G__16795,G__16796);
})(),"."],null))))],null))));

break;
default:
return null;

}
})()],null))));
});})(validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
;

epitaph.app.t_epitaph$app16785.getBasis = ((function (validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__16772,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$civ_DASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema16767,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema16768], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$validate__12774__auto__,cljs.core.cst$sym$input_DASH_checker16769,cljs.core.cst$sym$input_DASH_schema16768,cljs.core.cst$sym$output_DASH_checker16770,cljs.core.with_meta(cljs.core.cst$sym$G__16771,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema16767,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta16786], null);
});})(validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
;

epitaph.app.t_epitaph$app16785.cljs$lang$type = true;

epitaph.app.t_epitaph$app16785.cljs$lang$ctorStr = "epitaph.app/t_epitaph$app16785";

epitaph.app.t_epitaph$app16785.cljs$lang$ctorPrWriter = ((function (validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"epitaph.app/t_epitaph$app16785");
});})(validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
;

epitaph.app.__GT_t_epitaph$app16785 = ((function (validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804){
return (function epitaph$app$civ_view_$___GT_t_epitaph$app16785(G__16772__$1,owner__$1,civ_view__$1,data__$1,validate__12774__auto____$1,input_checker16769__$1,input_schema16768__$1,output_checker16770__$1,G__16771__$1,output_schema16767__$1,ufv____$1,meta16786){
return (new epitaph.app.t_epitaph$app16785(G__16772__$1,owner__$1,civ_view__$1,data__$1,validate__12774__auto____$1,input_checker16769__$1,input_schema16768__$1,output_checker16770__$1,G__16771__$1,output_schema16767__$1,ufv____$1,meta16786));
});})(validate__12774__auto__,ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
;

}

return (new epitaph.app.t_epitaph$app16785(G__16772,owner,epitaph$app$civ_view,data,validate__12774__auto__,input_checker16769_16803,input_schema16768_16802,output_checker16770_16804,G__16771,output_schema16767_16801,ufv___16800,null));
break;
}
})();
if(cljs.core.truth_(validate__12774__auto__)){
var temp__4657__auto___16810 = (output_checker16770_16804.cljs$core$IFn$_invoke$arity$1 ? output_checker16770_16804.cljs$core$IFn$_invoke$arity$1(o__12777__auto__) : output_checker16770_16804.call(null,o__12777__auto__));
if(cljs.core.truth_(temp__4657__auto___16810)){
var error__12776__auto___16811 = temp__4657__auto___16810;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$civ_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12776__auto___16811], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16767_16801,cljs.core.cst$kw$value,o__12777__auto__,cljs.core.cst$kw$error,error__12776__auto___16811], null));
} else {
}
} else {
}

return o__12777__auto__;
});})(ufv___16800,output_schema16767_16801,input_schema16768_16802,input_checker16769_16803,output_checker16770_16804))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(epitaph.app.civ_view),schema.core.make_fn_schema(output_schema16767_16801,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16768_16802], null)));

epitaph.app.__GT_civ_view = (function epitaph$app$__GT_civ_view(var_args){
var args16797 = [];
var len__7479__auto___16812 = arguments.length;
var i__7480__auto___16813 = (0);
while(true){
if((i__7480__auto___16813 < len__7479__auto___16812)){
args16797.push((arguments[i__7480__auto___16813]));

var G__16814 = (i__7480__auto___16813 + (1));
i__7480__auto___16813 = G__16814;
continue;
} else {
}
break;
}

var G__16799 = args16797.length;
switch (G__16799) {
case 1:
return epitaph.app.__GT_civ_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return epitaph.app.__GT_civ_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16797.length)].join('')));

}
});

epitaph.app.__GT_civ_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16655__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.civ_view,cursor__16655__auto__);
});

epitaph.app.__GT_civ_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16655__auto__,m16766){
return om.core.build.cljs$core$IFn$_invoke$arity$3(epitaph.app.civ_view,cursor__16655__auto__,m16766);
});

epitaph.app.__GT_civ_view.cljs$lang$maxFixedArity = 2;


var ufv___16859 = schema.utils.use_fn_validation;
var output_schema16818_16860 = schema.core.Any;
var input_schema16819_16861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker16820_16862 = schema.core.checker(input_schema16819_16861);
var output_checker16821_16863 = schema.core.checker(output_schema16818_16860);
/**
 * Inputs: [data owner]
 */
epitaph.app.info_box = ((function (ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function epitaph$app$info_box(G__16822,G__16823){
var validate__12774__auto__ = ufv___16859.get_cell();
if(cljs.core.truth_(validate__12774__auto__)){
var args__12775__auto___16864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16822,G__16823], null);
var temp__4657__auto___16865 = (input_checker16820_16862.cljs$core$IFn$_invoke$arity$1 ? input_checker16820_16862.cljs$core$IFn$_invoke$arity$1(args__12775__auto___16864) : input_checker16820_16862.call(null,args__12775__auto___16864));
if(cljs.core.truth_(temp__4657__auto___16865)){
var error__12776__auto___16866 = temp__4657__auto___16865;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$info_DASH_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12776__auto___16866], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16819_16861,cljs.core.cst$kw$value,args__12775__auto___16864,cljs.core.cst$kw$error,error__12776__auto___16866], null));
} else {
}
} else {
}

var o__12777__auto__ = (function (){var data = G__16822;
var owner = G__16823;
while(true){
if(typeof epitaph.app.t_epitaph$app16840 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
epitaph.app.t_epitaph$app16840 = (function (owner,data,validate__12774__auto__,G__16822,info_box,G__16823,input_checker16820,output_checker16821,output_schema16818,input_schema16819,ufv__,meta16841){
this.owner = owner;
this.data = data;
this.validate__12774__auto__ = validate__12774__auto__;
this.G__16822 = G__16822;
this.info_box = info_box;
this.G__16823 = G__16823;
this.input_checker16820 = input_checker16820;
this.output_checker16821 = output_checker16821;
this.output_schema16818 = output_schema16818;
this.input_schema16819 = input_schema16819;
this.ufv__ = ufv__;
this.meta16841 = meta16841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
epitaph.app.t_epitaph$app16840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function (_16842,meta16841__$1){
var self__ = this;
var _16842__$1 = this;
return (new epitaph.app.t_epitaph$app16840(self__.owner,self__.data,self__.validate__12774__auto__,self__.G__16822,self__.info_box,self__.G__16823,self__.input_checker16820,self__.output_checker16821,self__.output_schema16818,self__.input_schema16819,self__.ufv__,meta16841__$1));
});})(validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
;

epitaph.app.t_epitaph$app16840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function (_16842){
var self__ = this;
var _16842__$1 = this;
return self__.meta16841;
});})(validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
;

epitaph.app.t_epitaph$app16840.prototype.om$core$IDisplayName$ = true;

epitaph.app.t_epitaph$app16840.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function (_){
var self__ = this;
var ___$1 = this;
return "info-box";
});})(validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
;

epitaph.app.t_epitaph$app16840.prototype.om$core$IRender$ = true;

epitaph.app.t_epitaph$app16840.prototype.om$core$IRender$render$arity$1 = ((function (validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "modal-overlay", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$show_DASH_info_QMARK_,false);
});})(___$1,validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "info-box", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function (p1__16816_SHARP_){
return p1__16816_SHARP_.stopPropagation();
});})(___$1,validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "right"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__16843 = ({"className": "icon-cross", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$show_DASH_info_QMARK_,false);
});})(___$1,validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
)});
return React.DOM.a(G__16843);
})()],null)))),React.DOM.h2(null,"About"),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Hi! I\u2019m ",(function (){var G__16844 = ({"href": "https://mkremins.github.io"});
var G__16845 = "Max Kreminski";
return React.DOM.a(G__16844,G__16845);
})(),", the creator of Epitaph. If you enjoyed playing Epitaph, you can:"],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["Follow me on ",(function (){var G__16846 = ({"href": "https://twitter.com/maxkreminski"});
var G__16847 = "Twitter";
return React.DOM.a(G__16846,G__16847);
})()," or ",(function (){var G__16848 = ({"href": "https://mkremins.itch.io"});
var G__16849 = "itch.io";
return React.DOM.a(G__16848,G__16849);
})()," for updates on this and other projects"],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Support me by ",(function (){var G__16850 = ({"href": "https://mkremins.itch.io/epitaph/donate"});
var G__16851 = "making a donation";
return React.DOM.a(G__16850,G__16851);
})()," on itch.io"],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Check out the game\u2019s ",(function (){var G__16852 = ({"href": "https://github.com/mkremins/epitaph"});
var G__16853 = "source code";
return React.DOM.a(G__16852,G__16853);
})()],null))))],null)))),(function (){var G__16854 = ({});
var G__16855 = "Thanks for playing!";
return React.DOM.p(G__16854,G__16855);
})()],null))))],null))));
});})(validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
;

epitaph.app.t_epitaph$app16840.getBasis = ((function (validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$validate__12774__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__16822,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$info_DASH_box,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema16818,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema16819], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__16823,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker16820,cljs.core.cst$sym$output_DASH_checker16821,cljs.core.cst$sym$output_DASH_schema16818,cljs.core.cst$sym$input_DASH_schema16819,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta16841], null);
});})(validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
;

epitaph.app.t_epitaph$app16840.cljs$lang$type = true;

epitaph.app.t_epitaph$app16840.cljs$lang$ctorStr = "epitaph.app/t_epitaph$app16840";

epitaph.app.t_epitaph$app16840.cljs$lang$ctorPrWriter = ((function (validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"epitaph.app/t_epitaph$app16840");
});})(validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
;

epitaph.app.__GT_t_epitaph$app16840 = ((function (validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863){
return (function epitaph$app$info_box_$___GT_t_epitaph$app16840(owner__$1,data__$1,validate__12774__auto____$1,G__16822__$1,info_box__$1,G__16823__$1,input_checker16820__$1,output_checker16821__$1,output_schema16818__$1,input_schema16819__$1,ufv____$1,meta16841){
return (new epitaph.app.t_epitaph$app16840(owner__$1,data__$1,validate__12774__auto____$1,G__16822__$1,info_box__$1,G__16823__$1,input_checker16820__$1,output_checker16821__$1,output_schema16818__$1,input_schema16819__$1,ufv____$1,meta16841));
});})(validate__12774__auto__,ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
;

}

return (new epitaph.app.t_epitaph$app16840(owner,data,validate__12774__auto__,G__16822,epitaph$app$info_box,G__16823,input_checker16820_16862,output_checker16821_16863,output_schema16818_16860,input_schema16819_16861,ufv___16859,null));
break;
}
})();
if(cljs.core.truth_(validate__12774__auto__)){
var temp__4657__auto___16867 = (output_checker16821_16863.cljs$core$IFn$_invoke$arity$1 ? output_checker16821_16863.cljs$core$IFn$_invoke$arity$1(o__12777__auto__) : output_checker16821_16863.call(null,o__12777__auto__));
if(cljs.core.truth_(temp__4657__auto___16867)){
var error__12776__auto___16868 = temp__4657__auto___16867;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$info_DASH_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12776__auto___16868], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16818_16860,cljs.core.cst$kw$value,o__12777__auto__,cljs.core.cst$kw$error,error__12776__auto___16868], null));
} else {
}
} else {
}

return o__12777__auto__;
});})(ufv___16859,output_schema16818_16860,input_schema16819_16861,input_checker16820_16862,output_checker16821_16863))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(epitaph.app.info_box),schema.core.make_fn_schema(output_schema16818_16860,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16819_16861], null)));

epitaph.app.__GT_info_box = (function epitaph$app$__GT_info_box(var_args){
var args16856 = [];
var len__7479__auto___16869 = arguments.length;
var i__7480__auto___16870 = (0);
while(true){
if((i__7480__auto___16870 < len__7479__auto___16869)){
args16856.push((arguments[i__7480__auto___16870]));

var G__16871 = (i__7480__auto___16870 + (1));
i__7480__auto___16870 = G__16871;
continue;
} else {
}
break;
}

var G__16858 = args16856.length;
switch (G__16858) {
case 1:
return epitaph.app.__GT_info_box.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return epitaph.app.__GT_info_box.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16856.length)].join('')));

}
});

epitaph.app.__GT_info_box.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16655__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.info_box,cursor__16655__auto__);
});

epitaph.app.__GT_info_box.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16655__auto__,m16817){
return om.core.build.cljs$core$IFn$_invoke$arity$3(epitaph.app.info_box,cursor__16655__auto__,m16817);
});

epitaph.app.__GT_info_box.cljs$lang$maxFixedArity = 2;


var ufv___16894 = schema.utils.use_fn_validation;
var output_schema16875_16895 = schema.core.Any;
var input_schema16876_16896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker16877_16897 = schema.core.checker(input_schema16876_16896);
var output_checker16878_16898 = schema.core.checker(output_schema16875_16895);
/**
 * Inputs: [data owner]
 */
epitaph.app.app = ((function (ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function epitaph$app$app(G__16879,G__16880){
var validate__12774__auto__ = ufv___16894.get_cell();
if(cljs.core.truth_(validate__12774__auto__)){
var args__12775__auto___16899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16879,G__16880], null);
var temp__4657__auto___16900 = (input_checker16877_16897.cljs$core$IFn$_invoke$arity$1 ? input_checker16877_16897.cljs$core$IFn$_invoke$arity$1(args__12775__auto___16899) : input_checker16877_16897.call(null,args__12775__auto___16899));
if(cljs.core.truth_(temp__4657__auto___16900)){
var error__12776__auto___16901 = temp__4657__auto___16900;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12776__auto___16901], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema16876_16896,cljs.core.cst$kw$value,args__12775__auto___16899,cljs.core.cst$kw$error,error__12776__auto___16901], null));
} else {
}
} else {
}

var o__12777__auto__ = (function (){var data = G__16879;
var owner = G__16880;
while(true){
if(typeof epitaph.app.t_epitaph$app16886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
epitaph.app.t_epitaph$app16886 = (function (input_schema16876,G__16880,output_schema16875,owner,data,validate__12774__auto__,G__16879,output_checker16878,input_checker16877,app,ufv__,meta16887){
this.input_schema16876 = input_schema16876;
this.G__16880 = G__16880;
this.output_schema16875 = output_schema16875;
this.owner = owner;
this.data = data;
this.validate__12774__auto__ = validate__12774__auto__;
this.G__16879 = G__16879;
this.output_checker16878 = output_checker16878;
this.input_checker16877 = input_checker16877;
this.app = app;
this.ufv__ = ufv__;
this.meta16887 = meta16887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
epitaph.app.t_epitaph$app16886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function (_16888,meta16887__$1){
var self__ = this;
var _16888__$1 = this;
return (new epitaph.app.t_epitaph$app16886(self__.input_schema16876,self__.G__16880,self__.output_schema16875,self__.owner,self__.data,self__.validate__12774__auto__,self__.G__16879,self__.output_checker16878,self__.input_checker16877,self__.app,self__.ufv__,meta16887__$1));
});})(validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
;

epitaph.app.t_epitaph$app16886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function (_16888){
var self__ = this;
var _16888__$1 = this;
return self__.meta16887;
});})(validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
;

epitaph.app.t_epitaph$app16886.prototype.om$core$IDisplayName$ = true;

epitaph.app.t_epitaph$app16886.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
;

epitaph.app.t_epitaph$app16886.prototype.om$core$IRender$ = true;

epitaph.app.t_epitaph$app16886.prototype.om$core$IRender$render$arity$1 = ((function (validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "app"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(cljs.core.cst$kw$show_DASH_info_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.info_box,self__.data):null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "top-bar"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str("Stardate "),cljs.core.str(cljs.core.cst$kw$stardate.cljs$core$IFn$_invoke$arity$1(self__.data))].join('')],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "right"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__16889 = ({"className": om_tools.dom.format_opts((cljs.core.truth_(cljs.core.cst$kw$sound_DASH_on_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.data))?"icon-sound-on":"icon-sound-off")), "onClick": om_tools.dom.format_opts(((function (___$1,validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$sound_DASH_on_QMARK_,cljs.core.not);
});})(___$1,validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
)});
return React.DOM.a(G__16889);
})(),(function (){var G__16890 = ({"className": "icon-info", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$show_DASH_info_QMARK_,true);
});})(___$1,validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
)});
return React.DOM.a(G__16890);
})()],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "civs"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.cljs$core$IFn$_invoke$arity$3(epitaph.app.civ_view,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function (p1__16873_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16873_SHARP_,cljs.core.cst$kw$stardate,cljs.core.cst$kw$stardate.cljs$core$IFn$_invoke$arity$1(self__.data));
});})(___$1,validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
,cljs.core.cst$kw$civs.cljs$core$IFn$_invoke$arity$1(self__.data))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name], null))],null))))],null))));
});})(validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
;

epitaph.app.t_epitaph$app16886.getBasis = ((function (validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema16876,cljs.core.with_meta(cljs.core.cst$sym$G__16880,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema16875,cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$validate__12774__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__16879,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker16878,cljs.core.cst$sym$input_DASH_checker16877,cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema16875,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema16876], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta16887], null);
});})(validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
;

epitaph.app.t_epitaph$app16886.cljs$lang$type = true;

epitaph.app.t_epitaph$app16886.cljs$lang$ctorStr = "epitaph.app/t_epitaph$app16886";

epitaph.app.t_epitaph$app16886.cljs$lang$ctorPrWriter = ((function (validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"epitaph.app/t_epitaph$app16886");
});})(validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
;

epitaph.app.__GT_t_epitaph$app16886 = ((function (validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898){
return (function epitaph$app$app_$___GT_t_epitaph$app16886(input_schema16876__$1,G__16880__$1,output_schema16875__$1,owner__$1,data__$1,validate__12774__auto____$1,G__16879__$1,output_checker16878__$1,input_checker16877__$1,app__$1,ufv____$1,meta16887){
return (new epitaph.app.t_epitaph$app16886(input_schema16876__$1,G__16880__$1,output_schema16875__$1,owner__$1,data__$1,validate__12774__auto____$1,G__16879__$1,output_checker16878__$1,input_checker16877__$1,app__$1,ufv____$1,meta16887));
});})(validate__12774__auto__,ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
;

}

return (new epitaph.app.t_epitaph$app16886(input_schema16876_16896,G__16880,output_schema16875_16895,owner,data,validate__12774__auto__,G__16879,output_checker16878_16898,input_checker16877_16897,epitaph$app$app,ufv___16894,null));
break;
}
})();
if(cljs.core.truth_(validate__12774__auto__)){
var temp__4657__auto___16902 = (output_checker16878_16898.cljs$core$IFn$_invoke$arity$1 ? output_checker16878_16898.cljs$core$IFn$_invoke$arity$1(o__12777__auto__) : output_checker16878_16898.call(null,o__12777__auto__));
if(cljs.core.truth_(temp__4657__auto___16902)){
var error__12776__auto___16903 = temp__4657__auto___16902;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12776__auto___16903], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema16875_16895,cljs.core.cst$kw$value,o__12777__auto__,cljs.core.cst$kw$error,error__12776__auto___16903], null));
} else {
}
} else {
}

return o__12777__auto__;
});})(ufv___16894,output_schema16875_16895,input_schema16876_16896,input_checker16877_16897,output_checker16878_16898))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(epitaph.app.app),schema.core.make_fn_schema(output_schema16875_16895,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16876_16896], null)));

epitaph.app.__GT_app = (function epitaph$app$__GT_app(var_args){
var args16891 = [];
var len__7479__auto___16904 = arguments.length;
var i__7480__auto___16905 = (0);
while(true){
if((i__7480__auto___16905 < len__7479__auto___16904)){
args16891.push((arguments[i__7480__auto___16905]));

var G__16906 = (i__7480__auto___16905 + (1));
i__7480__auto___16905 = G__16906;
continue;
} else {
}
break;
}

var G__16893 = args16891.length;
switch (G__16893) {
case 1:
return epitaph.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return epitaph.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16891.length)].join('')));

}
});

epitaph.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16655__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.app,cursor__16655__auto__);
});

epitaph.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16655__auto__,m16874){
return om.core.build.cljs$core$IFn$_invoke$arity$3(epitaph.app.app,cursor__16655__auto__,m16874);
});

epitaph.app.__GT_app.cljs$lang$maxFixedArity = 2;

epitaph.app.init = (function epitaph$app$init(){
cljs.core.enable_console_print_BANG_();

om.core.root(epitaph.app.app,epitaph.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));

epitaph.app.play_notification_sound_BANG_(cljs.core.cst$kw$notification_DASH_pitch.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$civs.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(epitaph.app.app_state) : cljs.core.deref.call(null,epitaph.app.app_state))))));

return setInterval(epitaph.app.tick,(1000));
});
epitaph.app.init();
