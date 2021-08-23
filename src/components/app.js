import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
import monthData from '../../static/assets/dummyData'

export default class App extends Component {
  constructor() {
    super()

    this.monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    this.now = this.calculateDateData()
    this.state = {
      month: monthData.data.filter(month => month.name === this.now.month && month.year === this.now.year)[0]
    }

    this.handleMonthChange = this.handleMonthChange.bind(this)
  }

  calculateDateData() {
    const now = new Date()
    const month = this.monthList[now.getMonth()]
    const year = now.getFullYear()
    return { month, year }
  }

  handleMonthChange(direction) {
    const currentMonthIndex = this.monthList.indexOf(this.state.month.name)
    // TODO: Calculate if index overflows on either end, and update accordingly
    const newMonthName = this.monthList[direction === "+" ? currentMonthIndex + 1 : currentMonthIndex - 1]
    const newMonthData = monthData.data.filter(month => month.name === newMonthName)[0]
    this.setState({ month: newMonthData })
  }

  render() {
    return (
      <div className='app'>
        <Header monthName={this.state.month.name} handleMonthChange={this.handleMonthChange} />
        <Footer year={this.state.month.year} />
      </div>
    );
  }
}
