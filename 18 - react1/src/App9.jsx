import React, { useState, useEffect } from 'react'
//import styled from 'styled-components'
import SearchBox from './components/SearchBox'
 
export function App9() {
  
  // eslint-disable-next-line no-unused-vars
  const [searchText, setSearchText] = useState('')
  const [list, setList] = useState([])

  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    setList([
      { title: 'Fazer suas vontades', done: false },
      { title: 'Se mimar', done: true },
      { title: 'Confiar em você', done: false }
    ])
  }, [])
   
  function addAction(newItem){
    //let newList = [...list, {title:newItem, done:false}] 
    let newList = [...list]
    newList.push({title:newItem, done:false})

   setList(newList)
  }

  function handleToggleDone(index){
    let newList = [...list]
    newList[index].done = !newList[index].done

    setList(newList)
  }
 
  return (
    <>
      <h1>Aprenda a:</h1>
      <SearchBox
        frasePadrao="Adcione o que precisa."
        onEnter={addAction}
      />
      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={()=>handleToggleDone(index)}>
            {item.done && <del>{item.title}</del>}
            {!item.done && item.title}
          </li>
        ))}
      </ul>
    </>
  )
}

