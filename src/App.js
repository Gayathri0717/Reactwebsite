import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes , Route } from 'react-router-dom'

import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Serivices';
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
     {/* <Route path='/' exact component={Home} /> */}
     <BrowserRouter>
    <div className="App">
        <Navbar /> 
         
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>

          {/* <Route path='/products' element={<Products />}></Route> */}
        </Routes>    
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
