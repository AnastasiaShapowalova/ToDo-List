import React, { Fragment, useEffect, useState } from 'react'
import { Input } from '../../components'
import DB from '../../_constants_/db.json'
import { AiOutlineSearch } from 'react-icons/ai'
import './style/style.css'

const SearchInput = () => {
  const [searchTask, setSearchTask] = useState('')
  const [searchRes, setSearchRes] = useState([])

  const tassks = []
  DB.tasks.map((value) => tassks.push(value.text))

  // console.log(`tassks.array - ${tassks}`)

  useEffect(() => {
    const result = tassks.filter((item) => item.includes(searchTask))
    // console.log('useEffect = ' + result)
    setSearchRes(result)
  }, [searchTask])

  const handleChange = (e) => {
    setSearchTask(e.target.value)
  }

  return (
    <Fragment>
      <li className="search-input-wrapper">
        <AiOutlineSearch className="icon" />
        <Input
          type="search"
          placeholder="Search"
          className="search"
          value={searchTask}
          onChange={handleChange}></Input>
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
