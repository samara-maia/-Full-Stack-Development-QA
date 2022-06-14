//let elemento = <h1 className="Olá Mundo">olá Mundo</h1>

let elemento = React.createElement(
  'h1',
  { className: 'titulo' },
  'Olá Mundo 2.0'
)

ReactDOM.render(elemento, document.getElementById('app'))
