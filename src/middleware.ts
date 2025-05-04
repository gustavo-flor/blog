import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server'

const lowercased = (str: string): boolean => {
  return str === str.toLowerCase()
}

export const middleware = (request: NextRequest): NextResponse => {
  const { pathname } = request.nextUrl

  if (lowercased(pathname)) {
    return NextResponse.next()
  }

  request.nextUrl.pathname = pathname.toLowerCase()
  return NextResponse.redirect(request.nextUrl)
}

export const config: MiddlewareConfig = {
  matcher: '/((?!_next).*)'
}
