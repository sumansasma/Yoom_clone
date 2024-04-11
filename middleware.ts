import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware((auth, req) => {
  protectedRoutes:[
    '/',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
  '/meeting(.*)'
  ]
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};