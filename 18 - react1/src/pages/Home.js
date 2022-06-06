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

  return (
    <div>
      <h4>Página Home</h4>
      NOME: {props.name}
      <br />
      <br />
      <button onClick={handleButton}>Ir para a Página Sobre</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    name: state.usuario.name
  }
}

export default connect(mapStateToProps)(Home)
