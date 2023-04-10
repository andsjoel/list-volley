import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlayersProvider } from './context/PlayersContext';
import './App.css';
import Home from './page/Home';

function App() {
  return (
    <PlayersProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </PlayersProvider>
  );
}

export default App;
