function Bemvindo(props) {
  return (
    <div>
      <h1>Seja Bem Vindo(a)</h1>
      <h2>{props.nome}</h2>
    </div>
  )
}

let elemento = (
  <div>
    <Bemvindo nome="Bonieky" />

    <hr />

    <Bemvindo nome="Samara" />
  </div>
)

ReactDOM.render(elemento, document.getElementById('app'))
