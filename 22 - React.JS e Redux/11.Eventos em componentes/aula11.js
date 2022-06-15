class Pessoa extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: this.props.nome
    }
    this.limparNome = this.limparNome.bind(this)
  }

  limparNome() {
    this.setState({ nome: '' })
  }
  setNome(nome) {
    this.setState({ nome })
  }

  render() {
    return (
      <div>
        <h1>Olá, meu nome é {this.state.nome}</h1>
        <button onClick={this.limparNome}>Limpar Nome</button>
        <button
          onClick={() => {
            this.setNome('Levi')
          }}
        >
          Mudar nome para Levi
        </button>
      </div>
    )
  }
}

let elemento = (
  <div>
    <Pessoa nome="Samara" />
  </div>
)

ReactDOM.render(elemento, document.getElementById('app'))
