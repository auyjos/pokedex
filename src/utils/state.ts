// state.ts
import { createInterface } from "readline";
import { PokeAPI } from "./pokeapi.js";
import { getCommands } from "../commands/commands.js";
import type { State } from "src/types/types.js";


/** Initialize the readline interface + command registry */
export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    return {
        rl,
        commands: getCommands(),
        pokeApi: new PokeAPI(),
        nextLocationsURL: undefined,
        prevLocationsURL: undefined,
        pokedex: {},
    };
}
