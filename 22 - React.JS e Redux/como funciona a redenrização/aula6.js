function mostrarHora() {
  let elemento = (
    <div>
      <h1>Bom dia!</h1>
      <h3>Agora são: {new Date().toLocaleTimeString()} </h3>
    </div>
  )

  //let elemento = <h1 className>Agora são: {new Date().toLocaleTimeString()}</h1>

  ReactDOM.render(elemento, document.getElementById('app'))
}

setInterval(mostrarHora, 1000)
