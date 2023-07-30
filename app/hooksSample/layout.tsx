export default function HooksSampleLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>hooks sample 레이아웃</div>
        <div>{children}</div>
    </div>
  )
}