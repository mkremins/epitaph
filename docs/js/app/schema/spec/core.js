// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.core');
goog.require('cljs.core');
goog.require('schema.utils');

/**
 * Specs are a common language for Schemas to express their structure.
 * These two use-cases aren't priveledged, just the two that are considered core
 * to being a Spec.
 * @interface
 */
schema.spec.core.CoreSpec = function(){};

/**
 * List all subschemas
 */
schema.spec.core.subschemas = (function schema$spec$core$subschemas(this$){
if((!((this$ == null))) && (!((this$.schema$spec$core$CoreSpec$subschemas$arity$1 == null)))){
return this$.schema$spec$core$CoreSpec$subschemas$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (schema.spec.core.subschemas[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (schema.spec.core.subschemas["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoreSpec.subschemas",this$);
}
}
}
});

/**
 * Create a function that takes [data], and either returns a walked version of data
 *   (by default, usually just data), or a utils/ErrorContainer containing value that looks
 *   like the 'bad' parts of data with ValidationErrors at the leaves describing the failures.
 * 
 *   params are: subschema-checker, return-walked?, and cache.
 * 
 *   params is a map specifying:
 *    - subschema-checker - a function for checking subschemas
 *    - returned-walked? - a boolean specifying whether to return a walked version of the data
 *      (otherwise, nil is returned which increases performance)
 *    - cache - a map structure from schema to checker, which speeds up checker creation
 *      when the same subschema appears multiple times, and also facilitates handling
 *      recursive schemas.
 */
schema.spec.core.checker = (function schema$spec$core$checker(this$,params){
if((!((this$ == null))) && (!((this$.schema$spec$core$CoreSpec$checker$arity$2 == null)))){
return this$.schema$spec$core$CoreSpec$checker$arity$2(this$,params);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (schema.spec.core.checker[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__7068__auto__.call(null,this$,params));
} else {
var m__7068__auto____$1 = (schema.spec.core.checker["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__7068__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("CoreSpec.checker",this$);
}
}
}
});

schema.spec.core._PLUS_no_precondition_PLUS_ = (function schema$spec$core$_PLUS_no_precondition_PLUS_(_){
return null;
});
/**
 * Helper for making preconditions.
 * Takes a schema, predicate p, and error function err-f.
 * If the datum passes the predicate, returns nil.
 * Otherwise, returns a validation error with description (err-f datum-description),
 * where datum-description is a (short) printable standin for the datum.
 */
schema.spec.core.precondition = (function schema$spec$core$precondition(s,p,err_f){
return (function (x){
var temp__4657__auto__ = (function (){try{if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x)))){
return null;
} else {
return cljs.core.cst$sym$not;
}
}catch (e16796){if((e16796 instanceof Object)){
var e_SHARP_ = e16796;
return cljs.core.cst$sym$throws_QMARK_;
} else {
throw e16796;

}
}})();
if(cljs.core.truth_(temp__4657__auto__)){
var reason = temp__4657__auto__;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay(((function (reason,temp__4657__auto__){
return (function (){
var G__16797 = schema.utils.value_name(x);
return (err_f.cljs$core$IFn$_invoke$arity$1 ? err_f.cljs$core$IFn$_invoke$arity$1(G__16797) : err_f.call(null,G__16797));
});})(reason,temp__4657__auto__))
,null)),reason));
} else {
return null;
}
});
});
/**
 * A helper to start a checking run, by setting the appropriate params.
 * For examples, see schema.core/checker or schema.coerce/coercer.
 */
