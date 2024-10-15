import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { GameContextProvider } from './context/GameContext';
import { WordContextProvider } from './context/WordContext';
import { ScoreContextProvider } from './context/ScoreContext';
import { ScoreContextProvider2 } from './context/ScoreContext2';
import { UserContextProvider } from './context/UserContext';
import { IdContextProvider } from './context/IdContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IdContextProvider>
    <UserContextProvider>
    <WordContextProvider>
    <GameContextProvider>
    <ScoreContextProvider>
    <ScoreContextProvider2>
    <App />
    </ScoreContextProvider2>
    </ScoreContextProvider>
    </GameContextProvider>
    </WordContextProvider>
    </UserContextProvider>
    </IdContextProvider>
  </React.StrictMode>
);

