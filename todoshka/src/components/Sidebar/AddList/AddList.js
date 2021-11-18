import React from 'react'

const AddList = ({ items }) => {
  return (
    <ul>
      <p className="sidebar-heading">My lists</p>
      {items.map((obj) => (
        <li className={obj.active ? 'todo-addlist active' : 'todo-addlist'}>
          {obj.icon}
          <span>{obj.name}</span>
          <span className="count_s">{obj.count}</span>
        </li>
      ))}
    </ul>
  )
}

export default AddList
