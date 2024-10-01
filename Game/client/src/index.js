import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { GameContextProvider } from './context/GameContext';
import { WordContextProvider } from './context/WordContext';
import { ScoreContextProvider } from './context/ScoreContext';
import { UserContextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
    <WordContextProvider>
    <GameContextProvider>
    <ScoreContextProvider>
    <App />
    </ScoreContextProvider>
    </GameContextProvider>
    </WordContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

