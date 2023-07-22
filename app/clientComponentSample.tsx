'use client'

import {useAtom} from 'jotai'

import {countAtom} from '@/store/data'

export default function ClientComponentSample({
  children,
}: {
  children: React.ReactNode
}) {

  const [count, setCount] = useAtom(countAtom);

  return (
    <div>

      {/* jotai 를 사용해서 전역 store 저장 */}
      <div>
        <h2>클라이언트 컴포넌트</h2></div>
      <div>
        <span>count: </span>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={() => {
          setCount(count + 1);
        }}>increase</button>
        <button onClick={() => {
          setCount(count - 1);
        }}>decrease</button>
      </div>

      {/* 서버 컴포넌트를 클라이언트 컴포넌트 자식으로 넣는 방법 */}
      <div>
        {children}
      </div>

    </div>
  )
}