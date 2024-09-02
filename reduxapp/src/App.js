import './App.css';
import { RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import { mystore } from './redux/Config';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Web from './Web';

let routerPaths = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/home", element: <Home /> },
  {path:"/web",element:<Web/>},

]);

function App() {
  return (
    <Provider store={mystore}>
      
    <div className="App">
      <RouterProvider router={routerPaths} />
    </div>
    </Provider>
  );
}

export default App;