import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
import monthData from '../../static/assets/dummyData'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      month: monthData.data.filter(month => month.name === "July" && month.year === "2021")
    }
  }
  render() {
    return (
      <div className='app'>
        <Header monthName="July"/>
        <Footer year="2021" />
      </div>
    );
  }
}
