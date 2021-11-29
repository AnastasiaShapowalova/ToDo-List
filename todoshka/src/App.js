import React from 'react'
import { SidebarBody } from './domains/Sidebar'
import { TaskBody } from './domains/Task'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="todo-wrapper">
        <SidebarBody />
        <TaskBody />
      </div>
    </div>
  )
}

export default App
