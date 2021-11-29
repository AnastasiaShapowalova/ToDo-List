import React from 'react'
import { TaskHeading, TaskContainer } from './'
import { useSetList } from '../../hooks'

const TaskBody = () => {
  const { lists } = useSetList()

  return (
    <div className="tasks-wrapper">
      {lists && <TaskHeading list={lists[1]} />}
      {lists && <TaskContainer list={lists[1]} />}
    </div>
  )
}

export default TaskBody
