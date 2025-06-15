// pokecache.test.ts
import { describe, expect, test } from "vitest";
import { Cache } from "src/utils/pokecache";

describe("Cache", () => {
    test.concurrent.each([
        { key: "https://example.com", val: "foo", interval: 200 },
        { key: "https://example.com/path", val: { x: 1, y: 2 }, interval: 300 },
    ])("caches and reaps after $interval ms", async ({ key, val, interval }) => {
        const cache = new Cache(interval);

        cache.add(key, val);
        // immediately available
        expect(cache.get<typeof val>(key)).toEqual(val);

        // after past the interval → entry should be gone
        await new Promise((r) => setTimeout(r, interval + 50));
        expect(cache.get(key)).toBeUndefined();

        cache.stopReapLoop();
    });
});
