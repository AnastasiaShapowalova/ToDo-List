import React from 'react'

//colors to choose from in modal
const Badge = (props) => {
  const { color, onClick, className } = props
  return <i onClick={onClick} className={`badge badge-${color} ${className}`} />
}

export default Badge
