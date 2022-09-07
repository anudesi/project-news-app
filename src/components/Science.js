import React, { useContext } from 'react'
import { MyContext } from '../ContextApi/Context'

export default function Science() {
  const{data}=useContext(MyContext)
  const sources = data.sources? data.sources: [] 
  return (
   <>
    {
     sources.map((news,index)=>{
        return(
         <div key={index} className='news-div'>
          <h2>{news.name}</h2>
          <h4>{news.description}</h4>
          <h4>{news.country}</h4>
          <a href={news.url}>visit to read </a>
          </div>
        )
      })
    }
  </>
  )
}
