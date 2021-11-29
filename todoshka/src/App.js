import React from 'react'
import { SidebarBody } from './domains'
import { TaskContainer } from './pages'
//context
import { GlobalContext } from './contexts'
//hooks
import {
  useSetVisible,
  useSetList,
  useInputValue,
  useSetSelectedColor,
  useSetTask
} from './hooks'
import useTaskValue from './domains/TaskBody/hooks/useTaskValue'
//firebase
// import { firestore } from './servises'
//constants
import { DB } from './_constants_'
// styles
import './App.css'
import './styles/config.style.css'

function App() {
  const { setIsVisible, isVisible } = useSetVisible()
  const { lists, onAddList, setLists } = useSetList()
  const { inputValue, setValue, setInputValue } = useInputValue()
  const { taskValue, setTask } = useTaskValue()
  const { task, onAddTask } = useSetTask(DB.tasks, setTask)
  const { selectedColor, setSelectedColor, setColor } = useSetSelectedColor()

  //remove list
  const onRemove = (id) => {
    const newList = lists.filter((item) => item.id !== id)
    setLists(newList)
  }
  return (
    <div className="App">
      <div className="todo-wrapper">
        <GlobalContext.Provider
          value={{
            setIsVisible,
            isVisible,
            lists,
            onAddList,
            setLists,
            inputValue,
            setValue,
            onRemove,
            selectedColor,
            setSelectedColor,
            setColor,
            setInputValue,
            taskValue,
            setTask,
            task,
            onAddTask
          }}>
          <SidebarBody />
          <TaskContainer />
        </GlobalContext.Provider>
      </div>
    </div>
  )
}

export default App
