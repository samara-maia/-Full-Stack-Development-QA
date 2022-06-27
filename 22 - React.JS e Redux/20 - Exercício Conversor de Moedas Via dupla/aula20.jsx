
class Moeda extends React.Component{
  render(){
    let valor = this.state.valor
    if (this.props.mudar == Moeda) {
    mudar = valor * real   
   }
    
    return (    
      <div >
        <input type="number" value={valor} onChange= {
            this.valor
          }/>
        
      </div>

      )
  }
 }


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    valor: 20
   
    }
    this.vChange = this.vChange.bind(this)
  }

  vChange(novoValor){
    this.setState({valor:novoValor})
  }
  

  render() {
    return (
      <div>

        <Moeda valor={this.state.valor} moeda="real" mudar={this.vChange}/><br/>
        <Moeda valor={this.state.valor} moeda="dollar" mudar={this.vChange}/>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
