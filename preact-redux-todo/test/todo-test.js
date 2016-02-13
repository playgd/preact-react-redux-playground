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
})
