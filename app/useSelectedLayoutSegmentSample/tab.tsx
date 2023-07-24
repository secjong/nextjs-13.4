'use client'

import {useSelectedLayoutSegment} from 'next/navigation'
import Link from 'next/link'

export default function Tab({
  slug
}: {
  slug: {
    id: string,
    title: string,
    contents: string
  }
}) {

  const selectedLayoutSegment = useSelectedLayoutSegment()
  const isActiveTab = slug.id === selectedLayoutSegment

  return (
    <div>
      {/* 현재 활성화된 segment이면 bold 처리된다. */}
      <Link href={`/useSelectedLayoutSegmentSample/${slug.id}`} style={{ fontWeight: isActiveTab ? 'bold' : 'normal' }}>
        {slug.title}
      </Link>
    </div>
  )
}