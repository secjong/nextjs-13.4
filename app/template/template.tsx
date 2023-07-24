import Link from 'next/link'

export default function TemplateTemplate({
  children
}: {
  children: React.ReactNode
}) {

  console.log('template 마운트!')

  return (
    <div className="template">
      <div>template</div>
      <div>
        <Link href="/template/subRoute1">subRoute1 이동</Link>
        <Link href="/template/subRoute2">subRoute2 이동</Link>
      </div>
      <div>{children}</div>
    </div>
  )
}