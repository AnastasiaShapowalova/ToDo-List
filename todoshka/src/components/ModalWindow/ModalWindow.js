import React, { useContext } from 'react'
import { Badge } from '../'
//context
import { GlobalContext } from '../../contexts'

const ModalWindow = (props) => {
  const { color } = props

  const {
    setIsVisible,
    onAddList,
    selectedColor,
    setSelectedColor,
    setColor,
    inputValue,
    setInputValue,
    setValue
  } = useContext(GlobalContext)

  // default value of the modal - closing after OK, empty input, the first color is selected
  const onClose = () => {
    setIsVisible(false)
    setInputValue('')
    setSelectedColor(color[0].id)
  }

  const addList = () => {
    // extracts the selected color
    const clr = color.filter((color) => color.id == selectedColor)[0].name
    // fill in the fields of the new list object
    onAddList({
      id: Math.random(),
      name: inputValue,
      count: 0,
      color: clr
    })
    // call the function after the OK button
    onClose()
  }

  //map displays colors to choose from; choosing color
  const chooseColor = color.map(({ name, id }) => (
    <Badge
      key={id}
      color={name}
      onClick={() => setColor(id)}
      className={selectedColor === id && 'active-icon'}
    />
  ))

  return (
    <div className="modal-wrapper">
      <p className="modal-title">New List:</p>
      <label>Name:</label>
      {/* extract the value from the input */}
      <input
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        className="newlist-input"
        type="text"></input>
      <div className="color-wrapper">
        <ul>
          {/* output an array of colors, pass the active to the selected through the ID */}
          {chooseColor}
        </ul>
      </div>
      <div className="button-wrapper">
        {/* close the modal on onclik */}
        <button className="button cancel" onClick={onClose}>
          Cancel
        </button>
        {/* add a list onclick */}
        <button
          onClick={addList}
          // if nothing is entered, the button is not clickable
          className={!inputValue ? 'button submit disabled' : 'button submit'}
          type="submit">
          OK
        </button>
      </div>
    </div>
  )
}

export default ModalWindow
