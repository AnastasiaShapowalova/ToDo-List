import './App.css'
import React from 'react'
import { Body } from './components/Body'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Body />
    </div>
  )
}

export default App
