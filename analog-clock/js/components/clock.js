'use strict'

import React, { Component } from 'react'

class Clock extends Component {
  convertToDegrees (type, time) {
    const values = {
      hour: 12,
      minutes: 60,
      seconds: 60
    }
    const value = values[type]
    return (360 * time) / value
  }

  componentWillMount () {
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hourDeg = this.convertToDegrees('hour', hour)
    const minutesDeg = this.convertToDegrees('minutes', minutes)
    const secondsDeg = this.convertToDegrees('seconds', seconds)
    this.setState({
      hour, minutes, seconds,
      hourDeg, minutesDeg, secondsDeg
    })
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      const date = new Date()
      const hour = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
      const hourDeg = this.convertToDegrees('hour', hour)
      const minutesDeg = this.convertToDegrees('minutes', minutes)
      const secondsDeg = this.convertToDegrees('seconds', seconds)
      this.setState({
        hour, minutes, seconds,
        hourDeg, minutesDeg, secondsDeg
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const {
      hour, minutes, seconds,
      hourDeg, minutesDeg, secondsDeg
    } = this.state

    console.log('%s:%s:%s', hour, minutes, seconds)

    return (
      <div className='clock'>
        <div className='numbers'>
          {Array.apply(null, { length: 12 }).map((_, number) => (
            <span key={number} className={`number number-${number + 1}`}>
              {number + 1}
            </span>
          ))}
        </div>

        <div className='pointers'>
          <span
            className='pointer-hour'
            style={{ transform: `rotate(${hourDeg}deg)`}} />
          <span
            className='pointer-minutes'
            style={{ transform: `rotate(${minutesDeg}deg)`}} />
          <span
            className='pointer-seconds'
            style={{ transform: `rotate(${secondsDeg}deg)`}} />
        </div>
      </div>
    )
  }
}

export default Clock
