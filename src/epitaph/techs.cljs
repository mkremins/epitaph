(ns epitaph.techs)

(def all-techs
  [{:name :toolmaking
    :event-chances {:overhunting (/ +4 1000)
                    :overfishing (/ -3 1000)
                    :crop-failure (/ -3 1000)
                    :food-illness (/ +1 1000)
                    :pets (/ +3 1000)
                    :conqueror (/ +1 1000)}
    :desc ["The $CIV $USE stone tools $FOR$JOINER hunting the wild $BEAST."]
    :vocab {"$USE" ["make extensive use of" "make use of"
                    "make widespread use of" "use"]
            "$FOR" ["for many things"
                    "in a variety of contexts"]
            "$JOINER" [", especially when"
                       ", including as weapons when"
                       ", including when"
                       ". This has dramatically improved their efficiency in"]}}

   {:name :agriculture
    :event-chances {:overhunting (/ -3 1000)
                    :overfishing (/ -3 1000)
                    :crop-failure (/ +4 1000)
                    :pets (/ +4 1000)}
    :desc ["The $CIV have begun to cultivate crops$INCLUDING $THE_CROP."]
    :vocab {"$INCLUDING" [", including"
                          ". One especially popular crop is"
                          ". They are especially fond of"]
            "$THE_CROP" ["a kind of $ADJ $PLANT known as $CROP$DETAIL"
                         "$CROP, a kind of $ADJ $PLANT$DETAIL"]
            "$ADJ" ["bitter" "chewy" "colorful" "fleshy" "hardy" "sour" "sweet"
                    "tasty" "tough"]
            "$PLANT" ["cactus" "flower" "fruit" "fungus" "grain" "leaf" "lichen"
                      "moss" "mushroom" "nut" "root" "seaweed" "seedpod" "stalk"
                      "vegetable" "vine"]
            "$DETAIL" ["" "" " that grows well $IN_BIOME of $PLANET"]
            "$IN_BIOME" ["in the $BIOME_A" "on the $BIOME_B"]
            "$BIOME_A" ["dense forests" "deserts" "dominant climate"
                        "fertile soil" "forests" "grasslands" "jungles" "soil"
                        "rainforests" "rocky soil" "scrublands"]
            "$BIOME_B" ["floodplains" "plains" "riverbanks"]}}

   {:name :fishing
    :event-chances {:overhunting (/ -3 1000)
                    :overfishing (/ +4 1000)
                    :crop-failure (/ -3 1000)
                    :food-illness (/ +1 1000)}
    :desc ["The $CIV have learned how to catch water-dwelling creatures such "
           "as the $FISH, which is now $AN_IMPORTANT part of the $CIV diet."]
    :vocab {"$AN_IMPORTANT" ["an important" "a staple"]}}

   {:name :writing
    :set-vars {:tech-chance (/ 1 60)}
    :event-chances {:war-over-metal (/ -1 1000)
                    :conqueror (/ +3 1000)
                    :religion (/ +1 1000)}
    :desc ["The $CIV have developed a simple system of writing, which they use "
           "primarily for $PURPOSE."]
    :vocab {"$PURPOSE" ["poetry" "record-keeping" "storytelling" "worship"]}}

   {:name :astronomy
    :event-chances {:religion (/ +1 1000)}
    :desc ["The $CIV have begun to watch the skies and recognize patterns in "
           "the movements of stars, which they use to navigate over great "
           "distances and keep track of time."]}

   {:name :fire
    :prereqs #{:toolmaking}
    :event-chances {:forest-fire (/ +2 1000)
                    :food-illness (/ -3 1000)}
    :desc ["$INTRO $CIV have mastered the control of fire. They use it to "
           "cook their food, and to light their villages at night."]
    :vocab {"$INTRO" ["$DESPITE a few $EARLY mishaps, the" "The" "The"]
            "$DESPITE" ["Despite" "In spite of"]
            "$EARLY" ["early" "initial"]}}

   {:name :metalworking
    :prereqs #{:fire}
    :event-chances {:war-over-metal (/ +3 1000)
                    :conqueror (/ +4 1000)}
    :desc ["The $CIV have discovered how to forge molten metal into jewelry, "
           "tools, weapons, and armor."]}

   {:name :construction
    :prereqs #{:toolmaking :agriculture}
    :event-chances {:large-city (/ +1 1000)
                    :city-plague (/ +2.5 1000)
                    :war-over-metal (/ -1 1000)
                    :forest-fire (/ -2 1000)
                    :conqueror (/ +2 1000)
                    :pets (/ +1 1000)
                    :religion (/ +3 1000)}
    :desc ["The $CIV have begun to construct permanent dwellings and other "
           "structures$USING $MAT as a building material."]
    :vocab {"$USING" [", making especially extensive use of"
                      ". They make especially extensive use of"
                      ". They seem to favor"
                      ". Wherever possible, they seem to prefer"]
            "$MAT" ["brick" "bricks" "clay" "limestone" "marble" "sandstone"
                    "stone" "the wood of the $CROP plant" "wood"]}}

   {:name :mathematics
    :prereqs #{:writing :astronomy}
    :desc ["The $CIV have developed a sophisticated understanding of basic "
           "mathematics, such as arithmetic, algebra, and geometry."]}

   {:name :sailing
    :prereqs #{:astronomy :construction}
    :event-chances {:sea-plague (/ +2 1000)
                    :large-city (/ +1 1000)
                    :war-over-metal (/ -2 1000)
                    :city-trade (/ +7 1000)}
    :desc ["The $CIV have learned how to build ships and sail them across the "
           "oceans of $PLANET to explore and trade over increasingly greater "
           "distances."]}

   {:name :architecture
    :prereqs #{:construction :mathematics}
    :event-chances {:large-city (/ +5 1000)
                    :city-fire (/ -1 1000)
                    :religion (/ +5 1000)}
    :desc ["The $CIV have begun to make use of more sophisticated construction "
           "techniques, relying on sturdy structural elements such as arches "
           "and buttresses to support larger and larger buildings."]}

   {:name :plumbing
    :prereqs #{:construction :metalworking}
    :event-chances {:large-city (/ +3 1000)
                    :city-plague (/ -2 1000)
                    :sea-plague (/ -1 1000)}
    :desc ["The $CIV have built elaborate pipe and sewer systems to supply "
           "their larger settlements, such as $CITY, with fresh water and a "
           "hygenic means of waste disposal."]}

   {:name :optics
    :prereqs #{:mathematics :metalworking}
    :desc ["The $CIV have begun to use lenses and mirrors made from polished "
           "crystal, glass, and water to redirect and focus light."]}

   {:name :alchemy
    :prereqs #{:mathematics :metalworking}
    :desc ["Some of the $CIV have begun to experiment with alchemy, "
           "systematically searching for new ways of combining and manipulating "
           "ingredients to yield useful chemicals, compounds, and medicines."]}

   {:name :mill-power
    :prereqs #{:metalworking :sailing}
    :desc ["The $CIV have begun to construct wind and water mills, which "
           "redirect the forces of the natural world to perform repetitive "
           "mechanical tasks such as grinding grain and pumping water."]}

   {:name :gunpowder
    :prereqs #{:alchemy}
    :desc ["The $CIV have discovered a way to manufacture gunpowder, which "
           "they primarily use $IN_CONTEXT."]
    :vocab {"$IN_CONTEXT" ["for explosive mining" "in warfare"]}}

   {:name :the-printing-press
    :prereqs #{:architecture :metalworking}
    :set-vars {:tech-chance (/ 1 30)}
    :desc ["The $CIV have developed a simple printing press, and mass-produced "
           "versions of important texts have begun to circulate widely "
           "throughout the world. $TEXTS_ARE especially popular."]
    :vocab {"$TEXTS_ARE" ["Light novels are"
                          "Philosophical texts are"
                          "Poetry is"
                          "Political pamphlets are"
                          "Religious texts are"
                          "Romance novels are"
                          "Satire is"
                          "Scary stories are"
                          "Serial fiction is"
                          "Tales of heroism are"
                          "Transcriptions of folktales are"
                          "Works of natural philosophy are"]}}

   {:name :taxonomy
    :prereqs #{:alchemy :optics :the-printing-press}
    :desc ["Through systematic observation and categorization of the various "
           "living things on $PLANET, the $CIV have begun to develop a more "
           "sophisticated understanding of biology. Some theorists have even "
           "put forth the idea that dramatically different-looking organisms, "
           "such as the $BEAST and the $FISH, may in fact $SHARE a single "
           "common ancestor."]
    :vocab {"$SHARE" ["be descended from" "share"]}}

   {:name :calculus
    :prereqs #{:optics :the-printing-press}
    :desc ["In their efforts to understand the motion of planets in the sky, "
           "free-falling bodies, and projectiles, the $CIV have developed a "
           "new branch of mathematics which is immediately recognizable as "
           "calculus."]}

   {:name :rocketry
    :prereqs #{:calculus :gunpowder}
    :desc ["The $CIV have begun to develop rockets."]}

   {:name :steam-power
    :prereqs #{:architecture :mill-power}
    :desc ["The $CIV have developed a practical and cost-effective steam "
           "engine, which can be fueled with wood or coal."]}

   {:name :electromagnetism
    :prereqs #{:alchemy :architecture :mill-power :the-printing-press}
    :desc ["The $CIV have successfully tamed electricity, and are now "
           "beginning to deploy it throughout society. Electric lights are "
           "widespread, electric motors are used to drive factories, and "
           "the growing need for electric power has led to the construction "
           "of power plants near every major center of $CIV population."]}

   {:name :telegraphy
    :prereqs #{:electromagnetism :steam-power}
    :desc ["The $CIV have begun harnessing the power of electricity to send "
           "messages across very great distances with unprecedented speed. "
           "Due to the overhead of encoding and decoding messages, "
           "long-distance communication remains far from instantaneous, but "
           "it is now possible for individuals on opposite sides of $PLANET "
           "to exchange several messages over the course of a single day."]}

   {:name :flight
    :prereqs #{:calculus :electromagnetism :steam-power}
    :desc ["The $CIV have developed flying machines which can carry them into "
           "the skies above $PLANET."]}

   {:name :transistors
    :prereqs #{:calculus :electromagnetism :steam-power}
    :desc ["With the development of the transistor, the $CIV have begun to "
           "construct more sophisticated electronic circuits."]}

   {:name :germ-theory
    :prereqs #{:calculus :taxonomy}
    :event-chances {:city-plague (/ -1 1000)
                    :sea-plague (/ -1 1000)}
    :desc ["$THE $IDEA that diseases $ARE caused by microorganisms has begun "
           "to catch on among the $CIV, leading to the widespread adoption of "
           "public health policies which have greatly reduced the spread of "
           "disease."]
    :vocab {"$THE" ["Although initially controversial, the"
                    "The initially controversial" "The"]
            "$IDEA" ["hypothesis" "idea" "theory"]
            "$ARE" ["are" "can be"]}}

   {:name :genetics
    :prereqs #{:germ-theory}
    :event-chances {:bioterrorism (/ +1 360)}
    :desc ["The $CIV have arrived at a sophisticated understanding of "
           "genetics, which has enabled them to craft new forms of life by "
           "deliberately modifying the genes of existing organisms."]}

   {:name :nuclear-physics
    :prereqs #{:calculus :gunpowder :telegraphy}
    :event-chances {:nuclear-weapons (/ +1 30)}
    :desc ["The $CIV have developed an accurate model of the internal "
           "structure of the atom, which has also enabled them to understand "
           "the phenomenon of radioactivity."]}

   {:name :mass-media
    :prereqs #{:calculus :telegraphy}
    :desc ["The $CIV have discovered that electromagnetic waves may be used "
           "to transmit information, enabling the development and widespread "
           "deployment of media for audiovisual broadcasting."]}

   {:name :digital-computers
    :prereqs #{:transistors}
    :desc ["The $CIV have begun to build general-purpose programmable "
           "computers."]}

   {:name :quantum-physics
    :prereqs #{:nuclear-physics}
    :desc ["The $CIV have begun to understand quantum physics."]}

   {:name :spaceflight
    :prereqs #{:digital-computers :flight :rocketry}
    :event-chances {:asteroid (/ -1 2000)}
    :desc ["The $CIV have taken their first tentative steps into space, "
           "launching craft capable of supporting several individuals into "
           "orbit around $PLANET before retrieving them safely."]}

   {:name :networked-computers
    :prereqs #{:digital-computers :mass-media}
    :set-vars {:tech-chance (/ 1 20)}
    :event-chances {:world-government (/ +1 90)}
    :desc ["The $CIV have begun to connect their computers into a single vast "
           "network, enabling communication and collaboration on a truly "
           "global scale."]}

   {:name :artificial-intelligence
    :prereqs #{:networked-computers}
    :event-chances {:skynet (/ +1 180)}
    :desc ["The $CIV have developed a form of artificial general intelligence "
           "which rivals many of their own intellectual capabilities."]}

   {:name :nanotechnology
    :prereqs #{:networked-computers :quantum-physics}
    :event-chances {:gray-goo (/ +1 180)}
    :desc ["The $CIV have begun to experiment with the use of \"intelligent "
           "materials\", in the form of swarms of programmable nanobots."]}

   {:name :space-colonization
    :prereqs #{:nanotechnology :networked-computers :spaceflight}
    :event-chances {:asteroid -1
                    :volcano -1
                    :world-government (/ +2 90)}
    :desc ["The $CIV have begun to establish permanent colonies on worlds "
           "other than $PLANET. Although still largely unable to travel "
           "outside of the $SYSTEM system, the distribution of $CIV "
           "civilization across multiple worlds greatly reduces the risk "
           "that they will collapse due to any crisis of merely planetary "
           "scale."]}

   {:name :quantum-computers
    :prereqs #{:networked-computers :quantum-physics}
    :desc ["The $CIV have constructed their first cost-effective quantum "
           "computers, dramatically improving their collective ability to "
           "perform certain types of calculation."]}

   {:name :FTL-communication
    :prereqs #{:artificial-intelligence :quantum-computers}
    :desc ["Through their investigations of quantum phenomena, the $CIV have "
           "discovered a means of sending and receiving messages which travel "
           "at speeds exceeding that of light itself."]}

   {:name :FTL-travel
    :prereqs #{:FTL-communication :space-colonization}
    :set-vars {:state :pending-invite}
    :desc ["The $CIV have successfully tested their first faster-than-light "
           "starship. No longer are they trapped within the gravity well of "
           "the $SYSTEM system: they are now free to take their place "
           "alongside us as fellow wanderers among the stars."]}])
