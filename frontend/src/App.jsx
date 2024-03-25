import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';

function App() {
  return (
   
    <Router> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} /> 
      </Routes> 
    </Router>
    
    //<div>MEET_SPACE</div>
  );
}

export default App;
