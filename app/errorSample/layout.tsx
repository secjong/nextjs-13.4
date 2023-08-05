export default function ErrorSampleLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>에러 레이아웃</div>
      <div>{children}</div>
    </div>
  )
}