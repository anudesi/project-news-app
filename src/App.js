import React from'react'
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Sports from "./components/Sports"
import Business from './components/Business';
import Science from './components/Science';
import Container from './ContextApi/Container';
import Entertainment from './components/Entertainment';
import Home from './components/Home';
import NewsCard from './components/NewsCard';

function App() {
  return (
    <Container>
    <div className='main-container'>
      <div className='heading'>
      <h1>News Now</h1>
      </div>
      <h1 class="text-3xl font-bold underline text-orange-600">
    Hello world!
    </h1>
    <Navbar/>
    <Routes>
    <Route path="home"element={<Home/>}> </Route> 
      <Route path="home/:newstitle"element={<NewsCard/>}/>
     
    
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
