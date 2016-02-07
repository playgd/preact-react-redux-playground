'use strict'

import preact, { h, Component } from 'preact'
import { createStore } from 'redux'
import Counter from './components/counter'
import counter from './reducers/counter'

const store = createStore(counter)

class Main extends Component {
  constructor() {
    super()
    this.state.value = store.getState()
  }

  onIncrement() {
    store.dispatch({ type: 'INCREMENT' })
    this.setState({ value: store.getState() })
  }

  onDecrement() {
    store.dispatch({ type: 'DECREMENT' })
    this.setState({ value: store.getState() })
  }

  render() {
    return (
      <Counter
        value={this.state.value}
        onIncrement={this.onIncrement.bind(this)}
        onDecrement={this.onDecrement.bind(this)}
      />
    )
  }
}

preact.render(<Main />, document.querySelector('[data-js="main"]'))
