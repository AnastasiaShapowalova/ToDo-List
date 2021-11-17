import React from 'react'
import { Radio } from 'antd'

const Input = (props) => {
  const { input, resetInputValue } = props

  return (
    <>
      <Radio />
      <input
        type="text"
        value={input}
        onChange={resetInputValue}
        className="todo-input"
      />
    </>
  )
}

export default Input
