'use strict'

import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    this.context.store.subscribe(() => this.setState({}))
  }

  render() {
    const { store } = this.context
    const todos = store.getState()
    let input

    return (
      <div>
        <input ref={(node) => input = node} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: input.value
          })
          input.value = ''
          input.focus()
        }}>
          Add todo
        </button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}

export default App
