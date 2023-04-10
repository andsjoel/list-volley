import React from 'react';
import { PlayersProvider } from './context/PlayersContext';
import './App.css';
import AddPlayer from './components/AddPlayer';
import FirstList from './components/FirstList';

function App() {
  return (
    <PlayersProvider>
      <div>
        <AddPlayer />
        <FirstList />
      </div>
    </PlayersProvider>
  );
}

export default App;
