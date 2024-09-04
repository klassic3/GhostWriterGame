
import '../styles/App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

/**import components */
import Root from './Root';
import Game from './Game';


/**react routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>
  },
  {
    path: '/game',
    element: <Game></Game>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
