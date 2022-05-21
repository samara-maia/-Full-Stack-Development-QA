import React from 'react'
import styled from 'styled-components'

const Site = styled.div`
  width: 400px;
  height: 400px;
  background-color: #00ff00;
`

const Botao = styled.button`
  font-size: 19px;
  padding: 10px 15px;
  border: 3px solid #ff0000;
  color: #ff0000;
  border-color: #fff;
  margin: 5px;
  border-radius: 5px;
`
const BotaoPequeno = styled(Botao)`
  padding: 5px 10px;
  font-size: 16px;
`

function App() {
  return (
    <Site>
      <Botao ativo={true}>Clique aqui</Botao>
      <BotaoPequeno ativo={false}>Clique aqui</BotaoPequeno>
    </Site>

    /*<Site>
      <Title>Titulo Legal</Title>
    </Site>
    */
  )
}

export default App
