import type { State } from "src/types/types.js";

/**
 * Pokedex > map
 * Fetches the *next* page of 20 location names and prints them.
 */

export async function commandMap(state: State): Promise<void> {

    const data = await state.pokeApi.fetchLocations(state.nextLocationsURL);
    for (const area of data.results) {
        console.log(area.name)
    }

    state.nextLocationsURL = data.next ?? undefined;
    state.prevLocationsURL = data.next ?? undefined;


}