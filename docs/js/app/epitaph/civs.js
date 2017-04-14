// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('epitaph.civs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('epitaph.events');
goog.require('epitaph.language');
goog.require('epitaph.rand');
goog.require('epitaph.techs');
epitaph.civs.replace_all = (function epitaph$civs$replace_all(s,replacements){
while(true){
var temp__4655__auto__ = cljs.core.first(replacements);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__20490 = temp__4655__auto__;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20490,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20490,(1),null);
var val__$1 = ((cljs.core.vector_QMARK_(val))?cljs.core.rand_nth(val):((cljs.core.fn_QMARK_(val))?(val.cljs$core$IFn$_invoke$arity$0 ? val.cljs$core$IFn$_invoke$arity$0() : val.call(null)):val
));
var G__20493 = s.split(key).join(val__$1);
var G__20494 = cljs.core.rest(replacements);
s = G__20493;
replacements = G__20494;
continue;
} else {
return s;
}
break;
}
});
epitaph.civs.recursively_replace_all = (function epitaph$civs$recursively_replace_all(s,replacements){
while(true){
var s_SINGLEQUOTE_ = epitaph.civs.replace_all(s,replacements);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,s)){
return s;
} else {
var G__20495 = s_SINGLEQUOTE_;
var G__20496 = replacements;
s = G__20495;
replacements = G__20496;
continue;
}
break;
}
});
epitaph.civs.make_description = (function epitaph$civs$make_description(civ,event,stardate){
return epitaph.civs.recursively_replace_all(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$desc.cljs$core$IFn$_invoke$arity$1(event)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$vocab.cljs$core$IFn$_invoke$arity$1(civ),cljs.core.cst$kw$vocab.cljs$core$IFn$_invoke$arity$1(event)], 0)),"$STARDATE",stardate));
});
epitaph.civs.has_prereqs_QMARK_ = (function epitaph$civs$has_prereqs_QMARK_(civ,event){
return cljs.core.every_QMARK_((function (p1__20497_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$knowledge.cljs$core$IFn$_invoke$arity$1(civ),p1__20497_SHARP_);
}),cljs.core.cst$kw$prereqs.cljs$core$IFn$_invoke$arity$1(event));
});
epitaph.civs.process_event = (function epitaph$civs$process_event(civ,event,stardate){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(civ,cljs.core.cst$kw$knowledge,cljs.core.conj,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(event)),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,epitaph.civs.make_description(civ,event,stardate)], null)),cljs.core.cst$kw$event_DASH_chances,(function (p1__20498_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([p1__20498_SHARP_,cljs.core.cst$kw$event_DASH_chances.cljs$core$IFn$_invoke$arity$1(event)], 0));
})),cljs.core.cst$kw$set_DASH_vars.cljs$core$IFn$_invoke$arity$1(event)], 0));
});
epitaph.civs.invite = (function epitaph$civs$invite(civ,stardate){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(civ,cljs.core.cst$kw$state,cljs.core.cst$kw$joined),cljs.core.cst$kw$event_DASH_chances),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,epitaph.civs.make_description(civ,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["In $STARDATE, the $CIV joined us."], null)], null),stardate)], null));
});
epitaph.civs.all_traits = cljs.core.PersistentVector.fromArray(["adaptable","adventurous","aloof","analytical","arrogant","artistic","avaricious","anxious","belligerent","boisterous","bold","brusque","clannish","creative","curious","daring","delicate","devout","diligent","diminutive","duplicitous","elegant","enduring","enterprising","enthusiastic","fearful","flamboyant","gentle","harmless","honest","honorable","humble","industrious","intelligent","kind","loquacious","meticulous","moral","nimble","noble","nomadic","obsequious","obsessive","outgoing","passionate","passive","playful","polite","possessive","proud","regretful","reliable","resilient","sedentary","serious","solitary","stoic","studious","sturdy","subtle","taciturn","tenacious","thrifty","timid","vengeful","warlike","wise"], true);
epitaph.civs.gen_civ = (function epitaph$civs$gen_civ(stardate){
var language = epitaph.language.gen_language();
var gen_caps_word = ((function (language){
return (function (){
return clojure.string.capitalize((epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1 ? epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1(language) : epitaph.language.gen_word.call(null,language)));
});})(language))
;
var gen_caps_name = ((function (language,gen_caps_word){
return (function (){
if((cljs.core.rand_int((5)) === (0))){
return [cljs.core.str(gen_caps_word()),cljs.core.str(" "),cljs.core.str(gen_caps_word())].join('');
} else {
return gen_caps_word();
}
});})(language,gen_caps_word))
;
var species = gen_caps_word();
var vec__20502 = epitaph.rand.pick_n((3),epitaph.civs.all_traits);
var trait1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(0),null);
var trait2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(1),null);
var trait3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(2),null);
var system = gen_caps_name();
var planet = gen_caps_name();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$notification_DASH_pitch,cljs.core.cst$kw$knowledge,cljs.core.cst$kw$name,cljs.core.cst$kw$events,cljs.core.cst$kw$state,cljs.core.cst$kw$vocab,cljs.core.cst$kw$language,cljs.core.cst$kw$tech_DASH_chance,cljs.core.cst$kw$event_DASH_chances],[cljs.core.rand_nth(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5"], null)),cljs.core.PersistentHashSet.EMPTY,species,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$desc,[cljs.core.str("We first became aware of the "),cljs.core.str(species),cljs.core.str(" in "),cljs.core.str(stardate),cljs.core.str(". "),cljs.core.str("They "),cljs.core.str(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inhabit","reside on"], null))),cljs.core.str(" the "),cljs.core.str(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, ["abundant","arid","barren","chilly","cold","dry","dusty","frigid","humid","lush","misty","overgrown","rainy","rocky","sparse","steamy","stormy","temperate","torrid","verdant","warm","wet","windy"], null))),cljs.core.str(" planet "),cljs.core.str(planet),cljs.core.str(" in the "),cljs.core.str(system),cljs.core.str(" system. "),cljs.core.str("They are "),cljs.core.str(trait1),cljs.core.str(", "),cljs.core.str(trait2),cljs.core.str(", and "),cljs.core.str(trait3),cljs.core.str(". ")].join('')], null)], null),cljs.core.cst$kw$normal,cljs.core.PersistentHashMap.fromArrays(["$CROP","$FISH","$SYSTEM","$CIV","$CONQUEROR","$PLANET","$PET","$BEAST","$CITY","$RELIGION"],[(epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1 ? epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1(language) : epitaph.language.gen_word.call(null,language)),(epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1 ? epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1(language) : epitaph.language.gen_word.call(null,language)),system,species,[cljs.core.str(gen_caps_name()),cljs.core.str((((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5))?[cljs.core.str(" the "),cljs.core.str(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Conqueror","Great","Magnificent","Merciful","Ruthless"], null)))].join(''):null))].join(''),planet,(epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1 ? epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1(language) : epitaph.language.gen_word.call(null,language)),(epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1 ? epitaph.language.gen_word.cljs$core$IFn$_invoke$arity$1(language) : epitaph.language.gen_word.call(null,language)),gen_caps_name(),gen_caps_word()]),language,((1) / (90)),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$asteroid,((1) / (1000)),cljs.core.cst$kw$volcano,((1) / (1000)),cljs.core.cst$kw$food_DASH_illness,((1) / (1000)),cljs.core.cst$kw$gamma_DASH_ray_DASH_burst,((1) / (3000)),cljs.core.cst$kw$pets,((1) / (1000))], null)]);
});
epitaph.civs.possible_event_chances = (function epitaph$civs$possible_event_chances(civ){
return cljs.core.shuffle(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20508_SHARP_){
return epitaph.civs.has_prereqs_QMARK_(civ,cljs.core.first(p1__20508_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20507_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$knowledge.cljs$core$IFn$_invoke$arity$1(civ),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__20507_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20506_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20510 = cljs.core.first(p1__20506_SHARP_);
return (epitaph.events.event_info.cljs$core$IFn$_invoke$arity$1 ? epitaph.events.event_info.cljs$core$IFn$_invoke$arity$1(G__20510) : epitaph.events.event_info.call(null,G__20510));
})(),cljs.core.second(p1__20506_SHARP_)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20505_SHARP_){
return (cljs.core.second(p1__20505_SHARP_) > (0));
}),cljs.core.cst$kw$event_DASH_chances.cljs$core$IFn$_invoke$arity$1(civ))))));
});
epitaph.civs.possible_techs = (function epitaph$civs$possible_techs(civ){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(civ),cljs.core.cst$kw$normal)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20512_SHARP_){
return epitaph.civs.has_prereqs_QMARK_(civ,p1__20512_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20511_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$knowledge.cljs$core$IFn$_invoke$arity$1(civ),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__20511_SHARP_));
}),epitaph.techs.all_techs));
} else {
return null;
}
});
epitaph.civs.maybe_select_event = (function epitaph$civs$maybe_select_event(civ){
var event_chances = epitaph.civs.possible_event_chances(civ);
while(true){
var temp__4655__auto__ = cljs.core.first(event_chances);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__20516 = temp__4655__auto__;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20516,(0),null);
var chance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20516,(1),null);
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < chance)){
return event;
} else {
var G__20519 = cljs.core.rest(event_chances);
event_chances = G__20519;
continue;
}
} else {
var techs = epitaph.civs.possible_techs(civ);
if((cljs.core.seq(techs)) && ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < cljs.core.cst$kw$tech_DASH_chance.cljs$core$IFn$_invoke$arity$1(civ)))){
return cljs.core.rand_nth(techs);
} else {
return null;
}
}
break;
}
});
epitaph.civs.civ_tick = (function epitaph$civs$civ_tick(civ,stardate){
var G__20522 = (((cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(civ) instanceof cljs.core.Keyword))?cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(civ).fqn:null);
switch (G__20522) {
case "extinct":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(civ,cljs.core.cst$kw$cycles_DASH_since_DASH_extinction,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

break;
case "normal":
var event = epitaph.civs.maybe_select_event(civ);
var G__20523 = civ;
if(cljs.core.truth_(event)){
return epitaph.civs.process_event(G__20523,event,stardate);
} else {
return G__20523;
}

break;
default:
return civ;

}
});
