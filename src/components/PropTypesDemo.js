import React from 'react'
import Pt from 'prop-types';
const PropTypesDemo = (props) => {
  return (
    <div>PropTypesDemo
        <b> Name is {props.name} 
            <br/>
            Marks are {props.marks}
        </b>
    </div>
  )
}

PropTypesDemo.propTypes=
{
  name : Pt.string.isRequired,
  marks:Pt.number.isRequired
}

PropTypesDemo.defaultProps=
{
  name:"deepak kumar",
  marks:0
}

export default PropTypesDemo;