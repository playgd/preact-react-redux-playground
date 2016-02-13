'use strict'

import React, { Component } from 'react'
import { addTodo, toggleTodo } from '../actions/todos'

class App extends Component {
  componentDidMount() {
    this.context.store.subscribe(() => this.setState({}))
    this.input.focus()
  }

  render() {
    const { store } = this.context
    const todos = store.getState()
    this.input = ''
    this.button = ''

    return (
      <div>
        <input
          ref={(node) => this.input = node}
          onKeyPress={(e) => {
            const keyPressed = e.charCode
            const ENTER = 13
            if(keyPressed !== ENTER) return
            this.button.click()
          }}
        />

        <button
          ref={(node) => this.button = node}
          onClick={() => {
            store.dispatch(addTodo(this.input.value))
            this.input.value = ''
            this.input.focus()
          }}
        >
          Add todo
        </button>

        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id}
              onClick={() => store.dispatch(toggleTodo(todo.id))}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed
                  ? 'line-through'
                  : 'none'
              }}
            >
              {todo.text}
            </li>
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
