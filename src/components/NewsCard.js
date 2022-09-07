import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../ContextApi/Context";

export default function NewsCard() {
  const params = useParams();
  const { data } = useContext(MyContext);
  const articles = data.articles ? data.articles : data.sources;

  const article = articles?.find((elem) => elem.title === params.newstitle);
  console.log(article);
  return (
    <div style={{width:"80%",margin:"0 auto",borderBottom:"1px solid red",padding:"50px",display:"flex"}}>     
    <div style={{width:"50%"}}> <img src={article.urlToImage} alt="pic" width="600px" /> </div>  
     <div style={{width:"50%"}}>     
      <h5>{article.title}</h5> 
      <p style={{letterSpacing:"1px"}}>{article.content}</p>
      
</div>
    </div>
  );
}
