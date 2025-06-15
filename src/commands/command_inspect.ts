import { State } from "src/types/types";

export async function commandInspect(state: State, pokemonName?: string): Promise<void> {
    if (!pokemonName) {
        console.log("Please provide a Pokémon name to inspect.");
        return;
    }
    const pokemon = state.pokedex[pokemonName];
    if (!pokemon) {
        console.log(`Pokémon ${pokemonName} not found in your Pokedex.`);
        return;
    }

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");

    for (const s of pokemon.stats) {
        console.log(`  ${s.stat.name}: ${s.base_stat}`);
    }
    console.log("Types:");
    for (const t of pokemon.types) {
        console.log(`  ${t.type.name}`);
    }
}
