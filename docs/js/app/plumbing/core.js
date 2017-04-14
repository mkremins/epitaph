// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = cljs.core.cst$kw$plumbing$core_SLASH_missing;
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args20041 = [];
var len__7479__auto___20056 = arguments.length;
var i__7480__auto___20057 = (0);
while(true){
if((i__7480__auto___20057 < len__7479__auto___20056)){
args20041.push((arguments[i__7480__auto___20057]));

var G__20058 = (i__7480__auto___20057 + (1));
i__7480__auto___20057 = G__20058;
continue;
} else {
}
break;
}

var G__20049 = args20041.length;
switch (G__20049) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args20041.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7498__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20050) : f.call(null,G__20050));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20052 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20051,G__20052) : f.call(null,G__20051,G__20052));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20054 = x1;
var G__20055 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20053,G__20054,G__20055) : f.call(null,G__20053,G__20054,G__20055));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq20042){
var G__20043 = cljs.core.first(seq20042);
var seq20042__$1 = cljs.core.next(seq20042);
var G__20044 = cljs.core.first(seq20042__$1);
var seq20042__$2 = cljs.core.next(seq20042__$1);
var G__20045 = cljs.core.first(seq20042__$2);
var seq20042__$3 = cljs.core.next(seq20042__$2);
var G__20046 = cljs.core.first(seq20042__$3);
var seq20042__$4 = cljs.core.next(seq20042__$3);
var G__20047 = cljs.core.first(seq20042__$4);
var seq20042__$5 = cljs.core.next(seq20042__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__20043,G__20044,G__20045,G__20046,G__20047,seq20042__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);

/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__19779__auto__ = (function (){var G__20077 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20077) : cljs.core.atom.call(null,G__20077));
})();
var seq__20078_20092 = cljs.core.seq(m);
var chunk__20079_20093 = null;
var count__20080_20094 = (0);
var i__20081_20095 = (0);
while(true){
if((i__20081_20095 < count__20080_20094)){
var vec__20082_20096 = chunk__20079_20093.cljs$core$IIndexed$_nth$arity$2(null,i__20081_20095);
var k_20097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082_20096,(0),null);
var v_20098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082_20096,(1),null);
var m20076_20099 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20085_20100 = m_atom__19779__auto__;
var G__20086_20101 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20076_20099,k_20097,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20098) : f.call(null,v_20098)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20085_20100,G__20086_20101) : cljs.core.reset_BANG_.call(null,G__20085_20100,G__20086_20101));

var G__20102 = seq__20078_20092;
var G__20103 = chunk__20079_20093;
var G__20104 = count__20080_20094;
var G__20105 = (i__20081_20095 + (1));
seq__20078_20092 = G__20102;
chunk__20079_20093 = G__20103;
count__20080_20094 = G__20104;
i__20081_20095 = G__20105;
continue;
} else {
var temp__4657__auto___20106 = cljs.core.seq(seq__20078_20092);
if(temp__4657__auto___20106){
var seq__20078_20107__$1 = temp__4657__auto___20106;
if(cljs.core.chunked_seq_QMARK_(seq__20078_20107__$1)){
var c__7215__auto___20108 = cljs.core.chunk_first(seq__20078_20107__$1);
var G__20109 = cljs.core.chunk_rest(seq__20078_20107__$1);
var G__20110 = c__7215__auto___20108;
var G__20111 = cljs.core.count(c__7215__auto___20108);
var G__20112 = (0);
seq__20078_20092 = G__20109;
chunk__20079_20093 = G__20110;
count__20080_20094 = G__20111;
i__20081_20095 = G__20112;
continue;
} else {
var vec__20087_20113 = cljs.core.first(seq__20078_20107__$1);
var k_20114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087_20113,(0),null);
var v_20115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087_20113,(1),null);
var m20076_20116 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20090_20117 = m_atom__19779__auto__;
var G__20091_20118 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20076_20116,k_20114,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20115) : f.call(null,v_20115)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20090_20117,G__20091_20118) : cljs.core.reset_BANG_.call(null,G__20090_20117,G__20091_20118));

