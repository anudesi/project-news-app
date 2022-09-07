import React, {useContext } from 'react'
import { MyContext } from '../ContextApi/Context'; 
import { NavLink } from 'react-router-dom';

export default function Home() {
 /*  const[getNews,setNews] = useState([]) */
  const { data } = useContext(MyContext);
  const articles = data.articles? data.articles: [] 

/* useEffect(()=>{
fetchData()
},[])

const fetchData = ()=>{
  fetch(`https://newsapi.org/v2/top-headlines?country=de&apiKey=${process.env.REACT_APP_API_KEY}`)
  .then(res => res.json())
  .then(result => setNews(result.articles))
  
} */

  return (
    <div style={{width:"80%",margin:"0 auto",display:"flex",flexWrap:"wrap",gap:"20px"}}>
   {
    articles.map((item,index)=>{
      return(
       <div key={index} style={{width:"200px",padding:"20px"}}>
     <NavLink to={`/home/${item.title}`}><img src={item.urlToImage} alt="pic" width="200px"/> </NavLink>   
        <h4 style={{padding:"5px"}}>News Source:{item.author}</h4>
        <h4 style={{padding:"5px"}}>{item.description}</h4>
       
        </div>
      )
    })
   }
    </div>
  )
}
