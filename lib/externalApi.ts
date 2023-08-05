import {Root} from '@/types/randomUser'

export async function getRandomUserExternal(): Promise<Root> {
  const domain = process.env.NEXT_PUBLIC_EXTERNAL_API_DOMAIN
  const pathPrefix = process.env.NEXT_PUBLIC_EXTERNAL_API_PATH_PREFIX
  const res = await fetch(`${domain}${pathPrefix}`)
  return res.json()
}