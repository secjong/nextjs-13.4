import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import JotaiProvider from '@/components/@external/jotai/jotaiProvider'
import QueryClientProviders from '@/components/@external/react-query/queryClientProviders'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 샘플',
  description: 'Next.js 학습용 프로젝트 입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <QueryClientProviders>
        <JotaiProvider>
          <div>
            <h1><Link href="/">헤더영역</Link></h1>            
          </div>
          <hr />
          {children}
          <hr />
          <div>
            <h2>푸터영역</h2>
            {/* 네비게이션 영역 */}
            <div>
              <ul>
                <li><Link href="/users/123" prefetch={false}>유저 상세 이동</Link></li>
                <li><Link href="/photos/123" prefetch={false}>포토 상세 이동</Link></li>
                <li><Link href="/dashboard/week" prefetch={false}>주 대시보드 이동</Link></li>
                <li><Link href="/dashboard/month" prefetch={false}>월 대시보드 이동</Link></li>
                <li><Link href="/feeds" prefetch={false}>피드 이동</Link></li>
                <li><Link href="/feed" prefetch={false}>피드2 이동</Link></li>
                <li><Link href="/useSelectedLayoutSegmentSample" prefetch={false}>링크샘플 이동</Link></li>
                <li><Link href="/useSelectedLayoutSegmentsSample" prefetch={false}>breadcrums샘플 이동</Link></li>
                <li><Link href="/template" prefetch={false}>template 샘플 이동</Link></li>
                <li><Link href="/loadingSample" prefetch={false}>loading 샘플 이동</Link></li>
                <li><Link href="/errorSample" prefetch={false}>error 샘플 이동</Link></li>
                <li><Link href="/routeHandlerSample" prefetch={false}>route handler 샘플 이동</Link></li>
              </ul>
            </div>
          </div>
        </JotaiProvider>
        </QueryClientProviders>
      </body>
    </html>
  )
}
