'use strict'

import React from 'react'

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onRemoveCounter
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
    <button onClick={onRemoveCounter}>Remove this counter</button>
  </div>
)

export default Counter
