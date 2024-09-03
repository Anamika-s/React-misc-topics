import React from 'react'
import { Link } from 'react-router-dom'
const Links = () => {
  return (
    <div>
<nav>
    <Link to="/aboutus"> About Us </Link>
    <Link to="/contactus"> Contact Us </Link>
    <Link to="/product"> Product List </Link>
    <Link to="/proptypes"> PropType Demo </Link>
    
</nav>

    </div>
  )
}

export default Links;