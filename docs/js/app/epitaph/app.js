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
epitaph.app.scale = (function epitaph$app$scale(x,p__21380,p__21381){
var vec__21388 = p__21380;
var old_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21388,(0),null);
var old_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21388,(1),null);
var vec__21391 = p__21381;
var new_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21391,(0),null);
var new_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21391,(1),null);
var old_range = (old_max - old_min);
var new_range = (new_max - new_min);
return ((((x - old_min) * new_range) / old_range) + new_min);
});
if(typeof epitaph.app.app_state !== 'undefined'){
} else {
epitaph.app.app_state = (function (){var stardate = ((2200) + cljs.core.rand_int((700)));
var G__21394 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$civs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [epitaph.civs.gen_civ(stardate)], null),cljs.core.cst$kw$stardate,stardate,cljs.core.cst$kw$sound_DASH_on_QMARK_,true], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21394) : cljs.core.atom.call(null,G__21394));
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
if((cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21395_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__21395_SHARP_),cljs.core.cst$kw$extinct);
}),new_civs)) > cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21396_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__21396_SHARP_),cljs.core.cst$kw$extinct);
}),old_civs)))){
return "C3";
} else {
var civs_with_new_events = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new_civs,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21397_SHARP_){
return (cljs.core.count(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_civs,p1__21397_SHARP_))) > cljs.core.count(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(old_civs,p1__21397_SHARP_))));
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
return (function (p1__21398_SHARP_){
return epitaph.civs.civ_tick(p1__21398_SHARP_,new_stardate);
});})(new_stardate))
,cljs.core.cst$kw$civs.cljs$core$IFn$_invoke$arity$1(state));
var new_civ_chance = ((cljs.core.every_QMARK_(((function (new_stardate,civs){
return (function (p1__21399_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(p1__21399_SHARP_),cljs.core.cst$kw$normal);
});})(new_stardate,civs))
,civs))?((1) / (15)):((1) / (180)));
var civs__$1 = (function (){var G__21401 = civs;
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < new_civ_chance)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21401,epitaph.civs.gen_civ(new_stardate));
} else {
return G__21401;
}
})();
var temp__4657__auto___21402 = epitaph.app.get_notification_pitch(cljs.core.cst$kw$civs.cljs$core$IFn$_invoke$arity$1(state),civs__$1);
if(cljs.core.truth_(temp__4657__auto___21402)){
var pitch_21403 = temp__4657__auto___21402;
epitaph.app.play_notification_sound_BANG_(pitch_21403);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$civs,civs__$1,cljs.core.array_seq([cljs.core.cst$kw$stardate,new_stardate], 0));
}));
});

var ufv___21420 = schema.utils.use_fn_validation;
var output_schema21405_21421 = schema.core.Any;
var input_schema21406_21422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21407_21423 = schema.core.checker(input_schema21406_21422);
var output_checker21408_21424 = schema.core.checker(output_schema21405_21421);
/**
 * Inputs: [data owner]
 */
epitaph.app.event_view = ((function (ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424){
return (function epitaph$app$event_view(G__21409,G__21410){
var validate__16734__auto__ = ufv___21420.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___21425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21409,G__21410], null);
var temp__4657__auto___21426 = (input_checker21407_21423.cljs$core$IFn$_invoke$arity$1 ? input_checker21407_21423.cljs$core$IFn$_invoke$arity$1(args__16735__auto___21425) : input_checker21407_21423.call(null,args__16735__auto___21425));
if(cljs.core.truth_(temp__4657__auto___21426)){
var error__16736__auto___21427 = temp__4657__auto___21426;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$event_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21427], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21406_21422,cljs.core.cst$kw$value,args__16735__auto___21425,cljs.core.cst$kw$error,error__16736__auto___21427], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var data = G__21409;
var owner = G__21410;
while(true){
if(typeof epitaph.app.t_epitaph$app21414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
epitaph.app.t_epitaph$app21414 = (function (owner,event_view,data,output_schema21405,input_checker21407,output_checker21408,input_schema21406,G__21410,G__21409,ufv__,validate__16734__auto__,meta21415){
this.owner = owner;
this.event_view = event_view;
this.data = data;
this.output_schema21405 = output_schema21405;
this.input_checker21407 = input_checker21407;
this.output_checker21408 = output_checker21408;
this.input_schema21406 = input_schema21406;
this.G__21410 = G__21410;
this.G__21409 = G__21409;
this.ufv__ = ufv__;
this.validate__16734__auto__ = validate__16734__auto__;
this.meta21415 = meta21415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
epitaph.app.t_epitaph$app21414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424){
return (function (_21416,meta21415__$1){
var self__ = this;
var _21416__$1 = this;
return (new epitaph.app.t_epitaph$app21414(self__.owner,self__.event_view,self__.data,self__.output_schema21405,self__.input_checker21407,self__.output_checker21408,self__.input_schema21406,self__.G__21410,self__.G__21409,self__.ufv__,self__.validate__16734__auto__,meta21415__$1));
});})(validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424))
;

epitaph.app.t_epitaph$app21414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424){
return (function (_21416){
var self__ = this;
var _21416__$1 = this;
return self__.meta21415;
});})(validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424))
;

