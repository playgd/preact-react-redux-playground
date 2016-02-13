'use strict'

import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    this.context.store.subscribe(() => this.setState({}))
  }

  render() {
    const { store } = this.context
    const todos = store.getState()

    return (
      <div>
        <button onClick={() => store.dispatch({
          type: 'ADD_TODO',
          text: 'hey'
        })}>
          Add todo
        </button>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
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
