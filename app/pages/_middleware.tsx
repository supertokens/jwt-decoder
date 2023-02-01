import { NextResponse } from "next/server"

export function middleware(req) {
    if (req.nextUrl.href.includes('/jwt-decoder/_next')) {
      return NextResponse.rewrite(
        req.nextUrl.href.replace('/jwt-decoder/_next', '/_next'),
      )
    }
  
    return NextResponse.next()
  }