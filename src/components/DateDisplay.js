import React from 'react'


export default function DateDisplay() {   
    let d = new Date();
    const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}` 
  return (
    <div style={{width:"200px",textAlign:"right"}}>      
        <h4>Today is :{date}</h4>
    </div>
  )
}
