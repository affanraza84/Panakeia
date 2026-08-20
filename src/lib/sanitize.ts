import mongoSanitize from "mongo-sanitize";

/**
 * Sanitizes input to prevent NoSQL injection by stripping out any keys starting with '$'
 * or containing prohibited MongoDB operator syntax.
 */
export function sanitizeInput<T>(input: T): T {
  return mongoSanitize(input);
}
