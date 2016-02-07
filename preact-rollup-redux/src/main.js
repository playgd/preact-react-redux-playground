'use strict'

import preact, { h } from 'preact'
import { createStore } from 'redux'
import App from './components/app'
import counter from './reducers/counter'

const store = createStore(counter)

const render = () => {
  preact.render(
    <App value={store.getState()} />,
    document.querySelector('[data-js="main"]')
  )
}

store.subscribe(render)
render()
