import {lazy} from 'react'
// const ServerComponentRandomUser = lazy(() => import('@/app/loadingSample/serverComponentRandomUser1'))
import ServerComponentRandomUser1 from '@/app/loadingSample/_sample1/serverComponentRandomUser1'
import ServerComponentRandomUser2 from '@/app/loadingSample/_sample2/serverComponentRandomUser2'
import LoadingSampleLoading1 from '@/app/loadingSample/_sample1/loading'
import LoadingSampleLoading2 from '@/app/loadingSample/_sample2/loading'
import {Suspense} from 'react'
// import dynamic from 'next/dynamic'

// const ClientComponentRandomUser = dynamic(() => import('@/app/loadingSample/serverComponentRandomUser'))

export default async function LoadingSamplePage() {

  // await queryClient.prefetchQuery({
  //   queryKey: ['randomUser'],
  //   queryFn: getRandomUserInternal
  // })
  // const dehydratedRandomUserQuery = dehydrate(queryClient)

  // const {data, isSuccess} = useQuery({
  //   queryKey: ['randomUser'],
  //   queryFn: getRandomUserExternal
  // })

  return (
    <div>
      <div>로딩샘플페이지</div>
      {/* 각각의 fetch 를 사용하는 컴포넌트를 Suspense 로 감싸면, Streaming Server Rendering 을 할 수 있다. */}
      <Suspense fallback={<LoadingSampleLoading1 />}>
        <ServerComponentRandomUser1></ServerComponentRandomUser1>
      </Suspense>
      <Suspense fallback={<LoadingSampleLoading2 />}>
        <ServerComponentRandomUser2></ServerComponentRandomUser2>
      </Suspense>
    </div>
  )
}