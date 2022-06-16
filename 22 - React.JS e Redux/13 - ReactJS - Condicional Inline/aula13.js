class Aviso extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logado: true
    }
  }

  render() {
    return (
      <div>
        {this.state == true ? (
          <p>Você está logado!</p>
        ) : (
          <p>Você não está logado!</p>
        )}
      </div>
    )
  }
}

let elemento = (
  <div>
    <Aviso />
  </div>
)

ReactDOM.render(elemento, document.getElementById('app'))
