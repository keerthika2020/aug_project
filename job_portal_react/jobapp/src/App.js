import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

// Define router paths
let routerPaths = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerPaths} />
    </div>
  );
}

export default App;
