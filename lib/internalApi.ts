import 'server-only' // 서버 컴포넌트에서만 import 가능한 모듈이 된다.

export async function getRandomUserInternal() {
  const domain = process.env.INTERNAL_API_DOMAIN
  const pathPrefix = process.env.INTERNAL_API_PATH_PREFIX
  const res = await fetch(`${domain}${pathPrefix}`)
  return res.json()
}