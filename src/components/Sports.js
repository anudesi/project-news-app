import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../ContextApi/Context";

export default function Sports() {
  const { data } = useContext(MyContext);
  /*   const sources = data.sources? data.sources: []  */

  return (
    <div  className="mainPages-container">
   
      {data?.sports?.map((news, index) => {
        return (
          <div key={index} className="mainPages-card">
            <NavLink to={`/sports/${news.name}`}><img src="https://picsum.photos/300/200" alt="pic"/>
            </NavLink>          

            <h4>{news.description.slice(0,80)} <br />
            <NavLink to={`/sports/${news.name}`}><span><b>more ...</b></span></NavLink>
            </h4>
          

          </div>
        );
      })}
    </div>
  );
}
