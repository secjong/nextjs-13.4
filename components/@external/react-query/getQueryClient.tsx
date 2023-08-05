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

/*
cacheTime: 이 시간동안 동일한 key의 쿼리 인스턴스가 또 생성되었을 때, 캐시에 있는 데이터를 반환한다.
staleTime: fetch 후 데이터가 stale 상태로 변하는 시간. stale 상태의 데이터는 사용할 수 없고, 새롭게 fetch 해오게 된다.
stale 데이터와 cache 데이터는 서로 아무런 관련이 없다.
stale 데이터가 다음단계로 cache 데이터가 되는게 아니라,
stale 데이터는 더이상 사용할 수 없는 데이터로 간주하고, 새롭게 fetch 를 한다는 것이고.(staleTime 이 0이면 무조건 새로 fetch 해옴)
cache 데이터는 동일한 key의 쿼리 인스턴스가 cacheTime 이 지나기 전에 재호출되면, cache 데이터를 재사용한다는 것임.
(=> 물론, staleTime이 0 이면 새롭게 fetch를 하는데, fetch가 완료되어 새로운 데이터를 보여주기 전까지 이 cache 데이터를 잠깐 보여준다.)
cache 데이터는 fetch 후에 새로운 데이터로 자동 교체된다.
*/
const getQueryClient = cache(() => new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // 기본값 3. 에러시 3번까지 retry 한다는 의미
      cacheTime: 0, // inactive 상태가 된 쿼리 인스턴스를 캐시에 유지하는 시간. 기본값 5분임.
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: 0,
      refetchOnMount: false,
      suspense: true,
    }
  }
}))
export default getQueryClient