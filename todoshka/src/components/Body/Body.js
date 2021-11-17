import React from 'react'
import TasksList from '../TasksList/TasksList'
import { useSetInput } from '../../hooks'
import { useSetTodos } from '../../hooks'
import { ButtonAdd } from '../ButtonAdd'
import { Heading } from '../Heading'
import { Input } from '../Input'

const ToDoList = () => {
  const { input, resetInputValue } = useSetInput('')
  const { todos, setArr } = useSetTodos(input)

  return (
    <div className="header">
      <ButtonAdd setArr={setArr} />
      <Heading />
      <Input input={input} resetInputValue={resetInputValue} />
      <TasksList todos={todos} />
    </div>
  )
}

export default ToDoList
