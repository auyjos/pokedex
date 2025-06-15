export function cleanInput(input: string): string[] {
    return input.split(/[\s,]+/).map(word => word.trim().toLowerCase()).filter(word => word.length > 0)
}