'use strict'

import React, { Component } from 'react'
import Counter from './counter'

class App extends Component {
  componentDidMount() {
    const { store } = this.context
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const { store } = this.context
    const counters = store.getState()

    return (
      <div>
        {counters.map((value, index) => (
           <Counter
           key={index}
            value={value}
            onIncrement={() =>
              store.dispatch({ type: 'INCREMENT', index }
            )}
            onDecrement={() =>
              store.dispatch({ type: 'DECREMENT', index }
            )}
            onRemoveCounter={() =>
              store.dispatch({ type: 'REMOVE_COUNTER', index }
            )}
          />
        ))}

        <button onClick={() =>
          store.dispatch({ type: 'ADD_COUNTER' }
        )}>
          Add counter
        </button>
        <button onClick={() =>
          store.dispatch({
            type: 'REMOVE_COUNTER',
            index: counters.length - 1
          })
        }>
          Remove counter
        </button>
      </div>
    )
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}

export default App
