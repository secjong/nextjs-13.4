import {getRandomUserInternal} from '@/lib/internalApi'
import getQueryClient from '@/components/@external/react-query/getQueryClient'

export default async function ServerComponentRandomUser2() {

  const queryClient = getQueryClient()
  const {results, info} = await queryClient.fetchQuery({
    queryKey: ['randomUser2'],
    queryFn: getRandomUserInternal,
  })

  return (
    <div>
      {info?.seed}
    </div>
  )
}