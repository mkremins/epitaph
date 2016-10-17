# Epitaph

Epitaph is an idle game about existential risks and the death of civilizations. It was originally made for the [Fermi Paradox Jam](https://itch.io/jam/fermi-paradox-jam). You can [play it in your browser](https://mkremins.github.io/epitaph), or [check it out on itch.io](https://mkremins.itch.io/epitaph).

From an implementation perspective, Epitaph is interesting mainly because it's a **browser game** written in **ClojureScript** that makes extensive use of **procedurally generated text** to tell an interactive story. It also uses [Om](https://github.com/omcljs/om) (a ClojureScript wrapper around [React](https://facebook.github.io/react/)) for rendering.

## Project structure

* `deps/`: Exactly what it says on the tin: plain old JavaScript libraries that the game pulls in as dependencies. Right now the only thing in here is [Tone.js](https://github.com/Tonejs/Tone.js/), which Epitaph uses exclusively to make little pinging sounds that notify the player when things are happening.
* `externs/`: [Closure Compiler externs](https://developers.google.com/closure/compiler/docs/api-tutorial3) for each of the plain JS dependencies in `deps/`. Only covers the parts of each library that the game actually uses.
* `src/epitaph/`: The main ClojureScript codebase for the game.
  * `app.cljs`: The main entry point that ties everything together. Handles rendering and manages the game state.
  * `civs.cljs`: Functions for procedurally generating alien civilizations, and for updating them on every tick.
  * `events.cljs`: A table of all the random events that can happen in the game.
  * `language.cljs`: Functions for procedurally generating alien *languages*. Heavily inspired by [Martin O'Leary](http://mewo2.com/)'s blog post on [generating naming languages](http://mewo2.com/notes/naming-language/), albeit with some substantial tweaks and deviations.
  * `rand.cljs`: Generic utilities for working with randomness and generator functions.
  * `techs.cljs`: A table of all the technologies that can be discovered in the game.
* `index.html`: The HTML page in which the game actually runs.
* `project.clj`: The [Leiningen](https://github.com/technomancy/leiningen) project file used to build the game.
