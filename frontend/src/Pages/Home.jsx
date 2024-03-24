import React, { useState } from 'react';
//import Login from './Login';
import { Link } from 'react-router-dom';

function Home() {
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md">
        <h1 className="mb-4 text-4xl font-semibold">Welcome to MEET_SPACE</h1>
        <div className="flex gap-4">
          <Link to="/login">
            <button className="bg-white text-black px-4 py-2 rounded-md focus:outline-none focus:bg-blue-600">Login</button>
          </Link>
          <Link to="/registration">
            <button className="bg-white text-black px-4 py-2 rounded-md focus:outline-none focus:bg-blue-600">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}




export default Home;
