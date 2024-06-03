import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './pages/Home';
import Game from './pages/Game';

const App = () => (
  <Router>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
