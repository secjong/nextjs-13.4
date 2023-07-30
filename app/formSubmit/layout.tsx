export default function FormSubmitLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>form submit 레이아웃</div>
      <div>{children}</div>
    </div>
  )
}