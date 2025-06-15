// commands.ts
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapBack } from "./command_mapb.js";
import { CLICommand } from "src/types/types.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,   // now fits (state:State)=>void
        },
        exit: {
            name: "exit",
            description: "Exits the Pokedex",
            callback: commandExit,   // now fits (state:State)=>void
        },
        map: {
            name: "map",
            description: "Shows the next 20 locations areas",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Shows the previous 20  location areas",
            callback: commandMapBack
        },
        explore: {
            name: "explore",
            description: "List all Pokémon in a location area",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Catch a Pokémon by name",
            callback: commandCatch
        },
        inspect: {
            name: "inspect",
            description: "Inspect a Pokémon in your Pokedex",
            callback: commandInspect
        },
        pokedex: {
            name: "pokedex",
            description: "List all Pokémon in your Pokedex",
            callback: commandPokedex
        }
    }
}
