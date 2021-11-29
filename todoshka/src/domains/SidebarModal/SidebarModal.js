import React, { useContext } from 'react'
import { ModalWindow } from '../../components'
//context
import { GlobalContext } from '../../contexts'
//icons
import { AiOutlinePlus } from 'react-icons/ai'

const SidebarModal = (props) => {
  //DB.color
  const { color } = props
  const { setIsVisible, isVisible } = useContext(GlobalContext)

  return (
    <div>
      <li className="custom-modal" onClick={setIsVisible}>
        <AiOutlinePlus className="icon" />
        <span>Add list</span>
      </li>
      {isVisible && <ModalWindow color={color} />}
    </div>
  )
}

export default SidebarModal
