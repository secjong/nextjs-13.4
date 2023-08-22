import 'server-only' // 서버 컴포넌트에서만 import 가능한 모듈이 된다.

import { User } from '@/types/randomUser'
import { Post } from '@/types/post'

export async function getRandomUserInternal() {

  return await new Promise(async (resolve, reject) => {
    const domain = process.env.INTERNAL_API_DOMAIN
    const pathPrefix = process.env.INTERNAL_API_PATH_PREFIX
    const response = await fetch(`${domain}${pathPrefix}`, {
      cache: 'no-store',
      // next: {
      //   revalidate: 0
      // }
    })
    setTimeout(async () => {
      resolve(await response.json())
    }, 2000)
    // return res.json()
  }) as User
}

export async function getPostsInternal() {
  return await new Promise<Array<Post>>(async (resolve, reject) => {
    const domain = process.env.INTERNAL_JSONPLACEHOLDER_DOMAIN
    const response = await fetch(`${domain}/posts`, {
      cache: 'no-store'
    });
    setTimeout(() => {
      resolve(response.json())
    }, 2000);
  })
}

export async function setPostInternal(post: Post) {
  const domain = process.env.INTERNAL_JSONPLACEHOLDER_DOMAIN
  const response = await fetch(`${domain}/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
  const data = await response.json()
  return data
}