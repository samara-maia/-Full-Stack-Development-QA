import React from 'react'

/*class App extends React.Component {
  render() {
    return <h1>Testando 1,2,3</h1>
  }
}*/
function formatarNome(usuario) {
  return usuario.nome + '' + usuario.sobrenome
}

export function App() {
  let usuario = {
    nome: 'Samara',
    sobrenome: 'Maia'
  }

  return (
    <>
      <div>Meu nome é {formatarNome(usuario)}</div>
    </>
  )
}
/*
let App = () => {
  return <h1>Testando 7,8,9</h1>
}*/
/*
let App = () => <h1>Testando 10, 11, 12</h1>
*/
