import React, { useContext } from 'react'
import { MyContext } from '../ContextApi/Context'
import{NavLink}from'react-router-dom'

export default function Science() {
  const{data}=useContext(MyContext)
  return (
   <div className="mainPages-container">
    {
     data?.science?.map((news,index)=>{
        return(
         <div key={index} className='mainPages-card'>
          <NavLink to={`/science/${news.name}`}><img src="https://picsum.photos/300/200" alt="pic" /></NavLink>          
          <h4>{news.description}<br /><NavLink to={`/science/${news.name}`}> <span><b>more ...</b></span></NavLink>
          </h4>    
        
          </div>
        )
      })
    }
  </div>
  )
}
