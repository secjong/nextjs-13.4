'use client'

import { useEffect } from 'react'

export default function ErrorSampleError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>에러가 발생했습니다!</h2>
      <div>에러 메시지: {error.message}</div>
      <div>에러 이름: {error.name}</div>
      <div>에러 키(서버에러일때만 존재한다.): {error.digest}</div>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        재시도하기
      </button>
    </div>
  )
}