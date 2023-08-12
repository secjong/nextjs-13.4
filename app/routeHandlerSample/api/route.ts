import { Post } from '@/types/post'
import { type NextRequest, NextResponse } from 'next/server'
import { cookies, headers } from 'next/headers'

// export const revalidate = 60

export async function GET(request: NextRequest) {

  const cookieStore = cookies()
  const token = cookieStore.get('token')

  const headersList = headers()
  const referer = headersList.get('referer')

  const domain = process.env.NEXT_PUBLIC_EXTERNAL_JSONPLACEHOLDER_DOMAIN
  const response = await fetch(`${domain}/posts`, {
    next: {
      revalidate: 60
    }
  })
  const data = await response.json()

  return NextResponse.json({ data })

  // return new Response(data, {
  //   status: 200,
  //   headers: {
  //     'Set-Cookie': `token=${token}`,
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //   }
  // })

}