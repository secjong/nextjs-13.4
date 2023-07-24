export default function UserDetailLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>user detail layout</div>
      <div>{children}</div>
    </div>
  )
}