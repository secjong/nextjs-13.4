import 'server-only' // 서버 컴포넌트에서만 import 가능한 모듈이 된다.

import {Root} from '@/types/randomUser'

export async function getRandomUserInternal(): Promise<Root> {

  return new Promise(async (resolve, reject) => {
    const domain = process.env.INTERNAL_API_DOMAIN
    const pathPrefix = process.env.INTERNAL_API_PATH_PREFIX
    const res = await fetch(`${domain}${pathPrefix}`, {
      cache: 'no-store',
      next: {
        revalidate: 0
      }
    })
    setTimeout(() => {
      resolve(res.json())
    }, 2000)
    // return res.json()
  })
  
}