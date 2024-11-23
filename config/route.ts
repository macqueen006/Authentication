

/**
 ** An array of route that is only accessible to the public
 * These routes require authentication
 * @type {string[]}
 */
export const PUBLIC_ROUTES: string[] = ["/"];

/**
 * An array of route that is only accessible to logged in user
 * These routes require authentication
 * @type {string[]}
 */
export const AUTH_ROUTES: string[] = ["/auth/login", "/auth/register", "/auth/error"];

/**
 *A string of route that redirects the user to specific path after authenticated
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";

/**
 *The prefix for API authentication routes
 *Routes that starts with this prefix are used for API authentication purposes
 * @type {string}
 */
export const API_AUTH_PREFIX: string = "/api/auth";
