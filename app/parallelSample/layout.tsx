import { useSelectedLayoutSegment } from 'next/navigation'

export default function ParallelSampleLayout({
  children,
  analytics,
  team,
  // normal
}: {
  children: React.ReactNode,
  analytics: React.ReactNode,
  team: React.ReactNode,
  // normal: React.ReactNode
}) {

  return (

    // @폴더명 으로 만든 Slot 만 Layout 의 props로 들어온다!(normal 은 무시됨)

    <div>
      <div>Parallel Sample 레이아웃</div>
      <div>{children}</div>
      <div>{analytics}</div>
      <div>{team}</div>
      {/* <div>{normal}</div> */}
    </div>
  )
}