epitaph.app.t_epitaph$app21414.prototype.om$core$IDisplayName$ = true;

epitaph.app.t_epitaph$app21414.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424){
return (function (_){
var self__ = this;
var ___$1 = this;
return "event-view";
});})(validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424))
;

epitaph.app.t_epitaph$app21414.prototype.om$core$IRender$ = true;

epitaph.app.t_epitaph$app21414.prototype.om$core$IRender$render$arity$1 = ((function (validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "event"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$desc.cljs$core$IFn$_invoke$arity$1(self__.data)],null))));
});})(validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424))
;

epitaph.app.t_epitaph$app21414.getBasis = ((function (validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$event_DASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21406], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_schema21405,cljs.core.cst$sym$input_DASH_checker21407,cljs.core.cst$sym$output_DASH_checker21408,cljs.core.cst$sym$input_DASH_schema21406,cljs.core.with_meta(cljs.core.cst$sym$G__21410,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__21409,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__16734__auto__,cljs.core.cst$sym$meta21415], null);
});})(validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424))
;

epitaph.app.t_epitaph$app21414.cljs$lang$type = true;

epitaph.app.t_epitaph$app21414.cljs$lang$ctorStr = "epitaph.app/t_epitaph$app21414";

epitaph.app.t_epitaph$app21414.cljs$lang$ctorPrWriter = ((function (validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"epitaph.app/t_epitaph$app21414");
});})(validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424))
;

epitaph.app.__GT_t_epitaph$app21414 = ((function (validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424){
return (function epitaph$app$event_view_$___GT_t_epitaph$app21414(owner__$1,event_view__$1,data__$1,output_schema21405__$1,input_checker21407__$1,output_checker21408__$1,input_schema21406__$1,G__21410__$1,G__21409__$1,ufv____$1,validate__16734__auto____$1,meta21415){
return (new epitaph.app.t_epitaph$app21414(owner__$1,event_view__$1,data__$1,output_schema21405__$1,input_checker21407__$1,output_checker21408__$1,input_schema21406__$1,G__21410__$1,G__21409__$1,ufv____$1,validate__16734__auto____$1,meta21415));
});})(validate__16734__auto__,ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424))
;

}

return (new epitaph.app.t_epitaph$app21414(owner,epitaph$app$event_view,data,output_schema21405_21421,input_checker21407_21423,output_checker21408_21424,input_schema21406_21422,G__21410,G__21409,ufv___21420,validate__16734__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___21428 = (output_checker21408_21424.cljs$core$IFn$_invoke$arity$1 ? output_checker21408_21424.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker21408_21424.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___21428)){
var error__16736__auto___21429 = temp__4657__auto___21428;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$event_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21429], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21405_21421,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___21429], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___21420,output_schema21405_21421,input_schema21406_21422,input_checker21407_21423,output_checker21408_21424))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(epitaph.app.event_view),schema.core.make_fn_schema(output_schema21405_21421,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21406_21422], null)));

epitaph.app.__GT_event_view = (function epitaph$app$__GT_event_view(var_args){
var args21417 = [];
var len__7479__auto___21430 = arguments.length;
var i__7480__auto___21431 = (0);
while(true){
if((i__7480__auto___21431 < len__7479__auto___21430)){
args21417.push((arguments[i__7480__auto___21431]));

var G__21432 = (i__7480__auto___21431 + (1));
i__7480__auto___21431 = G__21432;
continue;
} else {
}
break;
}

var G__21419 = args21417.length;
switch (G__21419) {
case 1:
return epitaph.app.__GT_event_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return epitaph.app.__GT_event_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21417.length)].join('')));

}
});

epitaph.app.__GT_event_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21325__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.event_view,cursor__21325__auto__);
});

epitaph.app.__GT_event_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21325__auto__,m21404){
return om.core.build.cljs$core$IFn$_invoke$arity$3(epitaph.app.event_view,cursor__21325__auto__,m21404);
});

epitaph.app.__GT_event_view.cljs$lang$maxFixedArity = 2;


