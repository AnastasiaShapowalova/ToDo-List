import React, { Fragment, useState } from 'react'
import ICONS from '../../constants/icons'

const Icons = () => {
  const [selector, setSelector] = useState(true)
  console.log(selector)

  return (
    <Fragment>
      {ICONS.map((icon, index) => (
        <span
          onClick={() => setSelector(index)}
          key={index}
          className={selector === index && 'icon-active'}>
          {icon.icon}
        </span>
      ))}
    </Fragment>
  )
}

export default Icons
