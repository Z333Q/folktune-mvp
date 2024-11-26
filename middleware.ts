import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth",
    signUp: "/auth/signup",
  },
});

export const config = {
  matcher: [
    "/learn/:path*",
    "/profile/:path*",
    "/settings/:path*",
  ],
};