var G__20119 = cljs.core.next(seq__20078_20107__$1);
var G__20120 = null;
var G__20121 = (0);
var G__20122 = (0);
seq__20078_20092 = G__20119;
chunk__20079_20093 = G__20120;
count__20080_20094 = G__20121;
i__20081_20095 = G__20122;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__)));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__19779__auto__ = (function (){var G__20140 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20140) : cljs.core.atom.call(null,G__20140));
})();
var seq__20141_20155 = cljs.core.seq(m);
var chunk__20142_20156 = null;
var count__20143_20157 = (0);
var i__20144_20158 = (0);
while(true){
if((i__20144_20158 < count__20143_20157)){
var vec__20145_20159 = chunk__20142_20156.cljs$core$IIndexed$_nth$arity$2(null,i__20144_20158);
var k_20160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20145_20159,(0),null);
var v_20161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20145_20159,(1),null);
var m20139_20162 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20148_20163 = m_atom__19779__auto__;
var G__20149_20164 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20139_20162,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20160) : f.call(null,k_20160)),v_20161);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20148_20163,G__20149_20164) : cljs.core.reset_BANG_.call(null,G__20148_20163,G__20149_20164));

var G__20165 = seq__20141_20155;
var G__20166 = chunk__20142_20156;
var G__20167 = count__20143_20157;
var G__20168 = (i__20144_20158 + (1));
seq__20141_20155 = G__20165;
chunk__20142_20156 = G__20166;
count__20143_20157 = G__20167;
i__20144_20158 = G__20168;
continue;
} else {
var temp__4657__auto___20169 = cljs.core.seq(seq__20141_20155);
if(temp__4657__auto___20169){
var seq__20141_20170__$1 = temp__4657__auto___20169;
if(cljs.core.chunked_seq_QMARK_(seq__20141_20170__$1)){
var c__7215__auto___20171 = cljs.core.chunk_first(seq__20141_20170__$1);
var G__20172 = cljs.core.chunk_rest(seq__20141_20170__$1);
var G__20173 = c__7215__auto___20171;
var G__20174 = cljs.core.count(c__7215__auto___20171);
var G__20175 = (0);
seq__20141_20155 = G__20172;
chunk__20142_20156 = G__20173;
count__20143_20157 = G__20174;
i__20144_20158 = G__20175;
continue;
} else {
var vec__20150_20176 = cljs.core.first(seq__20141_20170__$1);
var k_20177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20150_20176,(0),null);
var v_20178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20150_20176,(1),null);
var m20139_20179 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20153_20180 = m_atom__19779__auto__;
var G__20154_20181 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20139_20179,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20177) : f.call(null,k_20177)),v_20178);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20153_20180,G__20154_20181) : cljs.core.reset_BANG_.call(null,G__20153_20180,G__20154_20181));

var G__20182 = cljs.core.next(seq__20141_20170__$1);
var G__20183 = null;
var G__20184 = (0);
var G__20185 = (0);
seq__20141_20155 = G__20182;
chunk__20142_20156 = G__20183;
count__20143_20157 = G__20184;
i__20144_20158 = G__20185;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__)));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__19779__auto__ = (function (){var G__20197 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20197) : cljs.core.atom.call(null,G__20197));
})();
var seq__20198_20206 = cljs.core.seq(ks);
var chunk__20199_20207 = null;
var count__20200_20208 = (0);
var i__20201_20209 = (0);
while(true){
if((i__20201_20209 < count__20200_20208)){
var k_20210 = chunk__20199_20207.cljs$core$IIndexed$_nth$arity$2(null,i__20201_20209);
var m20196_20211 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20202_20212 = m_atom__19779__auto__;
var G__20203_20213 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20196_20211,k_20210,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20210) : f.call(null,k_20210)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20202_20212,G__20203_20213) : cljs.core.reset_BANG_.call(null,G__20202_20212,G__20203_20213));

var G__20214 = seq__20198_20206;
var G__20215 = chunk__20199_20207;
var G__20216 = count__20200_20208;
var G__20217 = (i__20201_20209 + (1));
seq__20198_20206 = G__20214;
chunk__20199_20207 = G__20215;
count__20200_20208 = G__20216;
i__20201_20209 = G__20217;
continue;
} else {
var temp__4657__auto___20218 = cljs.core.seq(seq__20198_20206);
if(temp__4657__auto___20218){
var seq__20198_20219__$1 = temp__4657__auto___20218;
if(cljs.core.chunked_seq_QMARK_(seq__20198_20219__$1)){
var c__7215__auto___20220 = cljs.core.chunk_first(seq__20198_20219__$1);
var G__20221 = cljs.core.chunk_rest(seq__20198_20219__$1);
var G__20222 = c__7215__auto___20220;
var G__20223 = cljs.core.count(c__7215__auto___20220);
var G__20224 = (0);
seq__20198_20206 = G__20221;
chunk__20199_20207 = G__20222;
count__20200_20208 = G__20223;
i__20201_20209 = G__20224;
continue;
} else {
var k_20225 = cljs.core.first(seq__20198_20219__$1);
var m20196_20226 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20204_20227 = m_atom__19779__auto__;
var G__20205_20228 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20196_20226,k_20225,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_20225) : f.call(null,k_20225)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20204_20227,G__20205_20228) : cljs.core.reset_BANG_.call(null,G__20204_20227,G__20205_20228));

