import React, { useState } from 'react'
import './App.css'

import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function App() {
  const [todolist, setList] = useState([])
  const [current, setCurrent] = useState('')

  const handleAddValue = (event) => {
    console.log('entrou')
    if (current != '') {
      const item = {
        name: current,
        id: todolist.length + 1,
      }
      setList([...todolist, item])

      event.preventDefault()
      setCurrent('')
    } else {
      console.log('vazio')
    }
  }

  const handleChangeText = (event) => {
    const value = event.target.value
    setCurrent(value)
  }

  const deleteItem = (key) => {
    console.log(key)
    const filtered = todolist.filter((item) => item.id != key)

    setList(filtered)
  }
  return (
    <div className='App'>
      <header>
        <form id='to-do-form' onSubmit={handleAddValue}>
          <input
            type='text'
            placeholder='Enter text'
            value={current}
            onChange={handleChangeText}
          ></input>
          <button type='submit'>Add</button>
        </form>
      </header>

      <ListItems items={todolist} deleteItem={deleteItem}></ListItems>
    </div>
  )
}

export default App
