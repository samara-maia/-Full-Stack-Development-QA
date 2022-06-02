import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import Reducers from './reducers'
import { App13 } from './App13'

const store = createStore(Reducers)

render(
<Provider store={store}>
<App13/>
</Provider>,
document.getElementById('root'))