var ufv___21470 = schema.utils.use_fn_validation;
var output_schema21437_21471 = schema.core.Any;
var input_schema21438_21472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21439_21473 = schema.core.checker(input_schema21438_21472);
var output_checker21440_21474 = schema.core.checker(output_schema21437_21471);
/**
 * Inputs: [data owner]
 */
epitaph.app.civ_view = ((function (ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function epitaph$app$civ_view(G__21441,G__21442){
var validate__16734__auto__ = ufv___21470.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___21475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21441,G__21442], null);
var temp__4657__auto___21476 = (input_checker21439_21473.cljs$core$IFn$_invoke$arity$1 ? input_checker21439_21473.cljs$core$IFn$_invoke$arity$1(args__16735__auto___21475) : input_checker21439_21473.call(null,args__16735__auto___21475));
if(cljs.core.truth_(temp__4657__auto___21476)){
var error__16736__auto___21477 = temp__4657__auto___21476;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$civ_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21477], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21438_21472,cljs.core.cst$kw$value,args__16735__auto___21475,cljs.core.cst$kw$error,error__16736__auto___21477], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var data = G__21441;
var owner = G__21442;
while(true){
if(typeof epitaph.app.t_epitaph$app21455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
epitaph.app.t_epitaph$app21455 = (function (input_checker21439,owner,civ_view,data,output_schema21437,G__21442,input_schema21438,G__21441,ufv__,output_checker21440,validate__16734__auto__,meta21456){
this.input_checker21439 = input_checker21439;
this.owner = owner;
this.civ_view = civ_view;
this.data = data;
this.output_schema21437 = output_schema21437;
this.G__21442 = G__21442;
this.input_schema21438 = input_schema21438;
this.G__21441 = G__21441;
this.ufv__ = ufv__;
this.output_checker21440 = output_checker21440;
this.validate__16734__auto__ = validate__16734__auto__;
this.meta21456 = meta21456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
epitaph.app.t_epitaph$app21455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (_21457,meta21456__$1){
var self__ = this;
var _21457__$1 = this;
return (new epitaph.app.t_epitaph$app21455(self__.input_checker21439,self__.owner,self__.civ_view,self__.data,self__.output_schema21437,self__.G__21442,self__.input_schema21438,self__.G__21441,self__.ufv__,self__.output_checker21440,self__.validate__16734__auto__,meta21456__$1));
});})(validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
;

epitaph.app.t_epitaph$app21455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (_21457){
var self__ = this;
var _21457__$1 = this;
return self__.meta21456;
});})(validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
;

epitaph.app.t_epitaph$app21455.prototype.om$core$IDisplayName$ = true;

epitaph.app.t_epitaph$app21455.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (_){
var self__ = this;
var ___$1 = this;
return "civ-view";
});})(validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
;

epitaph.app.t_epitaph$app21455.prototype.om$core$IRender$ = true;

epitaph.app.t_epitaph$app21455.prototype.om$core$IRender$render$arity$1 = ((function (validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts([cljs.core.str("civ "),cljs.core.str(cljs.core.name(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.data)))].join('')), "style": ({"opacity": om_tools.dom.format_opts(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.cst$kw$extinct))?[cljs.core.str((function (){var x__6735__auto__ = epitaph.app.scale(cljs.core.cst$kw$cycles_DASH_since_DASH_extinction.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((160) + ((20) * cljs.core.count(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(self__.data))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75,0.1], null));
var y__6736__auto__ = 0.1;
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
})())].join(''):null))})}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "profile"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,({"className": "name"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(self__.data)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "events"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.cljs$core$IFn$_invoke$arity$2(epitaph.app.event_view,cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(self__.data))],null)))),(function (){var G__21458 = (((cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.data) instanceof cljs.core.Keyword))?cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.data).fqn:null);
switch (G__21458) {
case "normal":
if(cljs.core.seq(epitaph.civs.possible_techs(self__.data))){
var date = cljs.core.cst$kw$stardate.cljs$core$IFn$_invoke$arity$1(self__.data);
var date_allowed_to_intervene = (cljs.core.cst$kw$last_DASH_intervened.cljs$core$IFn$_invoke$arity$1(self__.data) + (30));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "enlighten"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(((date < date_allowed_to_intervene))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,["We have recently interfered with the development of ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(self__.data)," civilization. Further interference is forbidden"," until ",date_allowed_to_intervene,"."],null)))):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["We could teach them the secrets of ",(function (){var iter__7184__auto__ = ((function (date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function epitaph$app$civ_view_$_iter__21459(s__21460){
return (new cljs.core.LazySeq(null,((function (date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (){
var s__21460__$1 = s__21460;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21460__$1);
if(temp__4657__auto__){
var s__21460__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21460__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21460__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21462 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21461 = (0);
while(true){
if((i__21461 < size__7183__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21461);
cljs.core.chunk_append(b__21462,((cljs.core.map_QMARK_(part))?(function (){var tech = part;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"href": "#", "onClick": om_tools.dom.format_opts(((function (i__21461,tech,part,c__7182__auto__,size__7183__auto__,b__21462,s__21460__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (e){
e.preventDefault();

epitaph.app.play_notification_sound_BANG_(cljs.core.cst$kw$notification_DASH_pitch.cljs$core$IFn$_invoke$arity$1(self__.data));

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,((function (i__21461,tech,part,c__7182__auto__,size__7183__auto__,b__21462,s__21460__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (p1__21434_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(epitaph.civs.process_event(p1__21434_SHARP_,tech,date),cljs.core.cst$kw$last_DASH_intervened,date);
});})(i__21461,tech,part,c__7182__auto__,size__7183__auto__,b__21462,s__21460__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
);
});})(i__21461,tech,part,c__7182__auto__,size__7183__auto__,b__21462,s__21460__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.string.replace(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(tech)),/-/," ")],null))));
})():om_tools.dom.element(React.DOM.span,part,cljs.core.PersistentVector.EMPTY)));

var G__21479 = (i__21461 + (1));
i__21461 = G__21479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21462),epitaph$app$civ_view_$_iter__21459(cljs.core.chunk_rest(s__21460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21462),null);
}
} else {
var part = cljs.core.first(s__21460__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(part))?(function (){var tech = part;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"href": "#", "onClick": om_tools.dom.format_opts(((function (tech,part,s__21460__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (e){
e.preventDefault();

epitaph.app.play_notification_sound_BANG_(cljs.core.cst$kw$notification_DASH_pitch.cljs$core$IFn$_invoke$arity$1(self__.data));

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,((function (tech,part,s__21460__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (p1__21434_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(epitaph.civs.process_event(p1__21434_SHARP_,tech,date),cljs.core.cst$kw$last_DASH_intervened,date);
});})(tech,part,s__21460__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
);
});})(tech,part,s__21460__$2,temp__4657__auto__,date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.string.replace(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(tech)),/-/," ")],null))));
})():om_tools.dom.element(React.DOM.span,part,cljs.core.PersistentVector.EMPTY)),epitaph$app$civ_view_$_iter__21459(cljs.core.rest(s__21460__$2)));
}
} else {
return null;
}
break;
}
});})(date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
,null,null));
});})(date,date_allowed_to_intervene,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
;
return iter__7184__auto__(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", or of ",epitaph.civs.possible_techs(self__.data)));
})(),"."],null)))))],null))));
} else {
return null;
}

