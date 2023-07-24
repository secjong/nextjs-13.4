'use client'

import {useSelectedLayoutSegments} from 'next/navigation'

export default function Breadcrums() {

  const selectedLayoutSegments = useSelectedLayoutSegments()

  return (
    <div>
      <div>
        {selectedLayoutSegments.reduce((acc, item, index, thisArr) => {
          // bread crumbs 를 만든다
          if (acc !== '') {
            // 첫 경로가 아니면
            acc += ' >'
          }
          acc += ` ${item}`
          return acc
        }, '')}
      </div>
    </div>
  )
}