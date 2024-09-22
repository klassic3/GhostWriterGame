
import '../styles/App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

/**import components */
import Root from './Root';
import Game from './Game';
import GameOver from './GameOver';


/**react routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>
  },
  {
    path: '/game',
    element: <Game></Game>
  },
  {
    path: '/gameover',
    element: <GameOver></GameOver>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
