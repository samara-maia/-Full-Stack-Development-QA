class Post extends React.Component {
  render() {
    return (
      <div>
        <PostTopo autor={this.props.nome} />
        <PostCorpo />
        <PostRodape
          likes={this.props.likes}
          comentarios={this.props.comentarios}
        />
      </div>
    )
  }
}

class PostTopo extends React.Component {
  render() {
    return <div>{this.props.autor}</div>
  }
}

class PostCorpo extends React.Component {
  render() {
    return <div>....</div>
  }
}

class PostRodape extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.likes} curtidas</p>
        <p>{this.props.comentarios} comentarios</p>
        <hr />
      </div>
    )
  }
}

let elemento = (
  <div>
    <post nome="Bonieky" likes="100" Component="15" />
    <post nome="Paulo" likes="50" Component="340" />
    <post nome="Jessica" likes="250" Component="200" />
  </div>
)

ReactDOM.render(elemento, document.getElementById('app'))
