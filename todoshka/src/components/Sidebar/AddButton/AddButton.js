import React, { useState } from 'react'
import { useSetVisible } from '../../../hooks'
import { AiOutlinePlus } from 'react-icons/ai'
import { Badge } from '../Badge'

const AddButton = (props) => {
  const { isVisible, setIsVisible } = useSetVisible()
  const { color } = props
  // const [selectedColor, setSelectedColor] = useState(colors[0].id)
  //get value from input
  const [inputValue, setInputValue] = useState('')

  const addList = () => {
    console.log({ id: 1, name: inputValue, count: 0, colorId: '0' })
  }

  // const icons = color.map(({ name }) => <Badge color={name} />)

  return (
    <div className="add-list">
      <li className="todo-addbutton" onClick={setIsVisible}>
        <AiOutlinePlus className="icon" />
        <span>Add list</span>
      </li>
      {isVisible && (
        <div className="add-list-popup">
          <p className="newlist-label">New List:</p>
          <label for="listName">Name:</label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="nameField"
            type="text"></input>
          <div className="add-list_popup-colors">
            <ul>
              {/* <Badge color="red"></Badge>
              <Badge color="blue"></Badge>
              <Badge color="lightblue"></Badge>
              <Badge color="pink"></Badge>
              <Badge color="violet"></Badge>
              <Badge color="yellow"></Badge>
              <Badge color="green"></Badge>
              <Badge color="orange"></Badge>
              <Badge color="salat"></Badge>
              <Badge color="lightpink"></Badge>
              <Badge color="white"></Badge>
              <Badge color="brown"></Badge>
              <Badge color="grey"></Badge>
              <Badge color="darkgreen"></Badge>
              <Badge color="berry"></Badge>
              <Badge color="aqua"></Badge>
              <Badge color="creme"></Badge>
              <Badge color="dark"></Badge> */}
              {/* {color.map(({ name }) => ( */}
              <Badge color="blue" />
              {/* ))} */}
            </ul>
          </div>
          <div className="btn-field">
            <button className="newlist-btn cancel" onClick={setIsVisible}>
              Cancel
            </button>
            <button
              onClick={addList}
              className={
                !inputValue
                  ? 'newlist-btn submit disabled'
                  : 'newlist-btn submit'
              }>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddButton
