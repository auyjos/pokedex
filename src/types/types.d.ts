
/** Application state */
export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokeApi: PokeAPI;
    nextLocationsURL?: string;
    prevLocationsURL?: string;
    pokedex: Record<string, Pokemon>;
};


export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => void | Promise<void>;
};



export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[]
};

export type Location = {
    id: number;
    name: string
    pokemon_encounters: {
        pokemon: { name: string, url: string }
    }[]
};

export type Pokemon = {
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    stats: Array<{
        base_stat: number;
        stat: { name: string };
    }>;
    types: Array<{
        slot: number;
        type: { name: string };
    }>;
};