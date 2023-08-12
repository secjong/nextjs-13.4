import { Cookie } from 'next/font/google'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {

  // 여기서 권한체크를 해서 접근 못하게 할 수 있다.
  return new NextResponse(
    JSON.stringify({ success: false, message: 'authentication failed' }),
    { status: 401, headers: { 'content-type': 'application/json' } }
  )

  /* 쿠키 확인 */
  const cookiesList = request.cookies.getAll()
  console.log(cookiesList)

  const refererCookie = request.cookies.get('referer')
  const hasReferer = request.cookies.has('referer')
  console.log(refererCookie)
  console.log(hasReferer)

  /* request 객체에 포함된 정보 확인 */
  const nextUrlPathName = request.nextUrl.pathname
  const requestUrl = request.url

  const host = request.nextUrl.host
  const hostName = request.nextUrl.hostname
  const basePath = request.nextUrl.basePath
  const domainLocale = request.nextUrl.domainLocale
  const method = request.method
  const userAgent = request.headers.get('user-agent')

  // console.log(requestUrl) // http://localhost:3000/users/123
  // console.log(nextUrlPathName) /// users/123
  // console.log(host); // localhost:3000
  // console.log(hostName); // localhost
  // console.log(basePath); // 
  // console.log(domainLocale); // undefined
  // console.log(method); // GET
  // console.log(userAgent); // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36

  /* 응답객체에 쿠키와 헤더 세팅 */
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-version3', '99999')
  requestHeaders.set('x-hello-from-middleware1', 'heelo')

  const nextResponse = NextResponse.next({
    // request: {
    //   headers: requestHeaders // 이거는 뭐자???
    // }
    headers: requestHeaders // 응답헤더로 세팅됨
  })

  nextResponse.headers.set('x-hello-from-middleware2', 'hello') // 응답헤더에 세팅됨

  nextResponse.cookies.set('vercel1', 'fast111')
  nextResponse.cookies.set({
    name: 'vercel2',
    value: 'slow111',
    path: '/'
  })
  const vercel1Cookie = nextResponse.cookies.get('vercel1') // 응답객체 헤더의 Set-Cookie 에 세팅됨
  const vercel2Cookie = nextResponse.cookies.get('vercel2') // 응답객체 헤더의 Set-Cookie 에 세팅됨
  console.log(vercel1Cookie)
  console.log(vercel2Cookie)
  return nextResponse

  /* 리다이렉트, 리라이트 */
  // const requestHeaders = new Headers(request.headers)
  // requestHeaders.set('x-version2', '9999')

  // const responseHeaders = new Headers(response.headers)
  // responseHeaders.set('x-version', '999')

  // return NextResponse.redirect(new URL('/routeHandlerSample', requestUrl), {
  //   headers: responseHeaders // 응답 헤더에 값 심기
  // }) // 진입부터 아예 다른 라우터로 이동시켜버린다.
  // return NextResponse.rewrite(new URL('/routeHandlerSample', requestUrl), {
  //   request: {
  //     headers: requestHeaders
  //   },
  //   headers: responseHeaders, // 응답 헤더에 값 심기
  // }) // url은 원래 가려는 url을 유지하면서, 실제로는 다른 컨텐츠를 노출한다.
}

// See "Matching Paths" below to learn more
export const config = {
  /*
  * Match all request paths except for the ones starting with:
  * - api (API routes)
  * - _next/static (static files)
  * - _next/image (image optimization files)
  * - favicon.ico (favicon file)
  */
  // matcher: [

  //   '/((?!api|_next/static|_next/image|favicon.ico).*)'
  // ],
  matcher: ['/photos/:path*', '/users/:path*'],
}