import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';

function App() {
  const subjects:string[] = ["Maths AA", "Maths AI", "Chemistry", "Physics", "Biology"];

  return (
    <Routes>
      <Route path="/" element={<HomePage subjects={subjects}/>} />
    </Routes>
  ); 
}

export default App;
