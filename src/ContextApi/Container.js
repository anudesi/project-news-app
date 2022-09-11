import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context";
/* import jsonData from "../data/data.json" */
export default function Container({ children }) {
  const [data, setData] = useState([]);
  const [weather,setWeather] = useState({});

   useEffect(() => {
    (async function () {
      const urls = [
        `https://newsapi.org/v2/top-headlines?country=de&apiKey=${process.env.REACT_APP_API_KEY}`,
        `https://newsapi.org/v2/top-headlines/sources?category=sports&apikey=${process.env.REACT_APP_API_KEY}`,
        `https://newsapi.org/v2/top-headlines/sources?category=business&apikey=${process.env.REACT_APP_API_KEY}`,
        `https://newsapi.org/v2/top-headlines/sources?category=entertainment&apikey=${process.env.REACT_APP_API_KEY}`,
        `https://newsapi.org/v2/top-headlines/sources?category=science&apikey=${process.env.REACT_APP_API_KEY}`,
        `https://api.openweathermap.org/data/2.5/weather?q=hamburg&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
      ];

      async function getNews(url) {
        let response = await fetch(url);
        let sportsUrl = await response.json();
        return sportsUrl;
      }

      const headlines = await getNews(urls[0]);
      const sports = await getNews(urls[1]);
      const business = await getNews(urls[2]);
      const entertainment = await getNews(urls[3]);
      const science = await getNews(urls[4]); 
      const weatherResult = await getNews(urls[5]);

       const headlinesArr = headlines.articles;
      const sportsArr = sports.sources;
      const businessArr = business.sources;
      const entertainmentArr = entertainment.sources;
      const scienceArr = science.sources; 
      const weatherData = weatherResult
   
       setData({
        headlines: headlinesArr,
        sports: sportsArr,
        science: scienceArr,
        entertainment: entertainmentArr,
        business: businessArr
      }); 

      setWeather({
        city:weatherData.name,       
        temp:weatherData.main.temp
      })
      
    })();
  }, []);  
 
  
  return (
    <MyContext.Provider value={{ data, setData ,weather,setWeather}}>
      {children}
    </MyContext.Provider>
  );
}
