import React from 'react'

const TaskItem = (props) => {
  //task = DB.tasks  {id: x, listId: x, text: 'x', completed: x}
  //list = DB.lists[1] {color: "x", colorId: x, id: x, name: 'x'}
  const { task, list } = props

  //filtering: whether id of the list coincides with the listId of the task
  const listTask = task.filter((task) => task.listId === list.id)

  // display all tasks
  const newTask = listTask.map((task) => (
    <div key={task.id} className="task-wrapper">
      <div>
        <input id={`task-${task.id}`} type="checkbox" className="checkbox" />
        <label htmlFor={`task-${task.id}`} className="checkbox-label" />
      </div>
      <p className="task-body">{task.text}</p>
      <div>
        <input type="checkbox" />
      </div>
    </div>
  ))

  return (
    <div>
      {/* display tasks */}
      {newTask}
    </div>
  )
}

export default TaskItem
