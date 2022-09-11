import React from'react'
import './App.css';
import "./index.css" 
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Sports from "./components/Sports"
import Business from './components/Business';
import Science from './components/Science';
import Container from './ContextApi/Container';
import Entertainment from './components/Entertainment';
import Home from './components/Home';
import NewsCard from './components/NewsCard';
import BreakingNews from './components/BreakingNews';

function App() {
  return (
    <Container>
    <div className='main-container'>
      <div className='news-logo'>   
      <h1>News Now</h1>
      
      </div>
     
    <Navbar/>
   <BreakingNews/>
   
     <Routes>
      <Route path="/" element={<Home/>}/>  
      <Route path="/:category/:newstitle"element={<NewsCard/>}/>
      <Route path="/sports"element={<Sports/>}/>
      <Route path="/business"element={<Business/>}/>
      <Route path="/science"element={<Science/>}/>
      <Route path="/entertainment"element={<Entertainment/>}/>
    </Routes> 
    
  
    </div>
    </Container>
  );
}

export default App;
