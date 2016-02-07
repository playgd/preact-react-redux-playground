'use strict'

const counter = (state = 0, action) => {
  return {
    'INCREMENT': state + 1,
    'DECREMENT': state - 1
  }[action.type] || state
}

export default counter
