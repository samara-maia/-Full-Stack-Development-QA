let nome = 'Samara'
let sobrenome = 'Maia'

let titulo = <h2>{nome}</h2>

let elemento = (
  <div>
    {titulo}
    <p>{sobrenome}</p>
    <small>Seja bem vindo(a)</small>
  </div>
)

ReactDOM.render(elemento, document.getElementById('app'))

/*
function mostrarNome(nome, sobrenome) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{sobrenome}</p>
      <small>Seja bem vindo(a)</small>
    </div>
  )
}

let nome = 'samara'
let idade = 33
let elemento = (
  <h1>
    Olá {nome}, {idade + 1} anos
  </h1>
)

ReactDOM.render(elemento, document.getElementById('app'))
*/
