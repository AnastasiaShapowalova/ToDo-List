import React, { Fragment } from 'react'

const Button = (props) => {
  const { className, onClick, type, children, disabled } = props
  return (
    <Fragment>
      <button
        onClick={onClick}
        className={className}
        type={type}
        disabled={disabled}>
        {children}
      </button>
    </Fragment>
  )
}

export default Button
