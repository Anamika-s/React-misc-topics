import React, { Component } from 'react'
import Wrapper from './Wrapper'

export  class CompSecond extends Component {
    
  render() {
   let {count,updateCount } = this.props;
    return (
      <div> <h1>CompSecond {count} </h1>
      <button onMouseOver={()=>updateCount()}> Update Count </button>
      </div>
    )
  }
}


export default Wrapper(CompSecond)