break;
case "pending-invite":
var date = cljs.core.cst$kw$stardate.cljs$core$IFn$_invoke$arity$1(self__.data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "enlighten"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "invite"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["We could ",(function (){var G__21465 = ({"onClick": om_tools.dom.format_opts(((function (date,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,((function (date,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (p1__21435_SHARP_){
return epitaph.civs.invite(p1__21435_SHARP_,date);
});})(date,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
);
});})(date,G__21458,___$1,validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
)});
var G__21466 = "invite them in";
return React.DOM.a(G__21465,G__21466);
})(),"."],null))))],null))));

break;
default:
return null;

}
})()],null))));
});})(validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
;

epitaph.app.t_epitaph$app21455.getBasis = ((function (validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_checker21439,cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$civ_DASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21437,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21438], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_schema21437,cljs.core.with_meta(cljs.core.cst$sym$G__21442,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema21438,cljs.core.with_meta(cljs.core.cst$sym$G__21441,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_checker21440,cljs.core.cst$sym$validate__16734__auto__,cljs.core.cst$sym$meta21456], null);
});})(validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
;

epitaph.app.t_epitaph$app21455.cljs$lang$type = true;

epitaph.app.t_epitaph$app21455.cljs$lang$ctorStr = "epitaph.app/t_epitaph$app21455";

epitaph.app.t_epitaph$app21455.cljs$lang$ctorPrWriter = ((function (validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"epitaph.app/t_epitaph$app21455");
});})(validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
;

epitaph.app.__GT_t_epitaph$app21455 = ((function (validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474){
return (function epitaph$app$civ_view_$___GT_t_epitaph$app21455(input_checker21439__$1,owner__$1,civ_view__$1,data__$1,output_schema21437__$1,G__21442__$1,input_schema21438__$1,G__21441__$1,ufv____$1,output_checker21440__$1,validate__16734__auto____$1,meta21456){
return (new epitaph.app.t_epitaph$app21455(input_checker21439__$1,owner__$1,civ_view__$1,data__$1,output_schema21437__$1,G__21442__$1,input_schema21438__$1,G__21441__$1,ufv____$1,output_checker21440__$1,validate__16734__auto____$1,meta21456));
});})(validate__16734__auto__,ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
;

}

return (new epitaph.app.t_epitaph$app21455(input_checker21439_21473,owner,epitaph$app$civ_view,data,output_schema21437_21471,G__21442,input_schema21438_21472,G__21441,ufv___21470,output_checker21440_21474,validate__16734__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___21480 = (output_checker21440_21474.cljs$core$IFn$_invoke$arity$1 ? output_checker21440_21474.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker21440_21474.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___21480)){
var error__16736__auto___21481 = temp__4657__auto___21480;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$civ_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21481], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21437_21471,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___21481], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___21470,output_schema21437_21471,input_schema21438_21472,input_checker21439_21473,output_checker21440_21474))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(epitaph.app.civ_view),schema.core.make_fn_schema(output_schema21437_21471,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21438_21472], null)));