var G__20229 = cljs.core.next(seq__20198_20219__$1);
var G__20230 = null;
var G__20231 = (0);
var G__20232 = (0);
seq__20198_20206 = G__20229;
chunk__20199_20207 = G__20230;
count__20200_20208 = G__20231;
i__20201_20209 = G__20232;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__)));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__19779__auto__ = (function (){var G__20244 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20244) : cljs.core.atom.call(null,G__20244));
})();
var seq__20245_20253 = cljs.core.seq(vs);
var chunk__20246_20254 = null;
var count__20247_20255 = (0);
var i__20248_20256 = (0);
while(true){
if((i__20248_20256 < count__20247_20255)){
var v_20257 = chunk__20246_20254.cljs$core$IIndexed$_nth$arity$2(null,i__20248_20256);
var m20243_20258 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20249_20259 = m_atom__19779__auto__;
var G__20250_20260 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20243_20258,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20257) : f.call(null,v_20257)),v_20257);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20249_20259,G__20250_20260) : cljs.core.reset_BANG_.call(null,G__20249_20259,G__20250_20260));

var G__20261 = seq__20245_20253;
var G__20262 = chunk__20246_20254;
var G__20263 = count__20247_20255;
var G__20264 = (i__20248_20256 + (1));
seq__20245_20253 = G__20261;
chunk__20246_20254 = G__20262;
count__20247_20255 = G__20263;
i__20248_20256 = G__20264;
continue;
} else {
var temp__4657__auto___20265 = cljs.core.seq(seq__20245_20253);
if(temp__4657__auto___20265){
var seq__20245_20266__$1 = temp__4657__auto___20265;
if(cljs.core.chunked_seq_QMARK_(seq__20245_20266__$1)){
var c__7215__auto___20267 = cljs.core.chunk_first(seq__20245_20266__$1);
var G__20268 = cljs.core.chunk_rest(seq__20245_20266__$1);
var G__20269 = c__7215__auto___20267;
var G__20270 = cljs.core.count(c__7215__auto___20267);
var G__20271 = (0);
seq__20245_20253 = G__20268;
chunk__20246_20254 = G__20269;
count__20247_20255 = G__20270;
i__20248_20256 = G__20271;
continue;
} else {
var v_20272 = cljs.core.first(seq__20245_20266__$1);
var m20243_20273 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20251_20274 = m_atom__19779__auto__;
var G__20252_20275 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20243_20273,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_20272) : f.call(null,v_20272)),v_20272);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20251_20274,G__20252_20275) : cljs.core.reset_BANG_.call(null,G__20251_20274,G__20252_20275));

var G__20276 = cljs.core.next(seq__20245_20266__$1);
var G__20277 = null;
var G__20278 = (0);
var G__20279 = (0);
seq__20245_20253 = G__20276;
chunk__20246_20254 = G__20277;
count__20247_20255 = G__20278;
i__20248_20256 = G__20279;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__)));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__20280){
var vec__20288 = p__20280;
var seq__20289 = cljs.core.seq(vec__20288);
var first__20290 = cljs.core.first(seq__20289);
var seq__20289__$1 = cljs.core.next(seq__20289);
var k = first__20290;
var ks = seq__20289__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__6392__auto__ = ks;
if(and__6392__auto__){
return plumbing$core$dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__19779__auto__ = (function (){var G__20308 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20308) : cljs.core.atom.call(null,G__20308));
})();
var seq__20309_20323 = cljs.core.seq(x);
var chunk__20310_20324 = null;
var count__20311_20325 = (0);
var i__20312_20326 = (0);
while(true){
if((i__20312_20326 < count__20311_20325)){
var vec__20313_20327 = chunk__20310_20324.cljs$core$IIndexed$_nth$arity$2(null,i__20312_20326);
var k_20328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20313_20327,(0),null);
var v_20329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20313_20327,(1),null);
var m20307_20330 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20316_20331 = m_atom__19779__auto__;
var G__20317_20332 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20307_20330,((typeof k_20328 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_20328):k_20328),plumbing$core$keywordize_map(v_20329));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20316_20331,G__20317_20332) : cljs.core.reset_BANG_.call(null,G__20316_20331,G__20317_20332));

