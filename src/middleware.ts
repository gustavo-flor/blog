import { NextRequest, NextResponse } from 'next/server'

const lowercased = (str: string) => {
  return str === str.toLowerCase()
}

const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl

  if (lowercased(pathname)) {
    return NextResponse.next()
  }

  request.nextUrl.pathname = pathname.toLowerCase()
  return NextResponse.redirect(request.nextUrl)
}

export default middleware
