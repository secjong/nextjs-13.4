export default function ServerActionLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>Server Action Sample 레이아웃</div>
      <div>{children}</div>
    </div>
  )
}