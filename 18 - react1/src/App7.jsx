import React, { useState, useEffect } from 'react'
//import styled from 'styled-components'
import SearchBox from './components/SearchBox'

function App() {
  
  // eslint-disable-next-line no-unused-vars
  const [searchText, setSearchText] = useState('')
  const [list, setList] = useState([])

  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    setList([
      { title: 'Comprar o bolo', done: false },
      { title: 'Pegar o cachorro no Pet', done: true },
      { title: 'Comprar o bolo', done: false }
    ])
  }, [])

  function handleSearchInput(novoTexto) {
    setSearchText(novoTexto)
  }
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox
        frasePadrao="Faça sua busca..."
        onChangeText={handleSearchInput}
      />
      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.done && <del>{item.title}</del>}
            {!item.done && item.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
