import React from 'react'
import { Badge } from '../../components'
import { GrClose } from 'react-icons/gr'
import './style/style.css'

//additional list
const SidebarCustomList = (props) => {
  const { items, isRemovable, onRemove, onClickItem } = props

  // deleting list
  const removeList = (id) => {
    onRemove(id)
  }

  // items - list of lists
  const customList = items.map((item, index) => (
    <li
      key={index}
      className={item.active ? 'custom-list active' : 'custom-list'}
      onClick={onClickItem ? () => onClickItem(item) : null}>
      <span className="custom-list-name">
        <Badge color={item.color} />
        <span>{item.name}</span>
      </span>
      <span className="count_s"></span>
      {isRemovable && (
        <GrClose onClick={() => removeList(item.id)} className="icon remove" />
      )}
    </li>
  ))

  return (
    <ul className="overflow">
      <p className="custom-list-heading">My lists</p>
      {/* additional list */}
      {customList}
    </ul>
  )
}

export default SidebarCustomList
