import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

/** import components */
import Root from './pages/Root';
import Game from './pages/Game';
import GameOver from './pages/GameOver';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Root />}
        />
        <Route
          path="/game"
          element={<Game />}
        />
        <Route
          path="/gameover"
          element={<GameOver />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
