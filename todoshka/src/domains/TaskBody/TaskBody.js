import React, { useContext } from 'react'
import { Input, TaskItem } from '../../components'
//context
import { GlobalContext } from '../../contexts'

const TaskBody = (props) => {
  //  will be changed later [lists]
  const { list } = props
  const { task } = useContext(GlobalContext)

  return (
    <div className="task-items">
      <TaskItem task={task} list={list} />
      <Input />
    </div>
  )
}

export default TaskBody
