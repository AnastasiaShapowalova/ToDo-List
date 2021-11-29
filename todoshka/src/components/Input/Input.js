import React from 'react'

const Input = (props) => {
  const { type, className, value, onChange, placeholder } = props
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
