import NextAuth from "next-auth";
import { authConfig } from "@/config/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  PUBLIC_ROUTES,
  AUTH_ROUTES,
  API_AUTH_PREFIX,
} from "@/config/route";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth; //!! ensures that it is a boolean

  const isApiAuthPrefix = nextUrl.pathname.startsWith(API_AUTH_PREFIX);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);

  if (isApiAuthPrefix) {
    return null;
  }

  if (isAuthRoute) {
    if (isAuthenticated) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL("/auth/login", nextUrl));

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
