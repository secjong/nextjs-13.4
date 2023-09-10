import getQueryClient from "@/components/@external/react-query/getQueryClient"

export default async function RouteHandlerSample2IdPage() {

  const getPostsRouteHandler = async () => {
    const baseUrl = `http://localhost:3000`
    const response = await fetch(`${baseUrl}/routeHandlerSample2/sejong/api`, {
      cache: 'no-store'
    })
    return await response.json() // 한번 더 json 으로 만들어주어야 함
  }

  // 서버 컴포넌트에서 route handler 사용할 필요는 없지.
  const queryClient = getQueryClient()
  const posts = await queryClient.fetchQuery({
    queryKey: ['getPostsRouteHandler'],
    queryFn: getPostsRouteHandler
  })

  return (
    <div>
      <div>route handler 에 dynamic route segment 파라미터 줘보기</div>
      <div>posts 갯수: {posts.length}</div>
    </div>
  )
}