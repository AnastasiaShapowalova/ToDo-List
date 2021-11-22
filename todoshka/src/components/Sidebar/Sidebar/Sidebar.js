import React, { useState } from 'react'
import { MainList } from '../MainList'
import { AddList } from '../AddList'
import { AddButton } from '../AddButton'
import { BsFillWalletFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { CgCalendarToday } from 'react-icons/cg'
import { FiFlag } from 'react-icons/fi'
import DB from '../../constants/db.json'

function Sidebar() {
  //hook show list of additional lists
  const [lists, setLists] = useState(
    DB.lists.map((item) => {
      item.color = DB.color.filter((color) => color.id === item.colorId)[0].name
      console.log(item)
      return item
    })
  )

  return (
    <div className="todo_sidebar">
      <MainList
        menu={[
          {
            icon: <FiFlag className="icon" />,
            name: 'Flag',
            count: 0,
            active: false,
            className: 'f_active'
          },
          {
            icon: <BsFillWalletFill className="icon" />,
            name: 'All',
            count: 1,
            active: false,
            className: 'a_active'
          },
          {
            icon: <CgCalendarToday className="icon" />,
            name: 'Sheduled',
            count: 1,
            active: true,
            className: 's_active'
          },
          {
            icon: <BsFillCalendarDateFill className="icon" />,
            name: 'Today',
            count: 7,
            active: false,
            className: 't_active'
          }
        ]}
      />
      {/* additional categories (by user) */}
      <AddList items={lists} isRemovable={true} color={DB.color} />
      {/* add new list  */}
      <AddButton />
    </div>
  )
}

export default Sidebar
