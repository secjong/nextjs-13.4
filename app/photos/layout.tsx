export default function PhotosLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>photos layout</div>
      <div>{children}</div>
    </div>
  )
}