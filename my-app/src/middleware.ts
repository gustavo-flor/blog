import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { defaultLanguage, supportedLanguages } from '@/services/lang'

const locales = supportedLanguages.map(it => it.code)

const localized = (pathname: string) => 
  locales.find(it => pathname.startsWith(`/${it}/`) || pathname === `/${it}`)

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl

  if (localized(pathname)) {
    return NextResponse.next()
  }

  request.nextUrl.pathname = `/${defaultLanguage.code}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|markdown|robots.txt|assets|favicon.ico|sw.js|site.webmanifest).*)']
}