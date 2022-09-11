import React, { useContext } from 'react'
import{NavLink} from 'react-router-dom'
import DateDisplay from './DateDisplay'
import { MyContext } from '../ContextApi/Context'


export default function Navbar() {
  const{weather}=useContext(MyContext)
  let activeStyle ={backgroundColor:"red",color:"white"}
  return (
    
    <div className="navbar-container">
        <div className="">
          <ul className="">
          <li ><NavLink to="/home" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Home</NavLink></li> 
          <li><NavLink to="/sports" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Sports</NavLink></li>
          <li><NavLink to="/business" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Business</NavLink></li>
          <li><NavLink to="/science" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Science</NavLink></li>
          <li><NavLink to="/entertainment" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Entertainment</NavLink></li>         
        </ul>
        </div>

        <div className="">
        <DateDisplay/> 
        </div> 
        <div className="weather-container">
        <p>{weather.city}</p>  
         <p>{weather.temp}°C </p> 
        </div> 

  </div>
   
   
    
  )
}
