// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$proto_DASH_sym,cljs.core.cst$sym$s_SLASH_Schema,cljs.core.cst$kw$proto_DASH_pred,(function (p1__17504__17505__auto__){
if(!((p1__17504__17505__auto__ == null))){
if((false) || (p1__17504__17505__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__17504__17505__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__17504__17505__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__17504__17505__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.OutputSchema,cljs.core.cst$sym$output)], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19116_SHARP_){
return (cljs.core.val(p1__19116_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__19120 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19120,(1),null);
var p = vec__19120;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$missing_DASH_key,cljs.core.cst$kw$key,k,cljs.core.cst$kw$map,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return s1;

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___19128 = schema.utils.use_fn_validation;
var output_schema19123_19129 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema19124_19130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker19125_19131 = schema.core.checker(input_schema19124_19130);
var output_checker19126_19132 = schema.core.checker(output_schema19123_19129);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___19128,output_schema19123_19129,input_schema19124_19130,input_checker19125_19131,output_checker19126_19132){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__19127){
var validate__16734__auto__ = ufv___19128.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___19133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19127], null);
var temp__4657__auto___19134 = (input_checker19125_19131.cljs$core$IFn$_invoke$arity$1 ? input_checker19125_19131.cljs$core$IFn$_invoke$arity$1(args__16735__auto___19133) : input_checker19125_19131.call(null,args__16735__auto___19133));
if(cljs.core.truth_(temp__4657__auto___19134)){
var error__16736__auto___19135 = temp__4657__auto___19134;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19135], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19124_19130,cljs.core.cst$kw$value,args__16735__auto___19133,cljs.core.cst$kw$error,error__16736__auto___19135], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var k = G__19127;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),cljs.core.cst$sym$schema$core_SLASH_optional_DASH_key))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___19136 = (output_checker19126_19132.cljs$core$IFn$_invoke$arity$1 ? output_checker19126_19132.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker19126_19132.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___19136)){
var error__16736__auto___19137 = temp__4657__auto___19136;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19137], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19123_19129,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___19137], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___19128,output_schema19123_19129,input_schema19124_19130,input_checker19125_19131,output_checker19126_19132))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema19123_19129,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19124_19130], null)));
var ufv___19143 = schema.utils.use_fn_validation;
var output_schema19138_19144 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema19139_19145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker19140_19146 = schema.core.checker(input_schema19139_19145);
var output_checker19141_19147 = schema.core.checker(output_schema19138_19144);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___19143,output_schema19138_19144,input_schema19139_19145,input_checker19140_19146,output_checker19141_19147){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__19142){
var validate__16734__auto__ = ufv___19143.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___19148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19142], null);
var temp__4657__auto___19149 = (input_checker19140_19146.cljs$core$IFn$_invoke$arity$1 ? input_checker19140_19146.cljs$core$IFn$_invoke$arity$1(args__16735__auto___19148) : input_checker19140_19146.call(null,args__16735__auto___19148));
if(cljs.core.truth_(temp__4657__auto___19149)){
var error__16736__auto___19150 = temp__4657__auto___19149;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19150], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19139_19145,cljs.core.cst$kw$value,args__16735__auto___19148,cljs.core.cst$kw$error,error__16736__auto___19150], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var s = G__19142;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___19151 = (output_checker19141_19147.cljs$core$IFn$_invoke$arity$1 ? output_checker19141_19147.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker19141_19147.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___19151)){
var error__16736__auto___19152 = temp__4657__auto___19151;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19152], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19138_19144,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___19152], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___19143,output_schema19138_19144,input_schema19139_19145,input_checker19140_19146,output_checker19141_19147))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema19138_19144,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19139_19145], null)));
var ufv___19158 = schema.utils.use_fn_validation;
var output_schema19153_19159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$required),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$optional)], null);
var input_schema19154_19160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null)], null)))], null);
var input_checker19155_19161 = schema.core.checker(input_schema19154_19160);
var output_checker19156_19162 = schema.core.checker(output_schema19153_19159);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___19158,output_schema19153_19159,input_schema19154_19160,input_checker19155_19161,output_checker19156_19162){
return (function plumbing$fnk$schema$split_schema_keys(G__19157){
var validate__16734__auto__ = ufv___19158.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___19163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19157], null);
var temp__4657__auto___19164 = (input_checker19155_19161.cljs$core$IFn$_invoke$arity$1 ? input_checker19155_19161.cljs$core$IFn$_invoke$arity$1(args__16735__auto___19163) : input_checker19155_19161.call(null,args__16735__auto___19163));
if(cljs.core.truth_(temp__4657__auto___19164)){
var error__16736__auto___19165 = temp__4657__auto___19164;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19165], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19154_19160,cljs.core.cst$kw$value,args__16735__auto___19163,cljs.core.cst$kw$error,error__16736__auto___19165], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var s = G__19157;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___19166 = (output_checker19156_19162.cljs$core$IFn$_invoke$arity$1 ? output_checker19156_19162.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker19156_19162.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___19166)){
var error__16736__auto___19167 = temp__4657__auto___19166;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19167], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19153_19159,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___19167], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___19158,output_schema19153_19159,input_schema19154_19160,input_checker19155_19161,output_checker19156_19162))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema19153_19159,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19154_19160], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__7486__auto__ = [];
var len__7479__auto___19179 = arguments.length;
var i__7480__auto___19180 = (0);
while(true){
if((i__7480__auto___19180 < len__7479__auto___19179)){
args__7486__auto__.push((arguments[i__7480__auto___19180]));

var G__19181 = (i__7480__auto___19180 + (1));
i__7480__auto___19180 = G__19181;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__19172){
var vec__19173 = p__19172;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19173,(1),null);
var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__19176 = temp__4655__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq19168){
var G__19169 = cljs.core.first(seq19168);
var seq19168__$1 = cljs.core.next(seq19168);
var G__19170 = cljs.core.first(seq19168__$1);
var seq19168__$2 = cljs.core.next(seq19168__$1);
var G__19171 = cljs.core.first(seq19168__$2);
var seq19168__$3 = cljs.core.next(seq19168__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__19169,G__19170,G__19171,seq19168__$3);
});

