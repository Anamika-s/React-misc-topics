import React, { Component } from 'react'
import Wrapper from './Wrapper'

export class CompFirst extends Component {
    
  render() {
   
    return (
      <div> <h1>CompFirst {this.props.count} </h1>
      <button onClick={()=>this.props.updateCount()}> Update Count </button>
      </div>
    )
  }
}

export default Wrapper(CompFirst);
