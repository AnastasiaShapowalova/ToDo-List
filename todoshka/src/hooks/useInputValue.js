import { useState } from 'react'

const useInputValue = () => {
  const [inputValue, setInputValue] = useState('')
  const setValue = (value) => {
    setInputValue(value)
  }

  return { inputValue, setInputValue, setValue }
}

export default useInputValue
