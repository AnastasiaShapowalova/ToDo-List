import React from 'react'
import { Sidebar } from './components/Sidebar/Sidebar/index'
import Tasks from './components/Tasks/Tasks'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="todo">
        <Sidebar />
        <Tasks />
      </div>
    </div>
  )
}

export default App
