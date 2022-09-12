import React from 'react'


export default function DateDisplay() {   
    let d = new Date();
    const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}` 
    const day =`${d.toLocaleDateString("en-us",{weekday: 'long'})}`
  return (
    <div className='date-display'>      
        <h4>{day} {date}</h4>
        
    </div>
  )
}
