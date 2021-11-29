import { useState } from 'react'
import DB from '../_constants_/db.json'

const useSetList = () => {
  //initial value - a list of existing lists
  const [lists, setLists] = useState(
    DB.lists.map((item) => {
      // output color name by ID
      item.color = DB.color.filter((color) => color.id === item.colorId)[0].name
      return item
    })
  )

  // a new one is added to the summit at the end of the list lists
  const onAddList = (obj) => {
    const newList = [...lists, obj]
    setLists(newList)
  }

  return { lists, onAddList, setLists }
}

export default useSetList
