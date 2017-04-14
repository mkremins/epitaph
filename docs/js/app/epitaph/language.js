// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('epitaph.language');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('epitaph.rand');
epitaph.language.all_consonants = new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","b","c","c","d","d","g","g","h","h","k","k","m","m","n","n","l","p","p","q","s","t","t","v","v","x","y","z"], null);
epitaph.language.all_vowels = new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","A","E","I","O","U"], null);
epitaph.language.all_sibilants = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f","s",""], null);
epitaph.language.all_liquids = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["j","l","r","w","",""], null);
epitaph.language.all_separators = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","'","-"], null);
epitaph.language.all_vowel_orthographies = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, ["A","a","E","e","I","i","O","o","U","u"], null),new cljs.core.PersistentArrayMap(null, 5, ["A","a","E","e","I","i","O","o","U","u"], null),new cljs.core.PersistentArrayMap(null, 5, ["A","a","E","e","I","i","O","o","U","u"], null),new cljs.core.PersistentArrayMap(null, 5, ["A","a","E","e","I","i","O","o","U","u"], null),new cljs.core.PersistentArrayMap(null, 5, ["A","a","E","e","I","i","O","o","U","u"], null),new cljs.core.PersistentArrayMap(null, 5, ["A","\u00E1","E","\u00E9","I","\u00ED","O","\u00F3","U","\u00FA"], null),new cljs.core.PersistentArrayMap(null, 5, ["A","\u00E4","E","\u00EB","I","\u00EF","O","\u00F6","U","\u00FC"], null),new cljs.core.PersistentArrayMap(null, 5, ["A","\u00E2","E","\u00EA","I","\u00EE","O","\u00F4","U","\u00FB"], null),new cljs.core.PersistentArrayMap(null, 5, ["A","aa","E","ee","I","ii","O","oo","U","uu"], null),new cljs.core.PersistentArrayMap(null, 5, ["A","\u00E5","E","e","I","i","O","\u00F8","U","u"], null)], null);
epitaph.language.all_syllable_structures = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$l,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$l,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$l,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$l,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$l,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$l,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s,cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s,cljs.core.cst$kw$cs,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s,cljs.core.cst$kw$cs,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s,cljs.core.cst$kw$cs,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s,cljs.core.cst$kw$l,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s,cljs.core.cst$kw$l,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s,cljs.core.cst$kw$l,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s,cljs.core.cst$kw$l,cljs.core.cst$kw$v,cljs.core.cst$kw$ce], null)], true);
epitaph.language.gen_word_STAR_ = (function epitaph$language$gen_word_STAR_(language){
var map__20477 = language;
var map__20477__$1 = ((((!((map__20477 == null)))?((((map__20477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20477):map__20477);
var start_consonants = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$start_DASH_consonants);
var end_consonants = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$end_DASH_consonants);
var vowels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$vowels);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$separator);
var liquids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$liquids);
var sibilants = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$sibilants);
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__20477,map__20477__$1,start_consonants,end_consonants,vowels,separator,liquids,sibilants){
return (function (part){
var G__20479 = (((part instanceof cljs.core.Keyword))?part.fqn:null);
switch (G__20479) {
case "cs":
return epitaph.rand.biased_rand_nth(start_consonants);

break;
case "ce":
return epitaph.rand.biased_rand_nth(end_consonants);

break;
case "l":
return epitaph.rand.biased_rand_nth(liquids);

break;
case "s":
return epitaph.rand.biased_rand_nth(sibilants);

break;
case "v":
return epitaph.rand.biased_rand_nth(vowels);

break;
case "b":
return separator;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(part)].join('')));

}
});})(map__20477,map__20477__$1,start_consonants,end_consonants,vowels,separator,liquids,sibilants))
,epitaph.rand.biased_rand_nth(cljs.core.cst$kw$word_DASH_structures.cljs$core$IFn$_invoke$arity$1(language)))),/['-]$/,""),/(.)\1/,((function (map__20477,map__20477__$1,start_consonants,end_consonants,vowels,separator,liquids,sibilants){
return (function (p1__20473_SHARP_){
return [cljs.core.str(cljs.core.first((p1__20473_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20473_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__20473_SHARP_.call(null,(1)))))].join('');
});})(map__20477,map__20477__$1,start_consonants,end_consonants,vowels,separator,liquids,sibilants))
),/A|E|I|O|U/,cljs.core.cst$kw$vowel_DASH_orthography.cljs$core$IFn$_invoke$arity$1(language)),/-/,"\u2011");
});
epitaph.language.gen_word = epitaph.rand.restricted((function (p1__20481_SHARP_){
return (cljs.core.count(p1__20481_SHARP_) > (1));
}),epitaph.language.gen_word_STAR_);
epitaph.language.gen_word_structure = (function epitaph$language$gen_word_structure(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20482_SHARP_){
var G__20484 = p1__20482_SHARP_;
if((cljs.core.rand_int((5)) === (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20484,cljs.core.cst$kw$b);
} else {
return G__20484;
}
}),epitaph.rand.pick_n(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(2),(2),(2),(3),(4)], null)),epitaph.language.all_syllable_structures)));
});
epitaph.language.gen_language = (function epitaph$language$gen_language(){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$start_DASH_consonants,epitaph.rand.pick_n(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3),(3),(4)], null)),epitaph.language.all_consonants),cljs.core.cst$kw$end_DASH_consonants,epitaph.rand.pick_n(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3),(3),(4)], null)),epitaph.language.all_consonants),cljs.core.cst$kw$vowels,epitaph.rand.pick_n(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3),(3),(4)], null)),epitaph.language.all_vowels),cljs.core.cst$kw$separator,cljs.core.rand_nth(epitaph.language.all_separators),cljs.core.cst$kw$liquids,epitaph.rand.pick_n(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(2),(2),(3)], null)),epitaph.language.all_liquids),cljs.core.cst$kw$sibilants,epitaph.rand.pick_n(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(2)], null)),epitaph.language.all_sibilants),cljs.core.cst$kw$word_DASH_structures,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((3),epitaph.language.gen_word_structure),cljs.core.cst$kw$vowel_DASH_orthography,cljs.core.rand_nth(epitaph.language.all_vowel_orthographies)], null);
});
