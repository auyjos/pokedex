// repl.ts
import type { State } from "src/types/types.js";
import { cleanInput } from "./utils/clean_input.js";


export function startREPL(state: State): void {
    const { rl, commands } = state;
    rl.prompt();

    // 3) On each line: clean, dispatch, then re-prompt
    rl.on("line", async (input: string) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            rl.prompt();
            return;
        }

        const cmdName = words[0];
        const entry = commands[cmdName];
        if (!entry) {
            console.log("Unknown command");
        } else {
            try {
                await entry.callback(state, ...words.slice(1));
            } catch (err) {
                console.error(`Error running command "${cmdName}":`, err);
            }
        }

        rl.prompt();
    });

    rl.on("close", () => process.exit(0));
}
