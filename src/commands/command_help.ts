// command_help.ts
import type { State } from "src/types/types";

export function commandHelp(state: State): void {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    for (const key in state.commands) {
        const cmd = state.commands[key];
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}
