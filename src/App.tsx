import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import PastPapersListItem from './components/pastPapersListItem';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/past-papers/:id" element={<PastPapersListItem/>} />
    </Routes>
  ); 
}

export default App;
