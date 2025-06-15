// command_mapb.ts
import type { State } from "src/types/types.js";

/**
 * Pokedex > mapb
 * Fetches the *previous* page of 20 location names (if any).
 */
export async function commandMapBack(state: State): Promise<void> {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    const data = await state.pokeApi.fetchLocations(state.prevLocationsURL);
    for (const area of data.results) {
        console.log(area.name);
    }
    state.nextLocationsURL = data.next ?? undefined;
    state.prevLocationsURL = data.previous ?? undefined;
}
