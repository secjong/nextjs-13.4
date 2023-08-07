'use client'

export default function Modal({
  children
}: {
  children: React.ReactNode
}) {
  alert('모달 띄워짐!')
  return (
    <div>
      <h1>모달</h1>
      {children}
    </div>
  )
}
