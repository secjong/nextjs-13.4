'use client'

import {useAtom} from 'jotai'

import {darkModeAtom} from '@/store/data'

export default function ClientComponentAtomWithStorageSample() {

  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <div>
      <button
        onClick={() => {
          setDarkMode(!darkMode)
        }}
      >{darkMode ? '화이트' : '다크'}모드로 전환하기</button>
    </div>
  )
}