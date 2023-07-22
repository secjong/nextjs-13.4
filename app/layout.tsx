import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import JotaiProvider from '@/app/components/@external/jotai'
import QueryClientProviders from '@/app/components/@external/react-query/queryClientProviders'

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
    <QueryClientProviders>
      <html lang="en">
        <body className={inter.className}>
          <JotaiProvider>
            {children}
          </JotaiProvider>
        </body>
      </html>
    </QueryClientProviders>
  )
}
