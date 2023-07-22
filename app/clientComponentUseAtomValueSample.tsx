'use client'

import {useAtomValue} from 'jotai'
import {countAtom} from '@/store/data'

export default function ClientComponentUseAtomValueSample() {

  const count = useAtomValue(countAtom); // 전역 데이터

  return (
    <div>
      <div>
        <h2>useAtomValue 클라이언트 컴포넌트</h2></div>
      <div>
        <span>count: </span>
        <span>{count}</span>
      </div>
    </div>
  )
}