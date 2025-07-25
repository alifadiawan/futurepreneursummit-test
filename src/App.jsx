import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home'
import LandingPage from './Pages/LandingPage';
import DetailEvents from './Pages/DetailEvents';
import News from './Pages/News';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/event-detail" element={<DetailEvents />} />
      </Routes>
    </Router>
  )
}

export default App
