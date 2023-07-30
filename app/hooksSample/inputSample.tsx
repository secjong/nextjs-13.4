'use client'

import useInput from '@/hooks/useInput'

export default function InputSampleComponent() {

  const firstNameInput = useInput('')
  const lastNameInput = useInput('')

  return (
    <div>
      <label>
        first name: 
        <input type="text" {...firstNameInput}></input>
      </label>
      <label>
        last name: 
        <input type="text" {...lastNameInput}></input>
      </label>
      <div>
        {firstNameInput.value} {lastNameInput.value}
      </div>
    </div>
  )
}