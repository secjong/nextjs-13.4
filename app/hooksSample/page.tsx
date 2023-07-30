'use client'

import useOnlineStatus from '@/hooks/useOnlineStatus'
import InputSampleComponent from '@/app/hooksSample/inputSample'

export default function HooksSamplePage() {
  const isOnline = useOnlineStatus()
  return (
    <div>
      {isOnline ? '온라인' : '오프라인'}
      <InputSampleComponent></InputSampleComponent>
    </div>
  )
}