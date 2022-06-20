class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {
        email: 'teste@hotmail.com',
        texto: 'Algum texto..',
        sexo: 'feminino'
      }
    }
    this.inputTroucou = this.inputTroucou.bind(this)
  }
  inputTroucou(e) {
    let formValues = this.state.formValues

    formValues[e.target.name] = e.target.value

    this.setState({ formValues })
  }

  render() {
    return (
      <form method="POST">
        <input
          type="email"
          name="email"
          value={this.state.formValues.email}
          onChange={this.inputTroucou}
        />
        <br />
        <input type="password" name="senha" />
        <br />
        <textarea name="corpo" value={this.state.formValues.texto}></textarea>
        Sexo:
        <select
          name="sexo"
          value={this.state.formValues.sexo}
          onChange={this.inputTroucou}
        >
          <br />
          <option></option>
          <option value="masculino">Masculino</option>
          <option value="feminino">feminino</option>
        </select>
        <input type="submit" value="Entrar" />
        Sexo: {this.state.formValues.sexo}
        e-mail:{this.state.formValues.email}
      </form>
    )
  }
}
let elemento = (
  <div>
    <Login />
  </div>
)

ReactDOM.render(elemento, document.getElementById('app'))
