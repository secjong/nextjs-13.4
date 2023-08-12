import { Post } from '@/types/post'
import { User } from '@/types/randomUser'

export async function getRandomUserExternal() {
  const domain = process.env.NEXT_PUBLIC_EXTERNAL_API_DOMAIN
  const pathPrefix = process.env.NEXT_PUBLIC_EXTERNAL_API_PATH_PREFIX
  const response = await fetch(`${domain}${pathPrefix}`)
  return await response.json()
}

export async function getPostsExternal() {
  const domain = process.env.NEXT_PUBLIC_EXTERNAL_JSONPLACEHOLDER_DOMAIN
  const response = await fetch(`${domain}/posts`)
  return await response.json()
}