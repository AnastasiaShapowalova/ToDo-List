import React from 'react'
import { Input } from '../../components'
import './style/style.css'

const TaskItems = (props) => {
  const { task, list } = props

  const listTask = task.filter((task) => task.listId === list.id)

  const newTask = listTask.map((task) => (
    <div key={task.id} className="task-wrapper">
      <div>
        <input id={`task-${task.id}`} type="checkbox" className="checkbox" />
        <label htmlFor={`task-${task.id}`} className="checkbox-label" />
      </div>
      <p className="task-body">{task.text}</p>
      <div>
        <Input readOnly type="checkbox" />
      </div>
    </div>
  ))
  return (
    <div>
      {/* display of tasks */}
      {newTask}
    </div>
  )
}

export default TaskItems
