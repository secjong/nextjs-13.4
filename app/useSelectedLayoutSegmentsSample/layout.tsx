import Breadcrums from '@/app/useSelectedLayoutSegmentsSample/breadcrums'
import Link from 'next/link'

export default function UseSelectedLayoutSegmentsSampleLayout({
  children
}: {
  children: React.ReactNode
}) {

  const contentList = [
    {
      id: 'tabContentSample1',
      title: 'title1',
      contents: 'content1',
    },
    {
      id: 'tabContentSample1/tabContentSample1_1',
      title: 'title1_1',
      contents: 'content1_1'
    },
    {
      id: 'tabContentSample1/tabContentSample1_2',
      title: 'title1_2',
      contents: 'content1_2'
    },
    {
      id: 'tabContentSample2',
      title: 'title2',
      contents: 'content2'
    }
  ]

  return (
    <div>
      <div>use selected layout segments layout</div>
      <div>
        {contentList.map((item, index) => {
          return (<div key={index}>
            <Link href={`/useSelectedLayoutSegmentsSample/${item.id}`}>{item.title}</Link>
          </div>)
        })}
      </div>
      <Breadcrums></Breadcrums>
      <div>{children}</div>
    </div>
  )
}