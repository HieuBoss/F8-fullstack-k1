import { NextResponse } from "next/server";
const isLogin = true;
export function middleware(request) {
  //   const response = NextResponse.next();
  //   response.cookies.set("email", "duyhieu06112003@gmail.com");

  //   response.headers.set("x-api-key", "1234");
  //   return response;
  const pathName = request.nextUrl.pathname;
  //   console.log(request.nextUrl);
  if (pathName === "/don-hang") {
    return NextResponse.rewrite(new URL("/orders", request.url));
  }
  if (!isLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/don-hang/:path*"],
};
/*
NextRequest -> Lấy được các thông tin từ http request(method, headers, body, url ...)
NextResponse -> Trả về các thông tin từ (re, headers, body, url ...)
*/
