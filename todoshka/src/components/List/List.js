import React, { useContext } from 'react'
import { Badge } from '../../components'
//icon
import { GrClose } from 'react-icons/gr'
//context
import { GlobalContext } from '../../contexts'

//"custom" list
const List = (props) => {
  const { onClickItem } = props

  //list = DB.lists[1] {color: "x", colorId: x, id: x, name: 'x'}
  //onRemove - returns list without an el which id == click el id
  const { lists, onRemove } = useContext(GlobalContext)
  // deleting list
  const removeList = (id) => {
    onRemove(id)
  }

  // items - list of lists
  const customList = lists.map((item, index) => (
    <li
      key={index}
      // need change later
      className={item.active ? 'custom-list active-list' : 'custom-list'}
      // need change later
      onClick={onClickItem ? () => onClickItem(item) : null}>
      <span className="custom-list-name">
        <Badge color={item.color} />
        <span>{item.name}</span>
      </span>
      {/* <span className="count_s"></span> */}
      <GrClose onClick={() => removeList(item.id)} className="icon remove" />
    </li>
  ))

  return (
    <ul>
      <p className="custom-list-heading">My lists</p>
      {/* additional list */}
      {customList}
    </ul>
  )
}

export default List
