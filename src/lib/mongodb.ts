import mongoose from "mongoose";

/**
 * MongoDB connection helper optimized for Serverless / Next.js environments (e.g. Vercel).
 *
 * Why Connection Caching?
 * In serverless environments, Next.js API routes / Server Components are executed across
 * stateless function instances. Re-opening a new Mongoose connection per request quickly
 * exhausts database connection limits (Connection Pool Starvation).
 *
 * We cache the connection on the global object during development & warm serverless invocations.
 *
 * Pool Configuration:
 * - maxPoolSize: 10 (balanced for serverless instances to avoid exhausting MongoDB Atlas tier limits while handling concurrent requests)
 * - serverSelectionTimeoutMS: 5000 (fails fast if network or Atlas is unreachable)
 * - bufferCommands: false (avoids hanging promises if connection fails)
 */

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 1,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached!.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
      return m;
    });
  }

  try {
    cached!.conn = await cached!.promise;
  } catch (e) {
    cached!.promise = null;
    throw e;
  }

  return cached!.conn;
}
