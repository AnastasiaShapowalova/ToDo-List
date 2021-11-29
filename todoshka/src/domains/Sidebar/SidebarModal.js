import React from 'react'
import { ModalWindow } from '../../components'
import { useSetVisible } from '../../hooks'
import { AiOutlinePlus } from 'react-icons/ai'

const SidebarModal = (props) => {
  const { color, onAdd } = props
  // hook hides shows modal
  const { isVisible, setIsVisible } = useSetVisible()

  return (
    <div>
      <li className="custom-modal" onClick={setIsVisible}>
        <AiOutlinePlus className="icon" />
        <span>Add list</span>
      </li>
      {isVisible && (
        <ModalWindow color={color} onAdd={onAdd} setIsVisible={setIsVisible} />
      )}
    </div>
  )
}

export default SidebarModal
