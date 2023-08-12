'use client'

import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {getRandomUserExternal} from '@/lib/externalApi'
import {User, Result} from '@/types/randomUser'
import Image from 'next/image'
import {randomUserListAtom} from '@/store/data'
import {useAtom} from 'jotai'
import getQueryClient from '@/components/@external/react-query/getQueryClient'

export default function ClientComponentHydrateSample() {

  // 클라이언트에서 사용할 변수
  const [randomUserList, setRandomUserList] = useAtom(randomUserListAtom)

  // prefetch 된 데이터는 서버상태관리에 저장되어, Hydrate 로 감싸진 클라이언트 컴포넌트에서 useQuery로 접근할 수 있다.
  // useQuery 실행시 새로운 쿼리 인스턴스가 생성된다!
  const {data, error, isSuccess, isError, isLoading, refetch}: UseQueryResult<User> = useQuery({
    queryKey: ['randomUser'],
    queryFn: getRandomUserExternal
  })

  // 클라이언트 컴포넌트에서 react query 사용하여 추가 데이터 fetch 하기
  const appendRandomUser = async () => {
    const queryClient = getQueryClient()
    const data = await queryClient.fetchQuery({
      queryKey: ['randomUser-append'],
      queryFn: getRandomUserExternal
    })
    setRandomUserList([...randomUserList, ...data.results])
  }
  
  return (
    <div>
      <div>
        <span>seed: </span>
        <span>{data?.info.seed}</span>
      </div>
      <div>
        <ul>

          {/* prefetch 데이터(초기값) */}
          {data?.results?.map((item: Result) => {
            return (
              <li key={item.id.value}>
                <span>
                  <Image 
                    src={item.picture.thumbnail}
                    alt={item.name.title}
                    width={30}
                    height={30}
                  ></Image>
                </span>
                <span>이름: {item.name.last} {item.name.first}</span>
                <span>전화번호: {item.phone}</span>
              </li>
            )
          })}

          {randomUserList?.map((item: Result) => {
            return (
              <li key={item.id.value}>
                <span>
                  <Image 
                    src={item.picture.thumbnail}
                    alt={item.name.title}
                    width={30}
                    height={30}
                  ></Image>
                </span>
                <span>이름: {item.name.last} {item.name.first}</span>
                <span>전화번호: {item.phone}</span>
              </li>
            )
          })}

        </ul>

        <div>
          <span>
            <button onClick={() => {
              appendRandomUser()
            }}>더보기</button>
          </span>
        </div>

      </div>
    </div>
  )
}