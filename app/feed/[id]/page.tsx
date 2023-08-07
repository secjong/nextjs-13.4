import Frame from '@/components/frame/frame'

export default function PhotoDetailPage({
  params: {
    id
  }
}: {
  params: {
    id: string
  }
}) {
  return (
    <div>
      <h1>원래 페이지</h1>
      <Frame id={id}></Frame>
    </div>
  )
}
