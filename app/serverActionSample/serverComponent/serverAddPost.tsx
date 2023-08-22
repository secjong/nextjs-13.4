import { setPostInternal } from '@/lib/internalApi'
import { Post } from '@/types/post'
import { cookies } from 'next/headers'
import { addPost } from '@/app/serverActionSample/clientComponent/addPost'

export default function ServerAddPost() {

  // async function addPost(formData: FormData) {
  //   'use server'

  //   const obj = Object.fromEntries(formData)

  //   const userId = Number(cookies().get('userId')?.value ?? obj.userId)
  //   const id = Number(obj.id)
  //   const title = obj.title as string
  //   const body = obj.body as string

  //   const post: Post = {
  //     userId: userId,
  //     id: id,
  //     title: title,
  //     body: body
  //   }

  //   console.log(`전송: `, post)
  //   const response = await setPostInternal(post)
  //   console.log(`응답: `, response)
  // }

  return (
    <div>
      <div>서버 컴포넌트</div>
      <div>
        <form action={addPost}>
          <input type="text" name="userId"></input>
          <input type="text" name="id"></input>
          <input type="text" name="title"></input>
          <input type="text" name="body"></input>
          <button type="submit">Post 추가</button>
        </form>
      </div>
    </div>
  )
}