'use strict'

import React, { Component } from 'react'
import { createStore } from 'redux'
import Counter from './counter'
import counter from '../reducers/counter'

const store = createStore(counter)

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
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

export default App
