'use client'

import { addPost } from '@/app/serverActionSample/clientComponent/addPost'

export default function ClientAddPost() {
  return (
    <div>
      <div>클라이언트 컴포넌트</div>
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