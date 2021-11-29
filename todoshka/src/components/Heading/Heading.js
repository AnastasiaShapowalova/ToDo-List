import React, { Fragment } from 'react'

const Heading = (props) => {
  // will be changed later [lists]
  //list = DB.lists[1] {color: "x", colorId: x, id: x, name: 'x'}
  const { list } = props

  return (
    <Fragment>
      <h1 className="task-title">{list.name}</h1>
      <div className="task-heading">
        <div className="complete-wrapper">
          <p className="count-completed">1 Completed &#9900;</p>
          <button className="button-transparent clear">Clear</button>
        </div>
        <button className="button-transparent show">Show</button>
      </div>
    </Fragment>
  )
}

export default Heading
