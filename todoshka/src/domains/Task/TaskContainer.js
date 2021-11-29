import React from 'react'
import { Button, Input } from '../../components'
import { TaskItems } from './'
import { useSetTask, useInputValue } from '../../hooks'
import DB from '../../_constants_/db.json'

const TaskContainer = (props) => {
  const { inputValue, setValue } = useInputValue()
  const { onAddTask, task } = useSetTask(DB.tasks, setValue)
  const { list } = props

  return (
    <div className="task-items">
      <TaskItems task={task} list={list} />
      <div style={{ display: 'flex' }}>
        <Button
          type="submit"
          className="add-task"
          onClick={() =>
            onAddTask({ id: Math.random(), listId: 2, text: inputValue })
          }
          disabled={inputValue === '' || inputValue === ' '}>
          +
        </Button>
        <Input
          type="text"
          className="enter-task"
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}></Input>
      </div>
    </div>
  )
}

export default TaskContainer
