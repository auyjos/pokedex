import { ShallowLocations, Pokemon } from "src/types/types";
import { Cache } from "./pokecache.js";
export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    public static readonly cache = new Cache(120000)

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
        const cached = PokeAPI.cache.get<ShallowLocations>(url)
        if (cached) {
            console.log("[cache] hit: ", url)
            return cached
        }
        const resp = await fetch(url)
        if (!resp.ok) {
            throw new Error(`Failed fetching locations: ${resp.status}`);
        }
        const data = await resp.json() as ShallowLocations
        PokeAPI.cache.add(url, data)
        return data;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cached = PokeAPI.cache.get<Location>(url);
        if (cached) {
            console.log("[cache] hit:", url);
            return cached;
        }
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error(`Failed fetching location ${locationName}: ${resp.status}`);
        }
        const data = (await resp.json()) as Location;
        PokeAPI.cache.add(url, data);
        return data;
    }

    async fetchPokemon(pokemonName: string): Promise<Pokemon> {
        const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        const cached = PokeAPI.cache.get<Pokemon>(url);
        if (cached) {
            console.log("[cache] hit:", url);
            return cached;
        }
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error(`Failed fetching pokemon ${pokemonName}: ${resp.status}`);
        }
        const data = (await resp.json()) as Pokemon;
        PokeAPI.cache.add(url, data);
        return data;
    }
}
