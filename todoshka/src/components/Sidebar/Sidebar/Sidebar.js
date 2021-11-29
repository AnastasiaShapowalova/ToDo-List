import React from 'react'
import { MainList } from '../MainList'
import { AddList } from '../AddList'
import { IoIosList } from 'react-icons/io'
import { BsFillWalletFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { CgCalendarToday } from 'react-icons/cg'
import { FiFlag } from 'react-icons/fi'

function Sidebar() {
  return (
    <div className="todo_sidebar">
      <MainList
        menu={[
          {
            icon: <FiFlag className="icon" />,
            name: 'Flag',
            count: 0,
            active: true,
            class: 'f_active'
          },
          {
            icon: <BsFillWalletFill className="icon" />,
            name: 'All',
            count: 1,
            active: true,
            class: 'a_active'
          },
          {
            icon: <CgCalendarToday className="icon" />,
            name: 'Sheduled',
            count: 1,
            active: true,
            class: 's_active'
          },
          {
            icon: <BsFillCalendarDateFill className="icon" />,
            name: 'Today',
            count: 7,
            active: true,
            class: 't_active'
          }
        ]}
      />
      <AddList
        items={[
          {
            icon: <IoIosList className="icon" />,
            name: 'work',
            count: 2,
            active: false
          },
          {
            icon: <IoIosList className="icon" />,
            name: 'hobby',
            count: 4,
            active: true
          },
          {
            icon: <IoIosList className="icon" />,
            name: 'study',
            count: 1,
            active: false
          },
          {
            icon: <IoIosList className="icon" />,
            name: 'home',
            count: 8,
            active: false
          }
        ]}
      />
    </div>
  )
}

export default Sidebar
