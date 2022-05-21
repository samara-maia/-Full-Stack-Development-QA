import React from 'react'
import './App.css'

function Avatar(props) {
  // pode ser colocado o stylesheet na div
  return (
    <div className="avatar">
      <img src={props.user.url} alt={props.user.name} />
      <br />
      <span>{props.user.name}</span>
    </div>
  )
}
function App() {
  let user = {
    url: 'https://www.google.com.br/google.jpg',
    name: 'Samara Maia'
  }
  return (
    <>
      <Avatar user={user} />
    </>
  )
}

export default App
