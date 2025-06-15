// command_catch.ts
import type { State } from "src/types/types.js";

const BALL_MULTIPLIERS: Record<string, number> = {
    pokeball: 1,
    greatball: 1.5,
    ultraball: 2,
    masterball: Infinity,
};

export async function commandCatch(
    state: State,
    ...args: string[]
): Promise<void> {
    // args[0] might be the ball type, or if only one arg then it's the name
    let ball = "pokeball";
    let name: string | undefined;

    if (args.length === 1) {
        // only a name provided
        name = args[0];
    } else if (args.length >= 2) {
        // first is ball, second is name
        ball = args[0].toLowerCase();
        name = args[1];
    }

    if (!name) {
        console.log(
            "Usage: catch [pokeball|greatball|ultraball|masterball] <pokemon-name>"
        );
        return;
    }

    const multiplier = BALL_MULTIPLIERS[ball];
    if (multiplier === undefined) {
        console.log(`Unknown ball type: ${ball}`);
        return;
    }

    console.log(`Throwing a ${ball} at ${name}...`);

    let pokemon;
    try {
        pokemon = await state.pokeApi.fetchPokemon(name);
    } catch {
        console.log(`Couldn't find data for ${name}.`);
        return;
    }

    const baseChance = Math.max(0, 1 - pokemon.base_experience / 500);
    const finalChance = Math.min(1, baseChance * multiplier);

    if (Math.random() < finalChance) {
        console.log(`${name} was caught!`);
        state.pokedex[name] = pokemon;
    } else {
        console.log(`${name} escaped!`);
    }
}
