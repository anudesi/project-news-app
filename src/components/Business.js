import React, { useContext } from 'react'
import { MyContext } from "../ContextApi/Context";

export default function Business() {
  const { data } = useContext(MyContext);
  const sources = data.sources? data.sources: [] 
  return (
    <div>
    {sources.map((news,index) => {
      return (
        <div key={index} className='news-div'>
       <h2>Language : {news.language}</h2>
       <h5>Country of origin: {news.country}</h5>
       <h4>{news.description}</h4>
       <h5>{news.name}</h5>
       <a href={news.url}>Visit to read </a>
       </div>
      );
    })}
  </div>
  )
}