epitaph.app.__GT_civ_view = (function epitaph$app$__GT_civ_view(var_args){
var args21467 = [];
var len__7479__auto___21482 = arguments.length;
var i__7480__auto___21483 = (0);
while(true){
if((i__7480__auto___21483 < len__7479__auto___21482)){
args21467.push((arguments[i__7480__auto___21483]));

var G__21484 = (i__7480__auto___21483 + (1));
i__7480__auto___21483 = G__21484;
continue;
} else {
}
break;
}

var G__21469 = args21467.length;
switch (G__21469) {
case 1:
return epitaph.app.__GT_civ_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return epitaph.app.__GT_civ_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21467.length)].join('')));

}
});

epitaph.app.__GT_civ_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21325__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.civ_view,cursor__21325__auto__);
});

epitaph.app.__GT_civ_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21325__auto__,m21436){
return om.core.build.cljs$core$IFn$_invoke$arity$3(epitaph.app.civ_view,cursor__21325__auto__,m21436);
});

epitaph.app.__GT_civ_view.cljs$lang$maxFixedArity = 2;


var ufv___21529 = schema.utils.use_fn_validation;
var output_schema21488_21530 = schema.core.Any;
var input_schema21489_21531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21490_21532 = schema.core.checker(input_schema21489_21531);
var output_checker21491_21533 = schema.core.checker(output_schema21488_21530);
/**
 * Inputs: [data owner]
 */
