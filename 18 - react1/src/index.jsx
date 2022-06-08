import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import { App13 } from './App13'



render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App13/>
  </PersistGate>
</Provider>,
document.getElementById('root'))
