import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const MainList = ({ menu }) => {
  return (
    <ul className="todo-list">
      <li className="todo-search">
        <AiOutlineSearch className="icon" />
        <input type="search" placeholder="Search" className="search"></input>
      </li>
      {menu.map((obj, index) => (
        <li
          key={index}
          className={obj.active ? obj.className : 'todo-mainlist'}>
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
