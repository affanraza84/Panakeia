/**
 * Rate Limiter Interface & In-Memory Sliding Window Implementation
 *
 * Configured for 5 requests per 60 seconds per IP address.
 * Designed with a clean interface for an immediate one-line swap to
 * Upstash Redis (@upstash/ratelimit) when scaling horizontally across multi-region serverless.
 */

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number; // Unix timestamp in seconds
}

interface RateLimitRecord {
  timestamps: number[];
}

class InMemoryRateLimiter {
  private cache = new Map<string, RateLimitRecord>();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests = 5, windowMs = 60 * 1000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;

    // Periodic cleanup every 5 minutes to avoid memory leaks
    if (typeof setInterval !== "undefined") {
      setInterval(() => this.cleanup(), 5 * 60 * 1000).unref?.();
    }
  }

  public check(identifier: string): RateLimitResult {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    let record = this.cache.get(identifier);
    if (!record) {
      record = { timestamps: [] };
      this.cache.set(identifier, record);
    }

    // Filter out timestamps older than the sliding window
    record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

    const reset = Math.ceil((now + this.windowMs) / 1000);

    if (record.timestamps.length >= this.maxRequests) {
      return {
        success: false,
        limit: this.maxRequests,
        remaining: 0,
        reset,
      };
    }

    record.timestamps.push(now);

    return {
      success: true,
      limit: this.maxRequests,
      remaining: this.maxRequests - record.timestamps.length,
      reset,
    };
  }

  private cleanup() {
    const windowStart = Date.now() - this.windowMs;
    for (const [key, record] of this.cache.entries()) {
      record.timestamps = record.timestamps.filter((ts) => ts > windowStart);
      if (record.timestamps.length === 0) {
        this.cache.delete(key);
      }
    }
  }

  // Clear cache helper (useful for unit/integration testing)
  public resetAll() {
    this.cache.clear();
  }
}

// Global instance to persist in-memory across warm serverless invocations
declare global {
  var globalRateLimiter: InMemoryRateLimiter | undefined;
  var globalRevalidateLimiter: InMemoryRateLimiter | undefined;
}

export const enquiryRateLimiter =
  global.globalRateLimiter || (global.globalRateLimiter = new InMemoryRateLimiter(5, 60 * 1000));

export const revalidateRateLimiter =
  global.globalRevalidateLimiter || (global.globalRevalidateLimiter = new InMemoryRateLimiter(10, 60 * 1000));

/**
 * Utility to extract client IP from Next.js Request headers
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

