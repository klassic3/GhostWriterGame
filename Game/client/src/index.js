import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { GameContextProvider } from './context/GameContext';
import { WordContextProvider } from './context/WordContext';
import { ScoreContextProvider } from './context/ScoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WordContextProvider>
    <GameContextProvider>
    <ScoreContextProvider>
    <App />
    </ScoreContextProvider>
    </GameContextProvider>
    </WordContextProvider>
  </React.StrictMode>
);

