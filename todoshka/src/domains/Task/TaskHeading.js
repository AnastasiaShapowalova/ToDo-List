import React, { Fragment } from 'react'
import { Button } from '../../components'
import './style/style.css'

function TaskHeading(props) {
  const { list } = props

  return (
    <Fragment>
      <h1 className="task-title">{list.name}</h1>
      <div className="task-heading">
        <div className="complete-wrapper">
          <p className="count-completed">1 Completed &#9900;</p>
          <Button className="button-transparent clear">Clear</Button>
        </div>
        <Button className="button-transparent show">Show</Button>
      </div>
    </Fragment>
  )
}

export default TaskHeading
