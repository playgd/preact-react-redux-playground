'use strict'

import preact, { h } from 'preact'
import { createStore } from 'redux'
import App from './components/app'
import counter from './reducers/counter'

const store = createStore(counter)

const onIncrement = () => {
  store.dispatch({ type: 'INCREMENT' })
}

const onDecrement = () => {
  store.dispatch({ type: 'DECREMENT' })
}

const render = () => {
  preact.render(
    <App
      value={store.getState()}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />,
    document.querySelector('[data-js="main"]')
  )
}

store.subscribe(render)
render()
