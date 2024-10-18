import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useState } from 'react';
import Apilogin from './Apilogin';
import Register from './Register';

function App() {
  
      
  return (
    <div className="App">
      <Register></Register>
      <Login/>
      <Apilogin/>
    
    </div>
  );
}

export default App;