schema.spec.core.run_checker = (function schema$spec$core$run_checker(f,return_walked_QMARK_,s){
var G__16801 = s;
var G__16802 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$subschema_DASH_checker,f,cljs.core.cst$kw$return_DASH_walked_QMARK_,return_walked_QMARK_,cljs.core.cst$kw$cache,(function (){var G__16803 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16803) : cljs.core.atom.call(null,G__16803));
})()], null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16801,G__16802) : f.call(null,G__16801,G__16802));
});
schema.spec.core.with_cache = (function schema$spec$core$with_cache(cache,cache_key,wrap_recursive_delay,result_fn){
var temp__4655__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache) : cljs.core.deref.call(null,cache)).call(null,cache_key);
if(cljs.core.truth_(temp__4655__auto__)){
var w = temp__4655__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema$spec$core_SLASH_in_DASH_progress,w)){
var G__16805 = (new cljs.core.Delay(((function (w,temp__4655__auto__){
return (function (){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache) : cljs.core.deref.call(null,cache)).call(null,cache_key);
});})(w,temp__4655__auto__))
,null));
return (wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1 ? wrap_recursive_delay.cljs$core$IFn$_invoke$arity$1(G__16805) : wrap_recursive_delay.call(null,G__16805));
} else {
return w;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,cljs.core.cst$kw$schema$spec$core_SLASH_in_DASH_progress);

var res = (result_fn.cljs$core$IFn$_invoke$arity$0 ? result_fn.cljs$core$IFn$_invoke$arity$0() : result_fn.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,cache_key,res);

return res;
}
});
/**
 * Should be called recursively on each subschema in the 'checker' method of a spec.
 * Handles caching and error wrapping behavior.
 */
schema.spec.core.sub_checker = (function schema$spec$core$sub_checker(p__16806,p__16807){
var map__16812 = p__16806;
var map__16812__$1 = ((((!((map__16812 == null)))?((((map__16812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16812):map__16812);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16812__$1,cljs.core.cst$kw$schema);
var error_wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16812__$1,cljs.core.cst$kw$error_DASH_wrap);
var map__16813 = p__16807;
var map__16813__$1 = ((((!((map__16813 == null)))?((((map__16813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16813):map__16813);
var params = map__16813__$1;
var subschema_checker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,cljs.core.cst$kw$subschema_DASH_checker);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,cljs.core.cst$kw$cache);
return schema.spec.core.with_cache(cache,schema__$1,((function (map__16812,map__16812__$1,schema__$1,error_wrap,map__16813,map__16813__$1,params,subschema_checker,cache){
return (function (d){
return ((function (map__16812,map__16812__$1,schema__$1,error_wrap,map__16813,map__16813__$1,params,subschema_checker,cache){
return (function (x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(d) : cljs.core.deref.call(null,d)).call(null,x);
});
;})(map__16812,map__16812__$1,schema__$1,error_wrap,map__16813,map__16813__$1,params,subschema_checker,cache))
});})(map__16812,map__16812__$1,schema__$1,error_wrap,map__16813,map__16813__$1,params,subschema_checker,cache))
,((function (map__16812,map__16812__$1,schema__$1,error_wrap,map__16813,map__16813__$1,params,subschema_checker,cache){
return (function (){
var sub = (subschema_checker.cljs$core$IFn$_invoke$arity$2 ? subschema_checker.cljs$core$IFn$_invoke$arity$2(schema__$1,params) : subschema_checker.call(null,schema__$1,params));
if(cljs.core.truth_(error_wrap)){
return ((function (sub,map__16812,map__16812__$1,schema__$1,error_wrap,map__16813,map__16813__$1,params,subschema_checker,cache){
return (function (x){
var res = (sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(x) : sub.call(null,x));
var temp__4655__auto__ = schema.utils.error_val(res);
if(cljs.core.truth_(temp__4655__auto__)){
var e = temp__4655__auto__;
return schema.utils.error((error_wrap.cljs$core$IFn$_invoke$arity$1 ? error_wrap.cljs$core$IFn$_invoke$arity$1(res) : error_wrap.call(null,res)));
} else {
return res;
}
});
;})(sub,map__16812,map__16812__$1,schema__$1,error_wrap,map__16813,map__16813__$1,params,subschema_checker,cache))
} else {
return sub;
}
});})(map__16812,map__16812__$1,schema__$1,error_wrap,map__16813,map__16813__$1,params,subschema_checker,cache))
);
});
