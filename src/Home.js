import  App  from './App';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDescr from "./Component/MovieDescription/MovieDescr";
import { Navbar } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/movie/:id' element={<MovieDescr />}/>
        </Routes>
    </div>
  )
}

export default Home;