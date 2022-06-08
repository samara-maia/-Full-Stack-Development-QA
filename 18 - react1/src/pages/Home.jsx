import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Home() {
  let history = useHistory()
  
  const dispatch = useDispatch()
  const name = useSelector(state => state.usuario.name)
  const contador = useSelector(state => state.usuario.contador)


  const handleButton = () => {
    setTimeout(() => {
      history.replace('/sobre')
    }, 2000)
  }

  const handleSamara = () => {
    dispatch({
      type: 'SET_NAME',
      payload: { name: 'Bonieky'}
    })
  }

  const handleIncrement = () => {
    dispatch({
      type: 'INCREMENT_CONTADOR'
    })
  }

  return (
    <div>
      <h4>Página Home</h4>
      NOME: {name} <br />
      CONTAGEM {contador} <br />
      <br />
      <button onClick={handleSamara}>Setar nome para Samara</button>
      <button onClick={handleIncrement}>+1</button>
      <br />
      <br />
      <button onClick={handleButton}>Ir para a Página Sobre</button>
    </div>
  )
}

export default Home
/* forma mais complexa

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
*/