var G__20333 = seq__20309_20323;
var G__20334 = chunk__20310_20324;
var G__20335 = count__20311_20325;
var G__20336 = (i__20312_20326 + (1));
seq__20309_20323 = G__20333;
chunk__20310_20324 = G__20334;
count__20311_20325 = G__20335;
i__20312_20326 = G__20336;
continue;
} else {
var temp__4657__auto___20337 = cljs.core.seq(seq__20309_20323);
if(temp__4657__auto___20337){
var seq__20309_20338__$1 = temp__4657__auto___20337;
if(cljs.core.chunked_seq_QMARK_(seq__20309_20338__$1)){
var c__7215__auto___20339 = cljs.core.chunk_first(seq__20309_20338__$1);
var G__20340 = cljs.core.chunk_rest(seq__20309_20338__$1);
var G__20341 = c__7215__auto___20339;
var G__20342 = cljs.core.count(c__7215__auto___20339);
var G__20343 = (0);
seq__20309_20323 = G__20340;
chunk__20310_20324 = G__20341;
count__20311_20325 = G__20342;
i__20312_20326 = G__20343;
continue;
} else {
var vec__20318_20344 = cljs.core.first(seq__20309_20338__$1);
var k_20345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318_20344,(0),null);
var v_20346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318_20344,(1),null);
var m20307_20347 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__));
var G__20321_20348 = m_atom__19779__auto__;
var G__20322_20349 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m20307_20347,((typeof k_20345 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_20345):k_20345),plumbing$core$keywordize_map(v_20346));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20321_20348,G__20322_20349) : cljs.core.reset_BANG_.call(null,G__20321_20348,G__20322_20349));

