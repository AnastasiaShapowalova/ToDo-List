import React, { useContext } from 'react'
//context
import { GlobalContext } from '../../contexts'

const Input = () => {
  // taskValue - retrieves data from
  // setTask - outputs data
  // onAddTask - adds to the list, clears the input
  const { taskValue, setTask, onAddTask } = useContext(GlobalContext)

  return (
    <div style={{ display: 'flex' }}>
      <button
        type="submit"
        className="add-task"
        onClick={() =>
          onAddTask({ id: Math.random(), listId: 2, text: taskValue })
        }
        disabled={taskValue === '' || taskValue === ' '}>
        +
      </button>
      <input
        type="text"
        className="enter-task"
        value={taskValue}
        onChange={(e) => setTask(e.target.value)}></input>
    </div>
  )
}

export default Input
