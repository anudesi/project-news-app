import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../ContextApi/Context";

export default function NewsCard() {
  const params = useParams();
  const { data } = useContext(MyContext);
     const content = "Lorem odit  sint quam odio quis alias dcta magnam cupiditate! Deserunt ad assumenda voluptate quam dolor. Doloremque nam, et placeat rerum alias non maxime porro asperiores, animi at nesciunt. Ut voluptatum assumenda optio ipsam omnis repellendus, incidunt minima rem id modi atque quos aliquam esse tempore! Veritatis cum perferendis, ipsa iusto rem aspernatur distinctio eum autem modi! Officiis nostrum nulla totam beatae maxime quaerat temporibus, ducimus placeat error autem et necessitatibus similique enim odit alias nihil. magnam, recusandae numquam repellat aliquid quo corrupti ipsum repellendus obcaecati. Earum explicabo unde harum laudantium, aut impedit? Incidunt sequi ipsum perspiciatis natus excepturi  ipsam vitae quisquam explicabo impedit! Pariatur harum asperiores repudiandae voluptas veritatis magni consectetur aliquam iusto laboriosam facere."
  
  const category = params.category
 
  const articles = data[category]

  let article = articles?.find((elem) => elem.title === params.newstitle)
  article = article ? article : articles?.find((elem) => elem.name === params.newstitle)

   return (
    <div className="subCardContainer">     
    <div className="subCardImg"> {article?.urlToImage ? <img src={article?.urlToImage} alt="pic"/>: <img src="https://picsum.photos/600/500" alt="pic"/> }</div>  
     <div className="subCardText">     
      <h1>{article?.title ? article?.title : article?.name}<br /></h1> 
      <p style={{letterSpacing:"1px"}}>{article?.content ? article?.content+  content : article?.description + content}</p>
      
    </div>
    </div> 
  );
 
}