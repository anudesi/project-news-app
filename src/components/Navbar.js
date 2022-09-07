import React from 'react'
import{NavLink} from 'react-router-dom'
import DateDisplay from './DateDisplay'


export default function Navbar() {
  return (
    
    <div>
    <div className="navbar-container">
         <ul>
         <li><NavLink to="/home">Home</NavLink></li> 
        <li><NavLink to="/sports">Sports</NavLink></li>
        <li><NavLink to="/business">Business</NavLink></li>
        <li><NavLink to="/science">Science</NavLink></li>
        <li><NavLink to="/entertainment">Entertainment</NavLink></li> 
        
      </ul>     
    </div>
    <DateDisplay/> 
    </div>
    
  )
}
