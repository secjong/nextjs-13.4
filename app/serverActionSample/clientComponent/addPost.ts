'use server'

import { setPostInternal } from '@/lib/internalApi'
import { Post } from '@/types/post'
import { cookies } from 'next/headers'

export async function addPost(formData: FormData) {
  const obj = Object.fromEntries(formData)

  const userId = Number(cookies().get('userId')?.value ?? obj.userId)
  const id = Number(obj.id)
  const title = obj.title as string
  const body = obj.body as string

  const post: Post = {
    userId: userId,
    id: id,
    title: title,
    body: body
  }

  console.log(`전송: `, post)
  const response = await setPostInternal(post)
  console.log(`응답: `, response)
}