export async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api/')
  return res.json()
}