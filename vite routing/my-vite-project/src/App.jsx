import React from "react";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
import Login from "./Routing/Login";
import NavBar from "./Routing/NavBar";
import { Routes,Route } from "react-router-dom";

import './App.css'


const App = () => {
  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      {/* <Home/>
      <About/>
      <Contact/>
      <Login/> */}
    </div>
  )
}
export default App
