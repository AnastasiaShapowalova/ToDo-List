import React, { Fragment, useEffect, useState } from 'react'
import DB from '../../_constants_/db.json'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchInput = () => {
  const [searchTask, setSearchTask] = useState('')
  const [searchRes, setSearchRes] = useState([])

  const tassks = []
  DB.tasks.map((value) => tassks.push(value.text))

  useEffect(() => {
    const result = tassks.filter((item) => item.includes(searchTask))
    setSearchRes(result)
  }, [searchTask])

  const handleChange = (e) => {
    setSearchTask(e.target.value)
  }

  return (
    <Fragment>
      <li className="search-input-wrapper">
        <AiOutlineSearch className="icon" />
        <input
          type="search"
          placeholder="Search"
          className="search"
          value={searchTask}
          onChange={handleChange}></input>
      </li>
      {/* дуже дуже пробна версія */}
      <ul>
        {searchRes.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Fragment>
  )
}

export default SearchInput
