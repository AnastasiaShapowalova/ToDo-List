import { useState } from 'react'

const useTaskValue = () => {
  const [taskValue, setTaskValue] = useState('')
  const setTask = (value) => {
    setTaskValue(value)
  }

  return { taskValue, setTaskValue, setTask }
}

export default useTaskValue
