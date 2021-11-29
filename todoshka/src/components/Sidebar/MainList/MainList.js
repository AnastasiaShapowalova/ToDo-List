import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const MainList = ({ menu }) => {
  return (
    <ul className="todo-list">
      <li className="todo-search">
        <AiOutlineSearch className="icon" />
        <input></input>
      </li>
      {menu.map((obj) => (
        <li className={obj.active ? obj.class : 'todo-mainlist'}>
          <div>
            {obj.icon}
            <span className="count_l">{obj.count}</span>
          </div>
          <div>{obj.name}</div>
        </li>
      ))}
    </ul>
  )
}

export default MainList