epitaph.app.info_box = ((function (ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function epitaph$app$info_box(G__21492,G__21493){
var validate__16734__auto__ = ufv___21529.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___21534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21492,G__21493], null);
var temp__4657__auto___21535 = (input_checker21490_21532.cljs$core$IFn$_invoke$arity$1 ? input_checker21490_21532.cljs$core$IFn$_invoke$arity$1(args__16735__auto___21534) : input_checker21490_21532.call(null,args__16735__auto___21534));
if(cljs.core.truth_(temp__4657__auto___21535)){
var error__16736__auto___21536 = temp__4657__auto___21535;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$info_DASH_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21536], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21489_21531,cljs.core.cst$kw$value,args__16735__auto___21534,cljs.core.cst$kw$error,error__16736__auto___21536], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var data = G__21492;
var owner = G__21493;
while(true){
if(typeof epitaph.app.t_epitaph$app21510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
epitaph.app.t_epitaph$app21510 = (function (input_schema21489,G__21493,G__21492,owner,output_schema21488,data,input_checker21490,info_box,output_checker21491,ufv__,validate__16734__auto__,meta21511){
this.input_schema21489 = input_schema21489;
this.G__21493 = G__21493;
this.G__21492 = G__21492;
this.owner = owner;
this.output_schema21488 = output_schema21488;
this.data = data;
this.input_checker21490 = input_checker21490;
this.info_box = info_box;
this.output_checker21491 = output_checker21491;
this.ufv__ = ufv__;
this.validate__16734__auto__ = validate__16734__auto__;
this.meta21511 = meta21511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
epitaph.app.t_epitaph$app21510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function (_21512,meta21511__$1){
var self__ = this;
var _21512__$1 = this;
return (new epitaph.app.t_epitaph$app21510(self__.input_schema21489,self__.G__21493,self__.G__21492,self__.owner,self__.output_schema21488,self__.data,self__.input_checker21490,self__.info_box,self__.output_checker21491,self__.ufv__,self__.validate__16734__auto__,meta21511__$1));
});})(validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
;

epitaph.app.t_epitaph$app21510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function (_21512){
var self__ = this;
var _21512__$1 = this;
return self__.meta21511;
});})(validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
;

epitaph.app.t_epitaph$app21510.prototype.om$core$IDisplayName$ = true;

epitaph.app.t_epitaph$app21510.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function (_){
var self__ = this;
var ___$1 = this;
return "info-box";
});})(validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
;

epitaph.app.t_epitaph$app21510.prototype.om$core$IRender$ = true;

epitaph.app.t_epitaph$app21510.prototype.om$core$IRender$render$arity$1 = ((function (validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "modal-overlay", "onClick": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$show_DASH_info_QMARK_,false);
});})(___$1,validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "info-box", "onClick": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function (p1__21486_SHARP_){
return p1__21486_SHARP_.stopPropagation();
});})(___$1,validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "right"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21513 = ({"className": "icon-cross", "onClick": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$show_DASH_info_QMARK_,false);
});})(___$1,validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
)});
return React.DOM.a(G__21513);
})()],null)))),React.DOM.h2(null,"About"),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Hi! I\u2019m ",(function (){var G__21514 = ({"href": "https://mkremins.github.io"});
var G__21515 = "Max Kreminski";
return React.DOM.a(G__21514,G__21515);
})(),", the creator of Epitaph. If you enjoyed playing Epitaph, you can:"],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["Follow me on ",(function (){var G__21516 = ({"href": "https://twitter.com/maxkreminski"});
var G__21517 = "Twitter";
return React.DOM.a(G__21516,G__21517);
})()," or ",(function (){var G__21518 = ({"href": "https://mkremins.itch.io"});
var G__21519 = "itch.io";
return React.DOM.a(G__21518,G__21519);
})()," for updates on this and other projects"],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Support me by ",(function (){var G__21520 = ({"href": "https://mkremins.itch.io/epitaph"});
var G__21521 = "making a donation";
return React.DOM.a(G__21520,G__21521);
})()," on itch.io"],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Check out the game\u2019s ",(function (){var G__21522 = ({"href": "https://github.com/mkremins/epitaph"});
var G__21523 = "source code";
return React.DOM.a(G__21522,G__21523);
})()],null))))],null)))),(function (){var G__21524 = ({});
var G__21525 = "Thanks for playing!";
return React.DOM.p(G__21524,G__21525);
})()],null))))],null))));
});})(validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
;

epitaph.app.t_epitaph$app21510.getBasis = ((function (validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21489,cljs.core.with_meta(cljs.core.cst$sym$G__21493,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__21492,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$output_DASH_schema21488,cljs.core.cst$sym$data,cljs.core.cst$sym$input_DASH_checker21490,cljs.core.with_meta(cljs.core.cst$sym$info_DASH_box,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21488,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21489], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_checker21491,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__16734__auto__,cljs.core.cst$sym$meta21511], null);
});})(validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
;

epitaph.app.t_epitaph$app21510.cljs$lang$type = true;

epitaph.app.t_epitaph$app21510.cljs$lang$ctorStr = "epitaph.app/t_epitaph$app21510";

epitaph.app.t_epitaph$app21510.cljs$lang$ctorPrWriter = ((function (validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"epitaph.app/t_epitaph$app21510");
});})(validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
;

epitaph.app.__GT_t_epitaph$app21510 = ((function (validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533){
return (function epitaph$app$info_box_$___GT_t_epitaph$app21510(input_schema21489__$1,G__21493__$1,G__21492__$1,owner__$1,output_schema21488__$1,data__$1,input_checker21490__$1,info_box__$1,output_checker21491__$1,ufv____$1,validate__16734__auto____$1,meta21511){
return (new epitaph.app.t_epitaph$app21510(input_schema21489__$1,G__21493__$1,G__21492__$1,owner__$1,output_schema21488__$1,data__$1,input_checker21490__$1,info_box__$1,output_checker21491__$1,ufv____$1,validate__16734__auto____$1,meta21511));
});})(validate__16734__auto__,ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
;

}

return (new epitaph.app.t_epitaph$app21510(input_schema21489_21531,G__21493,G__21492,owner,output_schema21488_21530,data,input_checker21490_21532,epitaph$app$info_box,output_checker21491_21533,ufv___21529,validate__16734__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___21537 = (output_checker21491_21533.cljs$core$IFn$_invoke$arity$1 ? output_checker21491_21533.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker21491_21533.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___21537)){
var error__16736__auto___21538 = temp__4657__auto___21537;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$info_DASH_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21538], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21488_21530,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___21538], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___21529,output_schema21488_21530,input_schema21489_21531,input_checker21490_21532,output_checker21491_21533))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(epitaph.app.info_box),schema.core.make_fn_schema(output_schema21488_21530,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21489_21531], null)));

