
import './styles/App.css';

import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'

/**import components */
import Root from './pages/Root';
import Game from './pages/Game';
import GameOver from './pages/GameOver';

import{} from 'react-router-dom'

//context for protecting routes
import{ useUserContext } from './hooks/useUserContext'

//contextproviders





function App() {
  const {user}= useUserContext();
  return (
    <BrowserRouter>
    <Routes>
            <Route 
              path="/"
              element={!user ?
                <Root/>
                :<Navigate to="/game"/>}
            />
            <Route 
              path="/game" 
              element={user?
               
                  <Game/>
               
                :<Navigate to="/"/>} 
            />
            <Route 
              path="/gameover" 
              element={user ?
                <GameOver/>
                :<Navigate to="/"/>} 
            />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
