import type { State } from "src/types/types";

export async function commandExplore(state: State, areaName?: string): Promise<void> {
    if (!areaName) {
        console.log("Please provide an area name to explore.");
        return;
    }
    console.log(`Exploring the area: ${areaName}`);
    const location = await state.pokeApi.fetchLocation(areaName);
    if (!location) {
        console.log(`No information found for area: ${areaName}`);
        return;
    }


    console.log("Found Pokemon:");
    for (const encounter of location.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    }
}