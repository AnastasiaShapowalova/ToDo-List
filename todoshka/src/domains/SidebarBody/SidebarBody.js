import React, { useContext } from 'react'
import { Categories, List, SearchInput } from '../../components'
import { SidebarModal } from '..'
//context
import { GlobalContext } from '../../contexts'
//constants
import { DB } from '../../_constants_'
import { MENU } from '../../_constants_'

function SidebarBody() {
  //list = DB.lists[1] {color: "x", colorId: x, id: x, name: 'x'}
  const { lists } = useContext(GlobalContext)

  return (
    <div className="sidebar-wrapper">
      <SearchInput />
      <Categories
        //transfer data of main lists
        menu={MENU}
      />
      {/* additional categories (adding by user) */}
      <List
        // will change later
        onClickItem={(item) => console.log(item)}
        items={lists}
        isRemovable={true}
      />
      {/* add new list  */}
      <SidebarModal color={DB.color} />
    </div>
  )
}

export default SidebarBody
