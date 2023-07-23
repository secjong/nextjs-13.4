export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>대시보드 사이드바</div>
      <div>{children}</div>
    </div>
  )
}