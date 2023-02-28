// <root>/middleware.ts
import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  if (req.nextUrl.href.includes('/jwt-encoder-decoder/_next')) {
    return NextResponse.rewrite(
      req.nextUrl.href.replace('/jwt-encoder/_next', '/_next'),
    )
  }

  return NextResponse.next()
}