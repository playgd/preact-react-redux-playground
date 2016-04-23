'use strict'

import React from 'react'
import { render } from 'react-dom'
import Clock from './components/clock'
import Clock2 from './components/clock2'

render(
  <Clock2 />,
  document.querySelector('[data-js="main"]')
)
