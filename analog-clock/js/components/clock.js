'use strict'

import React from 'react'

const Clock = () => (
  <div className='clock'>
    <div className='numbers'>
      {Array.apply(null, { length: 12 }).map((_, number) => (
        <span key={number} className={`number number-${number + 1}`}>
          {number + 1}
        </span>
      ))}
    </div>

    <div className='pointers'>
    </div>
  </div>
)

export default Clock
