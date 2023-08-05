export default function LoadingSampleLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>loading sample 레이아웃</div>
        {children}
    </div>
  )
}