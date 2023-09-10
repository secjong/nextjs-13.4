import { Post } from "@/types/post"
import { type NextRequest, NextResponse } from "next/server"
import { cookies, headers } from "next/headers"

// export const revalidate = 60

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {

  const id = params.id;

  const cookieStore = cookies()
  const token = cookieStore.get('token')

  const headersList = headers()
  const referer = headersList.get('referer')

  const domain = process.env.NEXT_PUBLIC_EXTERNAL_JSONPLACEHOLDER_DOMAIN

  const response = await fetch(`${domain}/posts`, {
    cache: 'no-store'
    // next: {
    //   revalidate: 60
    // }
  })

  const data = await response.json()

  const responseHeaders = new Headers()

  responseHeaders.set('Set-Cookie', `tempId=${id}`)
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: responseHeaders
  })

}