import { useState } from 'react'
import DB from '../_constants_/db.json'

const useSetSelectedColor = () => {
  const [selectedColor, setSelectedColor] = useState(DB.color[0].id)
  const setColor = (id) => {
    setSelectedColor(id)
  }

  return { selectedColor, setSelectedColor, setColor }
}

export default useSetSelectedColor
