import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000;
`

export function App3() {
  const [texto, setTexto] = useState('')
  const handleInput = e => {
    setTexto(e.target.value)
  }

  return (
    <>
      <Input type="text" value={texto} onChange={handleInput} />
      <p>{texto.length}</p>
    </>
  )
}

 