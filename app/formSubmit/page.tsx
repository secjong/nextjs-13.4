'use client'

import {useState} from 'react'

export default function FormSubmitPage() {

  const [count, setCount] = useState(0)
  // const [street, setStreet] = useState('')
  // const [city, setCity] = useState('')
  // const [zipCode, setZipCode] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    console.log(formData)
    const orderData = {
      ...Object.fromEntries(formData),
      count: count
    }
    console.log(orderData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <button type="button" onClick={() => setCount(count + 1)}>+</button>
          갯수: {count}
          <button type="button" onClick={() => setCount(count - 1)}>-</button>
        </label>
        <label>
          동/읍/면: 
          <input type="text" name="street" placeholder="입력"></input>
        </label>
        <label>
          시/군/구: 
          <input type="text" name="city" placeholder="입력"></input>
        </label>
        <label>
          우편주소: 
          <input type="text" name="zipCode" placeholder="입력"></input>
        </label>
        <button type="submit">전송</button>
      </form>
    </div>
  )
}