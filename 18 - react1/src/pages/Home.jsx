import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

function Home(props) {
  let history = useHistory()
  const handleButton = () => {
    setTimeout(() => {
      history.replace('/sobre')
    }, 2000)
  }

  const handleSamara = () => {
    props.setName('Samara')
  }

  const handleIncrement = () => {
    props.increment()
  }

  return (
    <div>
      <h4>Página Home</h4>
      NOME: {props.name} <br />
      CONTAGEM {props.contador} <br />
      <br />
      <button onClick={handleSamara}>Setar nome para Samara</button>
      <button onClick={handleIncrement}>+1</button>
      <br />
      <br />
      <button onClick={handleButton}>Ir para a Página Sobre</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    name: state.usuario.name,
    contador: state.usuario.contador
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setName: newName =>
      dispatch({
        type: 'SET_NAME',
        payload: { name: newName }
      }),
    increment: () =>
      dispatch({
        type: 'INCREMENT_CONTADOR'
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
