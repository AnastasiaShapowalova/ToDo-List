import { useState } from 'react'

const useSetVisible = () => {
  const [isVisible, setVisible] = useState(false)
  const setIsVisible = () => {
    setVisible(!isVisible)
  }

  return { isVisible, setIsVisible }
}

export default useSetVisible
