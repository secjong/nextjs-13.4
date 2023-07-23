import {Query, QueryClient} from '@tanstack/react-query'
import {cache} from 'react'

/*
  서버컴포넌트에서 prefetch 하기 위해서(prefetchQuery)
  멀티 사용자마다, 각 request 마다 새로운 QueryClient 를 생성하여 사용하여야 함
  다만, 생성시 cached 된 싱글턴 객체를 사용하여 성능 제고

  사용순서
  1. QueryClient 싱글턴 객체를 불러온다.
  2. prefetchQuery 를 사용하여 prefetch 한 후, 동기적으로 기다린다.
  3. 가져온 쿼리를 클라이언트 컴포넌트로 넘기기 위해 dehydrate 상태로 만든다.
  4. 쿼리를 사용할 클라이언트 컴포넌트를 <Hydrate> 로 감싸고, state props 로 dehydrate 된 쿼리를 넘긴다.
*/

const getQueryClient = cache(() => new QueryClient)
export default getQueryClient