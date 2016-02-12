'use strict'

const counter = (state = [0], action) => {
  switch(action.type) {
    case 'ADD_COUNTER': return addCounter(state)
    case 'REMOVE_COUNTER': return removeCounter(state, action.index)
    case 'INCREMENT': return incrementCounter(state, action.index)
    case 'DECREMENT': return decrementCounter(state, action.index)
    default: return state
  }
}

const addCounter = (list) => {
  return [...list, 0]
}

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
}

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ]
}

const decrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] - 1,
    ...list.slice(index + 1)
  ]
}

export default counter
