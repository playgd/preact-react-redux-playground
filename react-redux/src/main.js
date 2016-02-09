'use strict'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Provider from './components/provider'
import App from './components/app'
import counter from './reducers/counter'

render(
  <Provider store={createStore(counter)}>
    <App />
  </Provider>,
  document.querySelector('[data-js="main"]')
)
