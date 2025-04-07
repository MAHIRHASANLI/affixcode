import { NextResponse, NextRequest } from "next/server";
import { isAuth } from "./utils/auth";
import { isTogleBot } from "./utils/toggle_bot";

export const middleware = (request: NextRequest) => {
  const userAgent = request.headers.get("user-agent") || "";

  if (isTogleBot(userAgent)) {
    return NextResponse.rewrite(new URL("/robots.txt", request.url));
  }

  if (!isAuth(request.cookies)) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/admin((?!/login).*)"],
};
