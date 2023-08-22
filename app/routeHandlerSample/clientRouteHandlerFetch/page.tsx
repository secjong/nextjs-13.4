'use client'

import { Post } from "@/types/post"
import { useQuery } from "@tanstack/react-query"

export default function ClientRouteHandlerFetch() {

  /**
   * route handler 를 호출하여 데이터 가져오기
   * @returns 
   */
  const routeHandlerGetPosts = async () => {
    return new Promise<Post[]>(async (resolve, reject) => {

      const baseUrl = `http://localhost:3000`
      const response = await fetch(`${baseUrl}/routeHandlerSample/api`, {
        cache: 'no-store'
      })

      setTimeout(async () => {
        resolve((await response.json()).data)
      }, 2000)
      // return (await response.json()).data
    })
  }

  const {data, error, isSuccess, isError, isLoading, refetch} = useQuery<Post[]>({
    queryKey: ['clientFetchPost'],
    queryFn: routeHandlerGetPosts
  })

  return (
    <div>
      <div>클라이언트 route handler fetch</div>
      <div>
        <ul>
          {data?.map((postItem, postIndex) => {
            return (
              <li key={postIndex}>
                {postItem.title}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}