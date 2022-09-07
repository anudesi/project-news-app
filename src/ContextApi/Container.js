import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "./Context";
import jsonData from "../data/data.json"
export default function Container({ children }) {
  const [data, setData] = useState([]);
  const location = useLocation();

  const category = location.pathname.slice(1);
 
  let url;
  const homeUrl = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${process.env.REACT_APP_API_KEY}`;
  if (category === "home") {   
    url = homeUrl;
  } else {
     url = `https://newsapi.org/v2/top-headlines/sources?category=${category}&apikey=${process.env.REACT_APP_API_KEY}`;
  }
 


  useEffect(() => {   
  /*    fetch(url)   
      .then((res) => res.json())
     .then((result) => setData({sources: result.sources, articles: result.articles}))       
      .then(result => {
        console.log(result)
    }) */
    setData({sources: undefined, articles:jsonData.articles})
  }, [location.pathname]);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
}
