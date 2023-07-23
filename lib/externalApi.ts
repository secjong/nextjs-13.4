export async function getRandomUserExternal() {
  const domain = process.env.NEXT_PUBLIC_EXTERNAL_API_DOMAIN
  const pathPrefix = process.env.NEXT_PUBLIC_EXTERNAL_API_PATH_PREFIX
  const res = await fetch(`${domain}${pathPrefix}`)
  return res.json()
}