epitaph.app.__GT_info_box = (function epitaph$app$__GT_info_box(var_args){
var args21526 = [];
var len__7479__auto___21539 = arguments.length;
var i__7480__auto___21540 = (0);
while(true){
if((i__7480__auto___21540 < len__7479__auto___21539)){
args21526.push((arguments[i__7480__auto___21540]));

var G__21541 = (i__7480__auto___21540 + (1));
i__7480__auto___21540 = G__21541;
continue;
} else {
}
break;
}

var G__21528 = args21526.length;
switch (G__21528) {
case 1:
return epitaph.app.__GT_info_box.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return epitaph.app.__GT_info_box.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21526.length)].join('')));

}
});

epitaph.app.__GT_info_box.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21325__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.info_box,cursor__21325__auto__);
});

epitaph.app.__GT_info_box.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21325__auto__,m21487){
return om.core.build.cljs$core$IFn$_invoke$arity$3(epitaph.app.info_box,cursor__21325__auto__,m21487);
});

epitaph.app.__GT_info_box.cljs$lang$maxFixedArity = 2;


var ufv___21564 = schema.utils.use_fn_validation;
var output_schema21545_21565 = schema.core.Any;
var input_schema21546_21566 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21547_21567 = schema.core.checker(input_schema21546_21566);
var output_checker21548_21568 = schema.core.checker(output_schema21545_21565);
/**
 * Inputs: [data owner]
 */
