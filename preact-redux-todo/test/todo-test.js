'use strict'

import { expect } from 'chai'
import todo from '../src/reducers/todo'

describe('#TODO', function() {
  it('Should add todo', function() {
    const before = Object.freeze([])
    const action = Object.freeze({
      type: 'ADD_TODO',
      text: 'First todo',
      id: 0
    })
    const after = [{
      id: 0,
      text: 'First todo',
      completed: false
    }]
    expect(todo(before, action)).to.eql(after)
  })

  it('Should add new todo', function() {
    const before = Object.freeze([{
      id: 0,
      text: 'hey',
      completed: false
    }])
    const action = Object.freeze({
      type: 'ADD_TODO',
      text: 'ho',
      id: 1
    })
    const after = [{
      id: 0,
      text: 'hey',
      completed: false
    },{
      id: 1,
      text: 'ho',
      completed: false
    }]
    expect(todo(before, action)).to.eql(after)
  })

  it('Should unknown action type return the current state', function() {
    const before = Object.freeze([])
    const action = Object.freeze({ type: 'ADD_TUDU' })
    const after = []
    expect(todo(before, action)).to.eql(after)
  })

  it('Should toggle todo', function() {
    const before = Object.freeze([{
      id: 0,
      text: 'hey',
      completed: false
    },{
      id: 1,
      text: 'ho',
      completed: false
    }])
    const action = Object.freeze({ type: 'TOGGLE_TODO', id: 1 })
    const after = [{
      id: 0,
      text: 'hey',
      completed: false
    },{
      id: 1,
      text: 'ho',
      completed: true
    }]
  })
})
