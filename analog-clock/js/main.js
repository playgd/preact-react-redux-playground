'use strict'

import React from 'react'
import { render } from 'react-dom'
import Clock from './components/clock'

render(
  <Clock />,
  document.querySelector('[data-js="main"]')
)
