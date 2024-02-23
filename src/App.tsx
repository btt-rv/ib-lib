import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import PastPapersPage from './components/pastPapersPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/past-papers/:id" element={<PastPapersPage/>} />
    </Routes>
  ); 
}

export default App;
