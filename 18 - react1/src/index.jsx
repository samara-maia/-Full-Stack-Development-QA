import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { App12 } from './App12'
import { store, persistor } from './store'




render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App12/>
  </PersistGate>
</Provider>,
document.getElementById('root'))
