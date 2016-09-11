(ns epitaph.events)

(def event-info
  {;; initial extinction events

   :asteroid
   {:name :asteroid
    :set-vars {:state :extinct}
    :desc ["In $STARDATE, $PLANET collided with a $ADJ $OBJ, resulting in a "
           "mass extinction event which wiped out all traces of $CIV "
           "civilization."]
    :vocab {"$ADJ" ["wandering" "wayward"]
            "$OBJ" ["asteroid" "comet" "planetoid"]}}

   :volcano
   {:name :volcano
    :set-vars {:state :extinct}
    :desc ["In $STARDATE, a massive volcanic eruption filled the skies of "
           "$PLANET with ash and blotted out the sun. The ensuing volcanic "
           "winter threw the planet's delicate ecosystem wildly out of "
           "balance, bringing about the end of $CIV civilization."]}

   :gamma-ray-burst
   {:name :gamma-ray-burst
    :set-vars {:state :extinct}
    :desc ["In $STARDATE, a gamma-ray burst – caused by the explosion of a "
           "star roughly $DIST $UNIT from the $SYSTEM system – showered "
           "$PLANET in high energy electromagnetic radiation. The planet's "
           "atmospheric ozone layer shielded planetary life from immediate "
           "harm, but was dramatically depleted in the process. Stripped of "
           "its protection against ordinary UV radiation, the planet's ecosystem "
           "gradually collapsed, ushering in the end of $CIV civilization."]
    :vocab {"$DIST" #(+ 900 (* 100 (rand-int 80)))
            "$UNIT" ["light-years" "parsecs"]}}

   :food-illness
   {:name :food-illness
    :set-vars {:state :extinct}
    :desc ["In $STARDATE, a food-borne illness began to spread rapidly through "
           "the $CIV population. Less than 10% of the $CIV survived the plague, "
           "causing a population bottleneck which eventually brought about the "
           "total collapse of $CIV civilization."]}

   ;; food-related extinction events

   :overhunting
   {:name :overhunting
    :set-vars {:state :extinct}
    :desc ["Due to the extreme effectiveness of stone tools in hunting $BEAST, "
           "the $CIV managed to hunt the $BEAST species to extinction. Being "
           "reliant on the $BEAST for food, the $CIV then suffered a famine "
           "which brought about the end of $CIV civilization."]}

   :overfishing
   {:name :overfishing
    :set-vars {:state :extinct}
    :desc ["As the $CIV population increased, they began to overfish the waters "
           "of $PLANET. By $STARDATE, they had driven the $FISH species to "
           "extinction. The ensuing famine brought about a total collapse of "
           "$CIV civilization."]}

   :crop-failure
   {:name :crop-failure
    :set-vars {:state :extinct}
    :desc ["In $STARDATE, a combination of $ADJ weather and pestilence caused "
           "a near-total failure of the $CROP crop. Being overreliant on $CROP "
           "cultivation for food, the $CIV then suffered a massive famine which "
           "brought about the end of $CIV civilization."]
    :vocab {"$ADJ" ["inclement" "poor"]}}

   ;; second-tier tech-related extinction events

   :forest-fire
   {:name :forest-fire
    :set-vars {:state :extinct}
    :desc ["In $STARDATE, a cooking fire started by one of the $CIV jumped to "
           "the forest, where it quickly blazed out of control. When the fire "
           "finally burned itself out, the forest had been almost completely "
           "destroyed, disrupting the ecosystem of $PLANET enough to cause a "
           "total collapse of $CIV civilization."]}

   :war-over-metal
   {:name :war-over-metal
    :set-vars {:state :extinct}
    :desc ["In $STARDATE, due to the growing importance of metal-forged weapons "
           "in warfare and the scarcity of metal deposits on $PLANET, a massive "
           "and bloody conflict erupted over control of these deposits. Over 80% "
           "of the $CIV population was wiped out in the fighting, a loss from "
           "which $CIV civilization was ultimately unable to recover."]}

   :city-plague
   {:name :city-plague
    :set-vars {:state :extinct}
    :desc ["In $STARDATE, a virulent new plague spread swiftly through the "
           "largest and densest centers of $CIV population. Living in such "
           "close proximity, the city-dwelling $CIV were almost entirely wiped "
           "out by the disease, a loss from which $CIV civilization was "
           "ultimately unable to recover."]}

   :sea-plague
   {:name :sea-plague
    :set-vars {:state :extinct}
    :desc ["In $STARDATE, a number of $CIV $PEOPLE returned from across the sea "
           "bearing symptoms of an unfamiliar illness. Having no immunity to "
           "the germs that caused the disease, the majority of the $CIV "
           "population was wiped out by the ensuing plague."]
    :vocab {"$PEOPLE" ["explorers" "traders"]}}

   ;; early flavor events

   :pets
   {:name :pets
    :desc ["The $CIV have domesticated a species of small $ADJ $ANIMALS. The pets "
           "assist their $CIV owners with $TASK in exchange for food and shelter."]
    :vocab {"$ADJ" ["flying" "feathered" "fluffy" "furry" "scaly" "winged"]
            "$ANIMALS" ["animals" "creatures" "predators"]
            "$TASK" ["hunting" "navigation" "pest control"]}}

   :large-city
   {:name :large-city
    :event-chances {:city-fortress (/ +3 1000)
                    :city-holy (/ +3 1000)
                    :city-trade (/ +3 1000)}
    :desc ["In $STARDATE, the $CIV population reached 25 million individuals. "
           "Many of these $LIVE within permanent cities, the largest of which "
           "is known as $CITY and has a population of $POP,000."]
    :vocab {"$LIVE" ["dwell" "live" "reside"]
            "$POP" #(+ 15 (rand-int 80))}}

   :conqueror
   {:name :conqueror
    :event-chances {:city-fortress (/ +10 1000)}
    :desc ["In $STARDATE, many of the $ADJ $CIV $CLANS were united under a "
           "single banner by an individual known as $CONQUEROR. $NEW_EMPIRE "
           "rules over approximately $PERCENT% of the entire $CIV population. "
           "$AS_USUAL, it is governed by $GOV."]
    :vocab {"$ADJ" ["disparate" "fractious" "warring"]
            "$CLANS" ["city-states" "clans" "kingdoms" "tribes" "villages"]
            "$NEW_EMPIRE" ["The resulting empire has its capital at $CITY and"
                           "The city of $CITY $WAS_MADE the capital of the resulting empire, which"]
            "$WAS_MADE" ["has become" "has been declared" "has been made" "has been named"]
            "$PERCENT" #(+ 5 (rand-int 40))
            "$AS_USUAL" ["Like many other $CIV states" "Unusually for the $CIV"]
            "$GOV" ["a council of $LEADERS" "a hereditary monarch"
                    "an elected tyrant" "direct democratic vote"]
            "$LEADERS" ["aristocrats" "clerics" "elders" "oligarchs" "war leaders"]}}

   :religion
   {:name :religion
    :event-chances {:city-holy (/ +10 1000)}
    :desc ["In $STARDATE, $A_NEW religion known as $RELIGION $BECAME the "
           "official religion of the largest $CIV state. Adherents of $RELIGION "
           "wear $ADJ1 $THINGS to mark themselves as believers."]
    :vocab {"$A_NEW" ["a rapidly growing" "an emerging"]
            "$BECAME" ["became" "was declared"]
            "$ADJ1" ["$DISTINCTIVE $ADJ2" "$PLAIN $ADJ3" "$ADJ4"]
            "$THINGS" ["caps" "cloaks" "clothes" "clothing" "coats" "fabrics"
                       "hats" "hoods" "masks" "robes" "shawls"]
            "$DISTINCTIVE" ["distinctive" "striking"]
            "$ADJ2" ["beaded" "black" "blue" "brown" "dark" "embroidered" "gray"
                     "green" "patterned" "purple" "scarlet" "red" "white"]
            "$PLAIN" ["plain" "simple"]
            "$ADJ3" ["black" "blue" "brown" "dark" "gray" "green" "purple"
                     "scarlet" "red" "white"]
            "$ADJ4" ["brightly colored"
                     "$ADJ5 colorful"
                     "$ADJ6concealing"
                     "elaborately decorated"
                     "intricately patterned"]
            "$ADJ5" ["dazzlingly" "distinctive"]
            "$ADJ6" ["distinctive " ""]}}

   ;; city flavor events (mutually exclusive)

   :city-fortress
   {:name :city-fortress
    :prereqs #{:large-city}
    :event-chances {:city-holy -1
                    :city-trade -1}
    :desc ["Following a long series of failed attempts to $ATTACK the city, "
           "$CITY has become renowned among the $CIV as an impenetrable "
           "fortress. The image of its distinctive $WALLS has been widely "
           "adopted in $CIV $ART as a symbol of $SAFETY."]
    :vocab {"$ATTACK" ["attack" "besiege" "capture" "conquer"]
            "$WALLS" ["gate" "ramparts" "towers" "walls"]
            "$ART" ["art" "culture" "literature" "oratory"]
            "$SAFETY" ["resilience" "safety" "strength"]}}

   :city-holy
   {:name :city-holy
    :prereqs #{:large-city}
    :event-chances {:city-fortress -1
                    :city-trade -1}
    :desc ["Due to its role as the birthplace of several major $CIV religions, "
           "including the especially prominent $RELIGION faith, the city of "
           "$CITY is regarded by many of the $CIV as a holy site. $DETAIL"]
    :vocab {"$DETAIL" [(str "The $POPE_OF $CITY is considered the de facto "
                            "leader of the $RELIGION church as a whole, and "
                            "pilgrimages to the city are commonplace.")
                       (str "Leaders from all around the world $VISIT the "
                            "city $TO_CURRY favor with the leaders of their "
                            "people's religion of choice.")]
            "$POPE_OF" ["archbishop of" "high priest of"
                        "highest-ranking $RELIGION $OFFICIAL in"]
            "$OFFICIAL" ["bishop" "official" "priest"]
            "$VISIT" ["journey to" "make trips to" "travel to" "visit"]
            "$TO_CURRY" ["in hopes of currying" "in order to curry"]}}

   :city-trade
   {:name :city-trade
    :prereqs #{:large-city}
    :event-chances {:city-fortress -1
                    :city-holy -1}
    :desc ["The city of $CITY has become renowed among the $CIV as a center of "
           "commerce and trade. In particular, the $ADJ $STUFF_MADE_THERE_IS "
           "highly sought after by traders around the world."]
    :vocab {"$ADJ" ["delicate" "durable" "elegant" "fine" "high-quality"
                    "intricately decorated" "sturdy"]
            "$STUFF_MADE_THERE_IS"
            #(let [stuff (rand-nth
                           ["armor" "ceramics" "clothing" "fabrics" "glassware"
                            "jewelry" "pottery" "textiles" "weapons"])]
               (str stuff " produced there "
                    (if (= (last stuff) "s") "are" "is")))}}

    ;; late-game events

    :bioterrorism
    {:name :bioterrorism
     :set-vars {:state :extinct}
     :desc ["In $STARDATE, a genetically engineered virus designed as a "
            "highly lethal weapon of biological warfare was deliberately "
            "distributed in several major centers of $CIV population by an "
            "agent or agents of unknown affiliation. $CIV medical science "
            "proved insufficient to combat the ensuing plague, which wiped "
            "out all but a few isolated pockets of $CIV population and "
            "brought an end to the era of $CIV technological civilization."]}

    :world-government
    {:name :world-government
     :event-chances {:nuclear-weapons -1
                     :nuclear-strike -1
                     :nuclear-war -1}
     :desc ["In $STARDATE, following decades of negotiation, the various "
            "sovereign $CIV nations came to an agreement concerning the "
            "establishment of a unified planet-wide government for all of the "
            "$CIV."]}

    :nuclear-weapons
    {:name :nuclear-weapons
     :prereqs #{:flight :nuclear-physics :rocketry}
     :event-chances {:nuclear-strike (/ +1 90)
                     :nuclear-war (/ +1 90)
                     :skynet (/ +1 90)}
     :desc ["In $STARDATE, the $CIV successfully detonated their first "
            "prototype nuclear weapon. It remains unclear whether the $CIV "
            "scientists who worked on the bomb understand the sheer "
            "destructive potential of the weapon they have created."]}

    :nuclear-strike
    {:name :nuclear-strike
     :event-chances {:nuclear-war (/ +1 90)}
     :desc ["In $STARDATE, a single nuclear weapon was deployed in an attack "
            "on a $SIZE $CIV city. The incident did not escalate into "
            "a full-scale nuclear war, but the city was almost completely "
            "obliterated, resulting in the deaths of some $POP,000 $CIV."]
     :vocab {"$SIZE" ["small" "medium-sized" "large" "major"]
             "$POP" #(+ (rand-int 200) 50)}}

    :nuclear-war
    {:name :nuclear-war
     :set-vars {:state :extinct}
     :desc ["In $STARDATE, an early warning system employed by one of the "
            "major $CIV superpowers detected an incoming nuclear attack. "
            "Whether the alert was a false alarm remains unclear, but the "
            "resulting nuclear counterattack and ensuing full-scale nuclear "
            "war has plunged $PLANET into a state of nuclear winter from "
            "which it is unlikely that $CIV civilization will ever recover."]}

    :skynet
    {:name :skynet
     :prereqs #{:artificial-intelligence}
     :set-vars {:state :extinct}
     :desc ["In $STARDATE, an artificially intelligent agent with command "
            "authority over the military forces of a major $CIV nation "
            "spontaneously turned against its $CIV masters. Within weeks, the "
            "thoroughly unprepared $CIV were all but exterminated in a "
            "seemingly endless wave of attacks by brutally efficient military "
            "machines."]}

    :gray-goo
    {:name :gray-goo
     :set-vars {:state :extinct}
     :desc ["In $STARDATE, a swarm of self-replicating $CIV nanobots began to "
            "replicate uncontrollably, devouring vast swaths of $PLANET at a "
            "rate which $CIV scientists had formerly deemed impossible. After "
            "several days of rapid expansion, the swarm seems to have become "
            "dormant, but not before consuming approximately 5% of the entire "
            "mass of $PLANET and rendering $CIV civilization completely "
            "extinct."]}})
