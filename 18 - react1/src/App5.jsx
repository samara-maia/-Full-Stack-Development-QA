import React, { useState, useEffect } from 'react'
//import styled from 'styled-components'

export function App5() {
  const [contagem, setContagem] = useState(0)

  useEffect(() => {
    document.title = 'Contagem: ' + contagem
  }, [contagem])

  function aumentarAction() {
    setContagem(contagem + 1)
  }

  return (
    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={aumentarAction}>Aumentar Número</button>
    </>
  )
}


