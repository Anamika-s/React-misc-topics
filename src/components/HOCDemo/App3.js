import React, { Component } from 'react'
import CompFirst from './CompFirst'
import CompSecond from './CompSecond'
export default class App3 extends Component {
  render() {
    return (
      <div> 
        <h1> HOC Demo </h1>
    <CompFirst/>
    <CompSecond/>
      </div>
    )
  }
}
