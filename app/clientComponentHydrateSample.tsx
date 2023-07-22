'use client'

import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {getRandomUser} from '@/lib/data'
import {Root, Result} from '@/types/randomUser'
import Image from 'next/image'

export default function ClientComponentHydrateSample() {

  // prefetch 된 데이터는 서버상태관리에 저장되어, Hydrate 로 감싸진 클라이언트 컴포넌트에서 useQuery로 접근할 수 있다.
  let {data}: UseQueryResult<Root> = useQuery({
    queryKey: ['randomUser'],
    queryFn: getRandomUser
  })

  return (
    <div>
      <div>
        <span>seed: </span>
        <span>{data?.info.seed}</span>
      </div>
      <div>
        <ul>
          {/* prefetch 데이터(초기값) */}
          {data?.results.map((item: Result) => {
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
      </div>
    </div>
  )
}