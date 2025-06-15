// src/tests/command_catch.test.ts
import { describe, it, expect, vi } from "vitest";
import { commandCatch } from "../commands/command_catch.js";
import type { State } from "src/types/types.js";

it("uses multipliers correctly", async () => {
    const state = {
        pokeApi: {
            fetchPokemon: async () => ({ name: "testmon", base_experience: 0 }),
        },
        pokedex: {},
    } as any as State;
    const log = vi.spyOn(console, "log").mockImplementation(() => { });

    // Force Math.random() to 0 => always caught if finalChance > 0
    const randomSpy = vi.spyOn(Math, "random").mockReturnValue(0);

    await commandCatch(state, "ultraball", "testmon");
    expect(log).toHaveBeenCalledWith("Throwing a ultraball at testmon...");
    expect(log).toHaveBeenCalledWith("testmon was caught!");
    expect(state.pokedex.testmon).toBeDefined();

    log.mockRestore();
    randomSpy.mockRestore();
});
