import React from 'react'

// 👇️ For client createRoot or hydrateRoot
import * as ReactDOMClient from 'react-dom/client';
//import ReactDOM from 'react-dom'
import App from './App8'

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
