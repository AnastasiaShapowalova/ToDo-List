import React from 'react'
import { Badge } from '../Badge'
import { useSetSelectedColor, useInputValue } from '../../hooks'
import { Input } from '../Input'
import { Button } from '../Button'
import './style.css'

const ModalWindow = (props) => {
  const { color, onAdd, setIsVisible } = props

  //mark selected color, binding the selected color to the list by id
  const { selectedColor, setSelectedColor, setColor } = useSetSelectedColor()
  //get value from input
  const { inputValue, setInputValue, setValue } = useInputValue()

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
    onAdd({
      id: Math.random(),
      name: inputValue,
      count: 0,
      color: clr
    })
    // call the function after the OK button
    onClose()
  }

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
      <Input
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        className="newlist-input-field"
        type="text"></Input>
      <div className="color-wrapper">
        <ul>
          {/* output an array of colors, pass the active to the selected through the ID */}
          {chooseColor}
        </ul>
      </div>
      <div className="button-wrapper">
        {/* close the modal on onclik */}
        <Button className="button cancel" onClick={onClose}>
          Cancel
        </Button>
        {/* add a list onclick */}
        <Button
          onClick={addList}
          // if nothing is entered, the button is not clickable
          className={!inputValue ? 'button submit disabled' : 'button submit'}
          type="submit">
          OK
        </Button>
      </div>
    </div>
  )
}

export default ModalWindow
