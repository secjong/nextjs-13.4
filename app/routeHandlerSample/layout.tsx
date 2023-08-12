export default function RouteHandlerSampleLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>Route Handler Sample 레이아웃</div>
      <div>{children}</div>
    </div>
  )
}