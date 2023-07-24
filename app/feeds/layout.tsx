import Link from 'next/link'

export default function FeedsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>feed layout</div>
      <Link href="/photos/123">피드 포토 모달 띄우기</Link>
      <div>{children}</div>
    </div>
  )
}