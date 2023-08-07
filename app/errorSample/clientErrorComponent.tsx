'use client'

import {useState, useEffect} from 'react'

export default function ClientErrorComponent() {

  useEffect(() => {
    // throw new Error('클라이언트컴포넌트 에러 발생')
  }, [])
  
  return (
    <div>클라이언트 에러 컴포넌트</div>
  )
}