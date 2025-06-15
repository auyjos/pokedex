import { startREPL } from "./repl.js";
import { initState } from "./utils/state.js";


function main() {
    const state = initState()
    startREPL(state);

}

main()