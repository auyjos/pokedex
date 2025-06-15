// command_exit.ts
import type { State } from "src/types/types.js";

export function commandExit(state: State): void {
    console.log("Closing the Pokedex... Goodbye!");
    state.rl.close();   // cleanly closes the interface and triggers process.exit(0)
}
