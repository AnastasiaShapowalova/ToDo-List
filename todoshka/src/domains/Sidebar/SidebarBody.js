import React from 'react'
import { SidebarMainList, SidebarCustomList, SidebarModal } from './'
import { useSetList } from '../../hooks'
import DB from '../../_constants_/db.json'
import { MENU } from './_constants_'

function SidebarBody() {
  const { lists, onAddList, setLists } = useSetList()
  // console.log(lists)
  return (
    <div className="sidebar-wrapper">
      <SidebarMainList
        //transfer data of main lists
        menu={MENU}
      />
      {/* additional categories (adding by user) */}
      <SidebarCustomList
        onClickItem={(item) => console.log(item)}
        items={lists}
        isRemovable={true}
        onRemove={(id) => {
          const newList = lists.filter((item) => item.id !== id)
          console.log(id)
          console.log(newList)
          setLists(newList)
        }}
      />
      {/* add new list  */}
      <SidebarModal color={DB.color} onAdd={onAddList} />
    </div>
  )
}

export default SidebarBody
