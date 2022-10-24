 
import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.scss';
import Home from "./pages/Home/Home";

 
class App extends Component {
  render() {
    return (
       
            <BrowserRouter>
            <React.Fragment>
            <Routes>
        <Route path="/" element={<Home/>}>
           
        </Route>
      </Routes>
            </React.Fragment>
            </BrowserRouter>
         
    );
  }
}

export default App;
