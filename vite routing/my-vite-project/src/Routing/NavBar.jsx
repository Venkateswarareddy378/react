import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="navbarSection">
        <ul>
            <Link to="/Home"> <li>Home </li></Link>
            
           <Link to="/About"> <li>About </li> </Link>   

           <Link to="/Contact ">  <li> Contact </li></Link>      
  
           <Link to= '/Login' > <li> Login </li> </Link>            
        </ul>
    </div>
  )
}

export default NavBar