import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000;
`
function App() {
  const [email, setEmail] = useState('')

  return (
    <>
      <Input
        placeholder="Digite um e-mail"
        type="email"
        valeu={email}
        onChange={handleEmailInput}
      />

      {algo && <Componente />}

      {email.length > 0 && <p>{(email.length = 1 ? '' : 's')}</p>}
    </>
  )
}

export default App