epitaph.app.app = ((function (ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function epitaph$app$app(G__21549,G__21550){
var validate__16734__auto__ = ufv___21564.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___21569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21549,G__21550], null);
var temp__4657__auto___21570 = (input_checker21547_21567.cljs$core$IFn$_invoke$arity$1 ? input_checker21547_21567.cljs$core$IFn$_invoke$arity$1(args__16735__auto___21569) : input_checker21547_21567.call(null,args__16735__auto___21569));
if(cljs.core.truth_(temp__4657__auto___21570)){
var error__16736__auto___21571 = temp__4657__auto___21570;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21571], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21546_21566,cljs.core.cst$kw$value,args__16735__auto___21569,cljs.core.cst$kw$error,error__16736__auto___21571], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var data = G__21549;
var owner = G__21550;
while(true){
if(typeof epitaph.app.t_epitaph$app21556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
epitaph.app.t_epitaph$app21556 = (function (owner,input_schema21546,data,G__21550,output_checker21548,G__21549,input_checker21547,app,ufv__,output_schema21545,validate__16734__auto__,meta21557){
this.owner = owner;
this.input_schema21546 = input_schema21546;
this.data = data;
this.G__21550 = G__21550;
this.output_checker21548 = output_checker21548;
this.G__21549 = G__21549;
this.input_checker21547 = input_checker21547;
this.app = app;
this.ufv__ = ufv__;
this.output_schema21545 = output_schema21545;
this.validate__16734__auto__ = validate__16734__auto__;
this.meta21557 = meta21557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
epitaph.app.t_epitaph$app21556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function (_21558,meta21557__$1){
var self__ = this;
var _21558__$1 = this;
return (new epitaph.app.t_epitaph$app21556(self__.owner,self__.input_schema21546,self__.data,self__.G__21550,self__.output_checker21548,self__.G__21549,self__.input_checker21547,self__.app,self__.ufv__,self__.output_schema21545,self__.validate__16734__auto__,meta21557__$1));
});})(validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
;

epitaph.app.t_epitaph$app21556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function (_21558){
var self__ = this;
var _21558__$1 = this;
return self__.meta21557;
});})(validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
;

epitaph.app.t_epitaph$app21556.prototype.om$core$IDisplayName$ = true;

epitaph.app.t_epitaph$app21556.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
;

epitaph.app.t_epitaph$app21556.prototype.om$core$IRender$ = true;

epitaph.app.t_epitaph$app21556.prototype.om$core$IRender$render$arity$1 = ((function (validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "app"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(cljs.core.cst$kw$show_DASH_info_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.info_box,self__.data):null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "top-bar"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str("Stardate "),cljs.core.str(cljs.core.cst$kw$stardate.cljs$core$IFn$_invoke$arity$1(self__.data))].join('')],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "right"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21559 = ({"className": om_tools.dom.format_opts((cljs.core.truth_(cljs.core.cst$kw$sound_DASH_on_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.data))?"icon-sound-on":"icon-sound-off")), "onClick": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$sound_DASH_on_QMARK_,cljs.core.not);
});})(___$1,validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
)});
return React.DOM.a(G__21559);
})(),(function (){var G__21560 = ({"className": "icon-info", "onClick": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$show_DASH_info_QMARK_,true);
});})(___$1,validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
)});
return React.DOM.a(G__21560);
})()],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "civs"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.cljs$core$IFn$_invoke$arity$3(epitaph.app.civ_view,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function (p1__21543_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21543_SHARP_,cljs.core.cst$kw$stardate,cljs.core.cst$kw$stardate.cljs$core$IFn$_invoke$arity$1(self__.data));
});})(___$1,validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
,cljs.core.cst$kw$civs.cljs$core$IFn$_invoke$arity$1(self__.data))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name], null))],null))))],null))));
});})(validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
;

epitaph.app.t_epitaph$app21556.getBasis = ((function (validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_schema21546,cljs.core.cst$sym$data,cljs.core.with_meta(cljs.core.cst$sym$G__21550,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker21548,cljs.core.with_meta(cljs.core.cst$sym$G__21549,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker21547,cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21545,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21546], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$output_DASH_schema21545,cljs.core.cst$sym$validate__16734__auto__,cljs.core.cst$sym$meta21557], null);
});})(validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
;

epitaph.app.t_epitaph$app21556.cljs$lang$type = true;

epitaph.app.t_epitaph$app21556.cljs$lang$ctorStr = "epitaph.app/t_epitaph$app21556";

epitaph.app.t_epitaph$app21556.cljs$lang$ctorPrWriter = ((function (validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"epitaph.app/t_epitaph$app21556");
});})(validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
;

epitaph.app.__GT_t_epitaph$app21556 = ((function (validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568){
return (function epitaph$app$app_$___GT_t_epitaph$app21556(owner__$1,input_schema21546__$1,data__$1,G__21550__$1,output_checker21548__$1,G__21549__$1,input_checker21547__$1,app__$1,ufv____$1,output_schema21545__$1,validate__16734__auto____$1,meta21557){
return (new epitaph.app.t_epitaph$app21556(owner__$1,input_schema21546__$1,data__$1,G__21550__$1,output_checker21548__$1,G__21549__$1,input_checker21547__$1,app__$1,ufv____$1,output_schema21545__$1,validate__16734__auto____$1,meta21557));
});})(validate__16734__auto__,ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
;

}

return (new epitaph.app.t_epitaph$app21556(owner,input_schema21546_21566,data,G__21550,output_checker21548_21568,G__21549,input_checker21547_21567,epitaph$app$app,ufv___21564,output_schema21545_21565,validate__16734__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___21572 = (output_checker21548_21568.cljs$core$IFn$_invoke$arity$1 ? output_checker21548_21568.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker21548_21568.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___21572)){
var error__16736__auto___21573 = temp__4657__auto___21572;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21573], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21545_21565,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___21573], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___21564,output_schema21545_21565,input_schema21546_21566,input_checker21547_21567,output_checker21548_21568))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(epitaph.app.app),schema.core.make_fn_schema(output_schema21545_21565,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21546_21566], null)));

epitaph.app.__GT_app = (function epitaph$app$__GT_app(var_args){
var args21561 = [];
var len__7479__auto___21574 = arguments.length;
var i__7480__auto___21575 = (0);
while(true){
if((i__7480__auto___21575 < len__7479__auto___21574)){
args21561.push((arguments[i__7480__auto___21575]));

var G__21576 = (i__7480__auto___21575 + (1));
i__7480__auto___21575 = G__21576;
continue;
} else {
}
break;
}

var G__21563 = args21561.length;
switch (G__21563) {
case 1:
return epitaph.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return epitaph.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21561.length)].join('')));

}
});

epitaph.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21325__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(epitaph.app.app,cursor__21325__auto__);
});

epitaph.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21325__auto__,m21544){
return om.core.build.cljs$core$IFn$_invoke$arity$3(epitaph.app.app,cursor__21325__auto__,m21544);
});

epitaph.app.__GT_app.cljs$lang$maxFixedArity = 2;

epitaph.app.init = (function epitaph$app$init(){
cljs.core.enable_console_print_BANG_();

om.core.root(epitaph.app.app,epitaph.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));

epitaph.app.play_notification_sound_BANG_(cljs.core.cst$kw$notification_DASH_pitch.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$civs.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(epitaph.app.app_state) : cljs.core.deref.call(null,epitaph.app.app_state))))));

return setInterval(epitaph.app.tick,(1000));
});
epitaph.app.init();
