'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import store from './store'


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('[data-js="main"]')
)