var ufv___19189 = schema.utils.use_fn_validation;
var output_schema19183_19190 = plumbing.fnk.schema.InputSchema;
var input_schema19184_19191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker19185_19192 = schema.core.checker(input_schema19184_19191);
var output_checker19186_19193 = schema.core.checker(output_schema19183_19190);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___19189,output_schema19183_19190,input_schema19184_19191,input_checker19185_19192,output_checker19186_19193){
return (function plumbing$fnk$schema$union_input_schemata(G__19187,G__19188){
var validate__16734__auto__ = ufv___19189.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___19194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19187,G__19188], null);
var temp__4657__auto___19195 = (input_checker19185_19192.cljs$core$IFn$_invoke$arity$1 ? input_checker19185_19192.cljs$core$IFn$_invoke$arity$1(args__16735__auto___19194) : input_checker19185_19192.call(null,args__16735__auto___19194));
if(cljs.core.truth_(temp__4657__auto___19195)){
var error__16736__auto___19196 = temp__4657__auto___19195;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19196], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19184_19191,cljs.core.cst$kw$value,args__16735__auto___19194,cljs.core.cst$kw$error,error__16736__auto___19196], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var i1 = G__19187;
var i2 = G__19188;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__16734__auto__,ufv___19189,output_schema19183_19190,input_schema19184_19191,input_checker19185_19192,output_checker19186_19193){
return (function (p1__19182_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(p1__19182_SHARP_))){
return schema.core.explicit_schema_key(p1__19182_SHARP_);
} else {
return cljs.core.cst$kw$extra;
}
});})(validate__16734__auto__,ufv___19189,output_schema19183_19190,input_schema19184_19191,input_checker19185_19192,output_checker19186_19193))
,((function (validate__16734__auto__,ufv___19189,output_schema19183_19190,input_schema19184_19191,input_checker19185_19192,output_checker19186_19193){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_(k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(k1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error("Assert failed: (= k1 k2)"));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__16734__auto__,ufv___19189,output_schema19183_19190,input_schema19184_19191,input_checker19185_19192,output_checker19186_19193))
,((function (validate__16734__auto__,ufv___19189,output_schema19183_19190,input_schema19184_19191,input_checker19185_19192,output_checker19186_19193){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__6392__auto__ = plumbing.fnk.schema.map_schema_QMARK_(s1);
if(cljs.core.truth_(and__6392__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_(s2);
} else {
return and__6392__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__16734__auto__,ufv___19189,output_schema19183_19190,input_schema19184_19191,input_checker19185_19192,output_checker19186_19193))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___19197 = (output_checker19186_19193.cljs$core$IFn$_invoke$arity$1 ? output_checker19186_19193.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker19186_19193.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___19197)){
var error__16736__auto___19198 = temp__4657__auto___19197;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19198], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19183_19190,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___19198], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___19189,output_schema19183_19190,input_schema19184_19191,input_checker19185_19192,output_checker19186_19193))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema19183_19190,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19184_19191], null)));
var ufv___19204 = schema.utils.use_fn_validation;
var output_schema19199_19205 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema19200_19206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$input_DASH_schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker19201_19207 = schema.core.checker(input_schema19200_19206);
var output_checker19202_19208 = schema.core.checker(output_schema19199_19205);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___19204,output_schema19199_19205,input_schema19200_19206,input_checker19201_19207,output_checker19202_19208){
return (function plumbing$fnk$schema$required_toplevel_keys(G__19203){
var validate__16734__auto__ = ufv___19204.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___19209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19203], null);
var temp__4657__auto___19210 = (input_checker19201_19207.cljs$core$IFn$_invoke$arity$1 ? input_checker19201_19207.cljs$core$IFn$_invoke$arity$1(args__16735__auto___19209) : input_checker19201_19207.call(null,args__16735__auto___19209));
if(cljs.core.truth_(temp__4657__auto___19210)){
var error__16736__auto___19211 = temp__4657__auto___19210;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19211], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19200_19206,cljs.core.cst$kw$value,args__16735__auto___19209,cljs.core.cst$kw$error,error__16736__auto___19211], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var input_schema = G__19203;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__16734__auto__,ufv___19204,output_schema19199_19205,input_schema19200_19206,input_checker19201_19207,output_checker19202_19208){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__16734__auto__,ufv___19204,output_schema19199_19205,input_schema19200_19206,input_checker19201_19207,output_checker19202_19208))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___19212 = (output_checker19202_19208.cljs$core$IFn$_invoke$arity$1 ? output_checker19202_19208.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker19202_19208.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___19212)){
var error__16736__auto___19213 = temp__4657__auto___19212;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19213], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19199_19205,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___19213], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___19204,output_schema19199_19205,input_schema19200_19206,input_checker19201_19207,output_checker19202_19208))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema19199_19205,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19200_19206], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__19232(s__19233){
return (new cljs.core.LazySeq(null,(function (){
var s__19233__$1 = s__19233;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19233__$1);
if(temp__4657__auto__){
var s__19233__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19233__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19233__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19235 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19234 = (0);
while(true){
if((i__19234 < size__7183__auto__)){
var vec__19244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19234);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19244,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19244,(1),null);
cljs.core.chunk_append(b__19235,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null));

var G__19250 = (i__19234 + (1));
i__19234 = G__19250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19235),plumbing$fnk$schema$guess_expr_output_schema_$_iter__19232(cljs.core.chunk_rest(s__19233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19235),null);
}
} else {
var vec__19247 = cljs.core.first(s__19233__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19247,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__19232(cljs.core.rest(s__19233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(expr);
})());
} else {
return cljs.core.cst$sym$schema$core_SLASH_Any;
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.make_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.explain(output_schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$map_QMARK_);
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__19277(s__19278){
return (new cljs.core.LazySeq(null,(function (){
var s__19278__$1 = s__19278;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19278__$1);
if(temp__4657__auto__){
var s__19278__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19278__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19278__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19280 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19279 = (0);
while(true){
if((i__19279 < size__7183__auto__)){
var vec__19289 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19279);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__19280,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__19295 = (i__19279 + (1));
i__19279 = G__19295;
continue;
} else {
var G__19296 = (i__19279 + (1));
i__19279 = G__19296;
continue;
}
} else {
var G__19297 = (i__19279 + (1));
i__19279 = G__19297;
continue;
}
} else {
var G__19298 = (i__19279 + (1));
i__19279 = G__19298;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19280),plumbing$fnk$schema$schema_diff_$_iter__19277(cljs.core.chunk_rest(s__19278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19280),null);
}
} else {
var vec__19292 = cljs.core.first(s__19278__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__19277(cljs.core.rest(s__19278__$2)));
} else {
var G__19299 = cljs.core.rest(s__19278__$2);
s__19278__$1 = G__19299;
continue;
}
} else {
var G__19300 = cljs.core.rest(s__19278__$2);
s__19278__$1 = G__19300;
continue;
}
} else {
var G__19301 = cljs.core.rest(s__19278__$2);
s__19278__$1 = G__19301;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$does_DASH_not_DASH_satisfy_DASH_schema,cljs.core.cst$kw$failures,fails], null));
} else {
return null;
}
});
var ufv___19348 = schema.utils.use_fn_validation;
var output_schema19302_19349 = schema.core.Any;
var input_schema19303_19350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null),cljs.core.cst$sym$arg1)], null);
var input_checker19304_19351 = schema.core.checker(input_schema19303_19350);
var output_checker19305_19352 = schema.core.checker(output_schema19302_19349);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___19348,output_schema19302_19349,input_schema19303_19350,input_checker19304_19351,output_checker19305_19352){
return (function plumbing$fnk$schema$compose_schemata(G__19306,G__19307){
var validate__16734__auto__ = true;
if(validate__16734__auto__){
var args__16735__auto___19353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19306,G__19307], null);
var temp__4657__auto___19354 = (input_checker19304_19351.cljs$core$IFn$_invoke$arity$1 ? input_checker19304_19351.cljs$core$IFn$_invoke$arity$1(args__16735__auto___19353) : input_checker19304_19351.call(null,args__16735__auto___19353));
if(cljs.core.truth_(temp__4657__auto___19354)){
var error__16736__auto___19355 = temp__4657__auto___19354;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19355], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19303_19350,cljs.core.cst$kw$value,args__16735__auto___19353,cljs.core.cst$kw$error,error__16736__auto___19355], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var G__19334 = G__19306;
var vec__19336 = G__19334;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19336,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19336,(1),null);
var G__19335 = G__19307;
var vec__19339 = G__19335;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19339,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19339,(1),null);
var G__19334__$1 = G__19334;
var G__19335__$1 = G__19335;
while(true){
var vec__19342 = G__19334__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(1),null);
var vec__19345 = G__19335__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__16734__auto__){
var temp__4657__auto___19356 = (output_checker19305_19352.cljs$core$IFn$_invoke$arity$1 ? output_checker19305_19352.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker19305_19352.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___19356)){
var error__16736__auto___19357 = temp__4657__auto___19356;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19357], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19302_19349,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___19357], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___19348,output_schema19302_19349,input_schema19303_19350,input_checker19304_19351,output_checker19305_19352))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema19302_19349,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19303_19350], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___19520 = schema.utils.use_fn_validation;
var output_schema19358_19521 = schema.core.Any;
var input_schema19359_19522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(cljs.core.cst$sym$ks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null)], null)))], null);
var input_checker19360_19523 = schema.core.checker(input_schema19359_19522);
var output_checker19361_19524 = schema.core.checker(output_schema19358_19521);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524){
return (function plumbing$fnk$schema$split_schema(G__19362,G__19363){
var validate__16734__auto__ = ufv___19520.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___19525 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19362,G__19363], null);
var temp__4657__auto___19526 = (input_checker19360_19523.cljs$core$IFn$_invoke$arity$1 ? input_checker19360_19523.cljs$core$IFn$_invoke$arity$1(args__16735__auto___19525) : input_checker19360_19523.call(null,args__16735__auto___19525));
if(cljs.core.truth_(temp__4657__auto___19526)){
var error__16736__auto___19527 = temp__4657__auto___19526;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19527], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19359_19522,cljs.core.cst$kw$value,args__16735__auto___19525,cljs.core.cst$kw$error,error__16736__auto___19527], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var s = G__19362;
var ks = G__19363;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__7184__auto__ = ((function (ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524){
return (function plumbing$fnk$schema$split_schema_$_iter__19442(s__19443){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524){
return (function (){
var s__19443__$1 = s__19443;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19443__$1);
if(temp__4657__auto__){
var s__19443__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19443__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19443__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19445 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19444 = (0);
while(true){
if((i__19444 < size__7183__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19444);
cljs.core.chunk_append(b__19445,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (i__19444,in_QMARK_,c__7182__auto__,size__7183__auto__,b__19445,s__19443__$2,temp__4657__auto__,ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524){
return (function plumbing$fnk$schema$split_schema_$_iter__19442_$_iter__19484(s__19485){
return (new cljs.core.LazySeq(null,((function (i__19444,in_QMARK_,c__7182__auto__,size__7183__auto__,b__19445,s__19443__$2,temp__4657__auto__,ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524){
return (function (){
var s__19485__$1 = s__19485;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__19485__$1);
if(temp__4657__auto____$1){
var s__19485__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19485__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__19485__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__19487 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__19486 = (0);
while(true){
if((i__19486 < size__7183__auto____$1)){
var vec__19496 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__19486);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19496,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__19487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19528 = (i__19486 + (1));
i__19486 = G__19528;
continue;
} else {
var G__19529 = (i__19486 + (1));
i__19486 = G__19529;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19487),plumbing$fnk$schema$split_schema_$_iter__19442_$_iter__19484(cljs.core.chunk_rest(s__19485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19487),null);
}
} else {
var vec__19499 = cljs.core.first(s__19485__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19499,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__19442_$_iter__19484(cljs.core.rest(s__19485__$2)));
} else {
var G__19530 = cljs.core.rest(s__19485__$2);
s__19485__$1 = G__19530;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__19444,in_QMARK_,c__7182__auto__,size__7183__auto__,b__19445,s__19443__$2,temp__4657__auto__,ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524))
,null,null));
});})(i__19444,in_QMARK_,c__7182__auto__,size__7183__auto__,b__19445,s__19443__$2,temp__4657__auto__,ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524))
;
return iter__7184__auto__(s);
})()));

var G__19531 = (i__19444 + (1));
i__19444 = G__19531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19445),plumbing$fnk$schema$split_schema_$_iter__19442(cljs.core.chunk_rest(s__19443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19445),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__19443__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (in_QMARK_,s__19443__$2,temp__4657__auto__,ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524){
return (function plumbing$fnk$schema$split_schema_$_iter__19442_$_iter__19502(s__19503){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__19443__$2,temp__4657__auto__,ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524){
return (function (){
var s__19503__$1 = s__19503;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__19503__$1);
if(temp__4657__auto____$1){
var s__19503__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19503__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__19503__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__19505 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__19504 = (0);
while(true){
if((i__19504 < size__7183__auto__)){
var vec__19514 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__19504);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19514,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19514,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__19505,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19532 = (i__19504 + (1));
i__19504 = G__19532;
continue;
} else {
var G__19533 = (i__19504 + (1));
i__19504 = G__19533;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19505),plumbing$fnk$schema$split_schema_$_iter__19442_$_iter__19502(cljs.core.chunk_rest(s__19503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19505),null);
}
} else {
var vec__19517 = cljs.core.first(s__19503__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19517,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__19442_$_iter__19502(cljs.core.rest(s__19503__$2)));
} else {
var G__19534 = cljs.core.rest(s__19503__$2);
s__19503__$1 = G__19534;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__19443__$2,temp__4657__auto__,ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524))
,null,null));
});})(in_QMARK_,s__19443__$2,temp__4657__auto__,ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524))
;
return iter__7184__auto__(s);
})()),plumbing$fnk$schema$split_schema_$_iter__19442(cljs.core.rest(s__19443__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524))
,null,null));
});})(ks__$1,validate__16734__auto__,ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524))
;
return iter__7184__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___19535 = (output_checker19361_19524.cljs$core$IFn$_invoke$arity$1 ? output_checker19361_19524.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker19361_19524.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___19535)){
var error__16736__auto___19536 = temp__4657__auto___19535;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19536], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19358_19521,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___19536], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___19520,output_schema19358_19521,input_schema19359_19522,input_checker19360_19523,output_checker19361_19524))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema19358_19521,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19359_19522], null)));
var ufv___19607 = schema.utils.use_fn_validation;
var output_schema19537_19608 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema19538_19609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),cljs.core.cst$sym$arg1)], null);
var input_checker19539_19610 = schema.core.checker(input_schema19538_19609);
var output_checker19540_19611 = schema.core.checker(output_schema19537_19608);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___19607,output_schema19537_19608,input_schema19538_19609,input_checker19539_19610,output_checker19540_19611){
return (function plumbing$fnk$schema$sequence_schemata(G__19541,G__19542){
var validate__16734__auto__ = ufv___19607.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___19612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19541,G__19542], null);
var temp__4657__auto___19613 = (input_checker19539_19610.cljs$core$IFn$_invoke$arity$1 ? input_checker19539_19610.cljs$core$IFn$_invoke$arity$1(args__16735__auto___19612) : input_checker19539_19610.call(null,args__16735__auto___19612));
if(cljs.core.truth_(temp__4657__auto___19613)){
var error__16736__auto___19614 = temp__4657__auto___19613;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19614], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema19538_19609,cljs.core.cst$kw$value,args__16735__auto___19612,cljs.core.cst$kw$error,error__16736__auto___19614], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var G__19584 = G__19541;
var vec__19586 = G__19584;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19586,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19586,(1),null);
var G__19585 = G__19542;
var vec__19589 = G__19585;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19589,(0),null);
var vec__19592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19589,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19592,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19592,(1),null);
var G__19584__$1 = G__19584;
var G__19585__$1 = G__19585;
while(true){
var vec__19595 = G__19584__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19595,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19595,(1),null);
var vec__19598 = G__19585__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19598,(0),null);
var vec__19601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19598,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19601,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19601,(1),null);
if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__19604 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19604,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19604,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___19615 = (output_checker19540_19611.cljs$core$IFn$_invoke$arity$1 ? output_checker19540_19611.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker19540_19611.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___19615)){
var error__16736__auto___19616 = temp__4657__auto___19615;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___19616], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema19537_19608,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___19616], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___19607,output_schema19537_19608,input_schema19538_19609,input_checker19539_19610,output_checker19540_19611))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema19537_19608,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19538_19609], null)));
