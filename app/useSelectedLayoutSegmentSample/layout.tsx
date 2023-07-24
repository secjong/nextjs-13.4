import Tab from '@/app/useSelectedLayoutSegmentSample/tab'

export default function UseSelectedLayoutSegmentSampleLayout({
  children
}: {
  children: React.ReactNode
}) {

  const contentList = [
    {
      id: 'tabContentSample1',
      title: 'title1',
      contents: 'content1'
    },
    {
      id: 'tabContentSample2',
      title: 'title2',
      contents: 'content2'
    }
  ]

  return (
    <div>
      <div>use selected layout segment layout</div>
      {contentList.map((item) => {
        return (
          <Tab key={item.id} slug={item}></Tab>
        )
      })}
      <div>{children}</div>
    </div>
  )
}