'use client'

import {ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute, useState} from 'react'

export default function useInput(initialValue: string | number) {

  const [value, setValue] = useState(initialValue)

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {
    value: value,
    onChange: valueChangeHandler
  }
}