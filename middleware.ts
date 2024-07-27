import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

const isProtectedRoute = createRouteMatcher([
    
  ]);

  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
    return NextResponse.next()
  });