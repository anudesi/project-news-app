import React, { useContext } from "react";
import { MyContext } from "../ContextApi/Context";


export default function BreakingNews() {
  const { data } = useContext(MyContext);

  return (
    <div className="breakingNews-container">
      <h5 className="breakingNews-text">Breaking News</h5>
      <h1 className="breakingNews-msg">        
        {data?.headlines?.map((news) => {
          return news.title;
        })}
      </h1>
    </div>
  );
}
