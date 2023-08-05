'use client'

import {useState} from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function QueryClientProviders({
  children
}: {
  children: React.ReactNode
}) {

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        cacheTime: 0,
        staleTime: 0,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchInterval: 0,
        refetchOnMount: false,
        suspense: true
      }
    }
  }));
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}