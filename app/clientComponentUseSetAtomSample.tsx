'use client'

import {useState} from 'react'
import {useSetAtom} from 'jotai'
import {countAtom} from '@/store/data'

export default function ClientComponentUseSetAtomSample() {

  const [inputCount, setInputCount] = useState(0); // 로컬 데이터
  const setCount = useSetAtom(countAtom); // 전역 데이터 setter

  return (
    <div>
      <div>
        <h2>useSetAtom 클라이언트 컴포넌트</h2></div>
      <div>
        <span>count: </span>
        <input type="number" placeholder="숫자를 입력해주세요." value={inputCount} onChange={(e) => {
          setInputCount(Number(e.target.value));
        }}></input>
        <button onClick={() => {
          setCount(inputCount);
        }}>제출</button>
      </div>
    </div>
  )
}