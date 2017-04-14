// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('epitaph.rand');
goog.require('cljs.core');
/**
 * Like `clojure.core/rand-nth`, but biased towards earlier items in `xs`.
 */
epitaph.rand.biased_rand_nth = (function epitaph$rand$biased_rand_nth(xs){
var r = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var r__$1 = (r * r);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,(function (){var G__20458 = (r__$1 * cljs.core.count(xs));
return Math.floor(G__20458);
})());
});
epitaph.rand.pick_n = (function epitaph$rand$pick_n(n,xs){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(xs));
});
epitaph.rand.pick_n_with_replacement = (function epitaph$rand$pick_n_with_replacement(n,xs){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(xs);
}));
});
/**
 * Repeatedly runs `gen`, a generator fn, until the output passes `pred`, then
 *   returns the passing output. Extra `args`, if provided, are passed to `gen`.
 */
epitaph.rand.restrict = (function epitaph$rand$restrict(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20462 = arguments.length;
var i__7480__auto___20463 = (0);
while(true){
if((i__7480__auto___20463 < len__7479__auto___20462)){
args__7486__auto__.push((arguments[i__7480__auto___20463]));

var G__20464 = (i__7480__auto___20463 + (1));
i__7480__auto___20463 = G__20464;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return epitaph.rand.restrict.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});

epitaph.rand.restrict.cljs$core$IFn$_invoke$arity$variadic = (function (pred,gen,args){
var x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gen,args);
while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
var G__20465 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gen,args);
x = G__20465;
continue;
}
break;
}
});

epitaph.rand.restrict.cljs$lang$maxFixedArity = (2);

epitaph.rand.restrict.cljs$lang$applyTo = (function (seq20459){
var G__20460 = cljs.core.first(seq20459);
var seq20459__$1 = cljs.core.next(seq20459);
var G__20461 = cljs.core.first(seq20459__$1);
var seq20459__$2 = cljs.core.next(seq20459__$1);
return epitaph.rand.restrict.cljs$core$IFn$_invoke$arity$variadic(G__20460,G__20461,seq20459__$2);
});

/**
 * Returns a generator fn that behaves like `gen`, but will only output values
 *   that pass `pred`. Uses `restrict` internally.
 */
epitaph.rand.restricted = (function epitaph$rand$restricted(pred,gen){
return (function() { 
var G__20466__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(epitaph.rand.restrict,pred,gen,args);
};
var G__20466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20467__i = 0, G__20467__a = new Array(arguments.length -  0);
while (G__20467__i < G__20467__a.length) {G__20467__a[G__20467__i] = arguments[G__20467__i + 0]; ++G__20467__i;}
  args = new cljs.core.IndexedSeq(G__20467__a,0);
} 
return G__20466__delegate.call(this,args);};
G__20466.cljs$lang$maxFixedArity = 0;
G__20466.cljs$lang$applyTo = (function (arglist__20468){
var args = cljs.core.seq(arglist__20468);
return G__20466__delegate(args);
});
G__20466.cljs$core$IFn$_invoke$arity$variadic = G__20466__delegate;
return G__20466;
})()
;
});
