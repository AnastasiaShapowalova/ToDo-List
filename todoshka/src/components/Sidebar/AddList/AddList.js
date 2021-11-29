import React from 'react'
import { Badge } from '../Badge'
// import styled from 'styled-components'

//additional list
const AddList = (props) => {
  const { items, isRemovable } = props

  // const Title = styled.span`
  /* font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  ` */

  return (
    <ul>
      <p>My lists</p>
      {items.map((obj, index) => (
        <li
          key={index}
          className={obj.active ? 'todo-addlist active' : 'todo-addlist'}>
          <i>
            <Badge color={obj.color} />
          </i>

          <span>{obj.name}</span>
          <span className="count_s">{obj.count}</span>
        </li>
      ))}
      {/* <Title>Some text</Title> */}
    </ul>
  )
}

export default AddList
