import React, { useContext } from "react";
import { MyContext } from "../ContextApi/Context";
import { NavLink } from "react-router-dom";

export default function Home() {
 
  const { data } = useContext(MyContext);
  const homeContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus sunt officia, et eum ratione mollitia fuga ipsum modi, maiores at blanditiis sint architecto libero distinctio, ex saepe qui! Dicta nam officiis molestiae necessitatibus assumenda architecto labore excepturi quia non itaque quae vitae soluta, aperiam, odit voluptates saepe praesentium est totam recusandae earum commodi ";
  

  return (
    <div className="mainPages-container">
      {data?.headlines?.map((item, index) => {
        return (
          <div key={index} className="mainPages-card">
            <NavLink to={`/headlines/${item.title}`}>
            {item.urlToImage ? <img src={item.urlToImage} alt="pic"/>: <img src="https://picsum.photos/100/100" alt="pic"/> }
            </NavLink>

            <h4 >
              {item.description
                ? item.description.slice(0, 50)
                : homeContent.slice(0, 50)}
              <NavLink to={`/headlines/${item.title}`}>
              <br/>
                <span>
                  <b>More...</b>
                </span>
              </NavLink>
            </h4>
          </div>
        );
      })}
    </div>
  );
}
