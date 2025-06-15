// src/pokecache.ts

export interface CacheEntry<T> {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    /**
     * @param interval time-to-live for cache entries (ms)
     */
    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop(); // still keep a periodic cleanup if you like
    }

    /**
     * Add a value under `key`. Also schedules it to be deleted
     * after `this.#interval` milliseconds.
     */
    add<T>(key: string, val: T): void {
        this.#cache.set(key, { createdAt: Date.now(), val });

        // Schedule a one-time deletion after the interval
        setTimeout(() => {
            this.#cache.delete(key);
        }, this.#interval);
    }

    /**
     * Retrieve the cached value, or `undefined` if missing or expired.
     */
    get<T>(key: string): T | undefined {
        const entry = this.#cache.get(key);
        return entry ? (entry.val as T) : undefined;
    }

    /**
     * Stops the periodic reap loop (does not affect the per-entry timeouts).
     */
    stopReapLoop(): void {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }

    /** Delete any entries older than `this.#interval`—extra safety. */
    #reap(): void {
        const cutoff = Date.now() - this.#interval;
        for (const [key, entry] of this.#cache) {
            if (entry.createdAt < cutoff) {
                this.#cache.delete(key);
            }
        }
    }

    /** Periodic cleanup in case any entry was missed. */
    #startReapLoop(): void {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }
}
