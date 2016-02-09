'use strict'

import { expect } from 'chai'
import counter from '../src/reducers/counter'

describe('# COUNTER', function() {
  it('Should return a new counter', function() {
    const before = Object.freeze([0])
    const after = [0, 0]
    expect(counter(before, { type: 'ADD_COUNTER' })).to.eql(after)
  })

  it('Should remove a counter', function() {
    const before = Object.freeze([0, 10, 20])
    const action = Object.freeze({
      type: 'REMOVE_COUNTER',
      index: 1
    })
    const after = [0, 20]
    expect(counter(before, action)).to.eql(after)
  })

  it('Should increment counter', function() {
    const before = Object.freeze([0, 10, 20])
    const action = Object.freeze({
      type: 'INCREMENT',
      index: 1
    })
    const after = [0, 11, 20]
    expect(counter(before, action)).to.eql(after)
  })

  it('Should decrement counter', function() {
    const before = Object.freeze([0, 10, 20])
    const action = Object.freeze({
      type: 'DECREMENT',
      index: 2
    })
    const after = [0, 10, 19]
    expect(counter(before, action)).to.eql(after)
  })
});
