'use strict'

import React, { Component } from 'react'

class Clock2 extends Component {
  getTimeInDegrees (hour, minutes, seconds) {
    const values = {
      hour: 12,
      minutes: 60,
      seconds: 60
    }

    const tempHourDeg = (360 * hour) / values.hour
    const tempMinutesDeg = (360 * minutes) / values.minutes
    const secondsDeg = (360 * seconds) / values.seconds

    const hourDeg = (tempHourDeg / (360 / tempMinutesDeg)) + tempHourDeg
    const minutesDeg = ((secondsDeg * 6) / 360) + tempMinutesDeg

    return { hourDeg, minutesDeg, secondsDeg }
  }

  getInitialData () {
    const date = new Date()
    return this.getTimeInDegrees(
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    )
  }

  componentWillMount () {
    this.setState(this.getInitialData())
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      console.log(this.getInitialData())
      this.setState(this.getInitialData())
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const {
      hourDeg, minutesDeg, secondsDeg
    } = this.state

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
            style={{ transform: `rotate(${hourDeg}deg)` }} />
          <span
            className='pointer-minutes'
            style={{ transform: `rotate(${minutesDeg}deg)` }} />
          <span
            className='pointer-seconds'
            style={{ transform: `rotate(${secondsDeg}deg)` }} />
        </div>
      </div>
    )
  }
}

export default Clock2
