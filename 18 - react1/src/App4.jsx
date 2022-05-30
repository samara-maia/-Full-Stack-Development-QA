import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000;
`
export function App4() {
  const [email, setEmail] = useState('')
  const [isLogged] = useState(false)

  return (
    <>
      <Input
        placeholder="Digite um e-mail"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      {isLogged ? <button>Sair</button> : <button>Fazer Login</button>}
    </>
  )
}

  