var G__20350 = cljs.core.next(seq__20309_20338__$1);
var G__20351 = null;
var G__20352 = (0);
var G__20353 = (0);
seq__20309_20323 = G__20350;
chunk__20310_20324 = G__20351;
count__20311_20325 = G__20352;
i__20312_20326 = G__20353;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__19779__auto__) : cljs.core.deref.call(null,m_atom__19779__auto__)));
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4655__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__19855__auto__ = temp__4655__auto__;
return cljs.core.val(pair__19855__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__20354 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__20355 = cljs.core.next(ks);
m = G__20354;
ks = G__20355;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20376 = arguments.length;
var i__7480__auto___20377 = (0);
while(true){
if((i__7480__auto___20377 < len__7479__auto___20376)){
args__7486__auto__.push((arguments[i__7480__auto___20377]));

var G__20378 = (i__7480__auto___20377 + (1));
i__7480__auto___20377 = G__20378;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__6404__auto__ = m;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__7184__auto__ = (function plumbing$core$iter__20358(s__20359){
return (new cljs.core.LazySeq(null,(function (){
var s__20359__$1 = s__20359;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20359__$1);
if(temp__4657__auto__){
var s__20359__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20359__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20359__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20361 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20360 = (0);
while(true){
if((i__20360 < size__7183__auto__)){
var vec__20370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20360);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20370,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__20361,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__20379 = (i__20360 + (1));
i__20360 = G__20379;
continue;
} else {
var G__20380 = (i__20360 + (1));
i__20360 = G__20380;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20361),plumbing$core$iter__20358(cljs.core.chunk_rest(s__20359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20361),null);
}
} else {
var vec__20373 = cljs.core.first(s__20359__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20373,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20373,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__20358(cljs.core.rest(s__20359__$2)));
} else {
var G__20381 = cljs.core.rest(s__20359__$2);
s__20359__$1 = G__20381;
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
return iter__7184__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq20356){
var G__20357 = cljs.core.first(seq20356);
var seq20356__$1 = cljs.core.next(seq20356);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__20357,seq20356__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20386 = arguments.length;
var i__7480__auto___20387 = (0);
while(true){
if((i__7480__auto___20387 < len__7479__auto___20386)){
args__7486__auto__.push((arguments[i__7480__auto___20387]));

var G__20388 = (i__7480__auto___20387 + (1));
i__7480__auto___20387 = G__20388;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq20382){
var G__20383 = cljs.core.first(seq20382);
var seq20382__$1 = cljs.core.next(seq20382);
var G__20384 = cljs.core.first(seq20382__$1);
var seq20382__$2 = cljs.core.next(seq20382__$1);
var G__20385 = cljs.core.first(seq20382__$2);
var seq20382__$3 = cljs.core.next(seq20382__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__20383,G__20384,G__20385,seq20382__$3);
});

/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(x) : map_fn.call(null,x))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.next(s);
if(temp__4657__auto__){
var n = temp__4657__auto__;
return plumbing$core$aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args20390 = [];
var len__7479__auto___20393 = arguments.length;
var i__7480__auto___20394 = (0);
while(true){
if((i__7480__auto___20394 < len__7479__auto___20393)){
args20390.push((arguments[i__7480__auto___20394]));

var G__20395 = (i__7480__auto___20394 + (1));
i__7480__auto___20394 = G__20395;
continue;
} else {
}
break;
}

var G__20392 = args20390.length;
switch (G__20392) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20390.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;

/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4657__auto__ = cljs.core.seq(xs);
if(temp__4657__auto__){
var xs__$1 = temp__4657__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = (function (){var G__20404 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20404) : cljs.core.atom.call(null,G__20404));
})();
var iter__7184__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__20405(s__20406){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__20406__$1 = s__20406;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20406__$1);
if(temp__4657__auto__){
var s__20406__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20406__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20406__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20408 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20407 = (0);
while(true){
if((i__20407 < size__7183__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20407);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
cljs.core.chunk_append(b__20408,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__20411 = (i__20407 + (1));
i__20407 = G__20411;
continue;
} else {
var G__20412 = (i__20407 + (1));
i__20407 = G__20412;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20408),plumbing$core$distinct_by_$_iter__20405(cljs.core.chunk_rest(s__20406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20408),null);
}
} else {
var x = cljs.core.first(s__20406__$2);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__20405(cljs.core.rest(s__20406__$2)));
} else {
var G__20413 = cljs.core.rest(s__20406__$2);
s__20406__$1 = G__20413;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__7184__auto__(xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20416 = arguments.length;
var i__7480__auto___20417 = (0);
while(true){
if((i__7480__auto___20417 < len__7479__auto___20416)){
args__7486__auto__.push((arguments[i__7480__auto___20417]));

var G__20418 = (i__7480__auto___20417 + (1));
i__7480__auto___20417 = G__20418;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq20414){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20414));
});

/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args20419 = [];
var len__7479__auto___20425 = arguments.length;
var i__7480__auto___20426 = (0);
while(true){
if((i__7480__auto___20426 < len__7479__auto___20425)){
args20419.push((arguments[i__7480__auto___20426]));

var G__20427 = (i__7480__auto___20426 + (1));
i__7480__auto___20426 = G__20427;
continue;
} else {
}
break;
}

var G__20424 = args20419.length;
switch (G__20424) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args20419.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__20429 = plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__20430 = cljs.core.first(xs);
var G__20431 = cljs.core.next(xs);
coll = G__20429;
x = G__20430;
xs = G__20431;
continue;
} else {
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq20420){
var G__20421 = cljs.core.first(seq20420);
var seq20420__$1 = cljs.core.next(seq20420);
var G__20422 = cljs.core.first(seq20420__$1);
var seq20420__$2 = cljs.core.next(seq20420__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__20421,G__20422,seq20420__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args20433 = [];
var len__7479__auto___20439 = arguments.length;
var i__7480__auto___20440 = (0);
while(true){
if((i__7480__auto___20440 < len__7479__auto___20439)){
args20433.push((arguments[i__7480__auto___20440]));

var G__20441 = (i__7480__auto___20440 + (1));
i__7480__auto___20440 = G__20441;
continue;
} else {
}
break;
}

var G__20438 = args20433.length;
switch (G__20438) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args20433.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var new_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__20432_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__20432_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq20434){
var G__20435 = cljs.core.first(seq20434);
var seq20434__$1 = cljs.core.next(seq20434);
var G__20436 = cljs.core.first(seq20434__$1);
var seq20434__$2 = cljs.core.next(seq20434__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20435,G__20436,seq20434__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args20443 = [];
var len__7479__auto___20449 = arguments.length;
var i__7480__auto___20450 = (0);
while(true){
if((i__7480__auto___20450 < len__7479__auto___20449)){
args20443.push((arguments[i__7480__auto___20450]));

var G__20451 = (i__7480__auto___20450 + (1));
i__7480__auto___20450 = G__20451;
continue;
} else {
}
break;
}

var G__20448 = args20443.length;
switch (G__20448) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args20443.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq20444){
var G__20445 = cljs.core.first(seq20444);
var seq20444__$1 = cljs.core.next(seq20444);
var G__20446 = cljs.core.first(seq20444__$1);
var seq20444__$2 = cljs.core.next(seq20444__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__20445,G__20446,seq20444__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

