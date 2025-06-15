import { State } from "src/types/types";

export async function commandPokedex(state: State): Promise<void> {


    if (Object.keys(state.pokedex).length === 0) {
        console.log("Your Pokedex is empty. Go catch some Pokémon!");
        return;
    } else {
        console.log("Your Pokedex contains the following Pokémon:");
        for (const pokemonName in state.pokedex) {
            console.log(`- ${pokemonName}`);
        }

    }
}