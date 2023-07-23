import getQueryClient from '@/components/@external/react-query/getQueryClient'
import {Hydrate, dehydrate} from '@tanstack/react-query'
import {getRandomUserInternal} from '@/lib/internalApi'
import ClientComponentHydrateSample from '@/app/clientComponentHydrateSample'

export default async function ServerComponentReactQueryPrefetchSample() {

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['randomUser'], getRandomUserInternal) // 중요!!!
  const dehydratedRandomUser = dehydrate(queryClient)

  return (
    <div>
      <div>
        <h2>react-query prefetch 서버 컴포넌트</h2></div>
      <div>
        <Hydrate state={dehydratedRandomUser}>
          <ClientComponentHydrateSample></ClientComponentHydrateSample>
        </Hydrate>
      </div>
    </div>
  )
}