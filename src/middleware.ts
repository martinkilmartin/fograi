import { NextRequest, NextResponse } from 'next/server'
import { ALLOWED_COUNTRY } from '@constants/GEO_LOCK'
import { ipRateLimit } from '@lib/ip-rate-limit'

export async function middleware(req: NextRequest): Promise<Response> {
  const { geo } = req
  const country = geo?.country || 'XX'

  if (ALLOWED_COUNTRY.length === 0 || ALLOWED_COUNTRY.includes(country)) {
    const res = await ipRateLimit(req)
    if (res.status !== 200) return res
    return NextResponse.next()
  } else {
    req.nextUrl.searchParams.set('from', req.nextUrl.pathname)
    req.nextUrl.pathname = '/'
    return NextResponse.redirect(req.nextUrl)
  }
}
