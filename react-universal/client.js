'use strict'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import counterApp from './reducers'

const initialState = window.__INITIAL_STATE__
const store = createStore(counterApp, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('[data-js="main"]')
)
