import React, { useContext } from 'react'
import { Heading } from '../../components'
import { TaskBody } from '../../domains'
//context
import { GlobalContext } from '../../contexts'

const TaskContainer = () => {
  //  will be changed later [lists]
  const { lists } = useContext(GlobalContext)

  return (
    <div className="tasks-wrapper">
      {/* will be changed later [lists] */}
      {lists && <Heading list={lists[1]} />}
      {/* will be changed later [lists] */}
      {lists && <TaskBody list={lists[1]} />}
    </div>
  )
}

export default TaskContainer
