import React from 'react'

const Categories = (props) => {
  const { menu } = props

  const mainList = menu.map((obj, index) => (
    <li key={index} className={obj.active ? obj.className : 'mainlist'}>
      <div>
        {obj.icon}
        <span className="count_l">{obj.count}</span>
      </div>
      <div>{obj.name}</div>
    </li>
  ))

  return (
    <ul>
      {/* main lists */}
      {mainList}
    </ul>
  )
}

export default Categories
/////////////////////////////////
