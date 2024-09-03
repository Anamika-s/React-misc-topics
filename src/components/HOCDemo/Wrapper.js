import React, { Component } from 'react'

const Wrapper = (OriginalComponent)=>
{
        class NewComponent extends Component
{
    state=
    {
    count:1
    }
    updateCount= ()=>
    {
        console.log("up")
        this.setState(prevState=>
        {
            return {count:prevState.count+1}
        }

    )}
    render()
    {
        return <OriginalComponent count={this.state.count} 
        updateCount ={this.updateCount}/>
    }
}
return NewComponent;
}

export default  Wrapper;