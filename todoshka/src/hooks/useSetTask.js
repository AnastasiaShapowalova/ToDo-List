import { useState } from 'react'

const useSetTask = (value, setValue) => {
  //add new obj to array
  const [task, setTask] = useState(value.map((item) => item))
  console.log(task)

  const onAddTask = (onAdd) => {
    const newList = [...task, onAdd]
    onSubmit()
    return setTask(newList)
  }

  // clear input
  const onSubmit = () => {
    setValue('')
  }

  return { task, onAddTask }
}

export default useSetTask
