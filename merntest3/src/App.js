import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import UserList from './UserList';
import ShowUserList from './ShowUserList';
import { mystore } from './redux/Config'; // Correct path

const routerPaths = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/userlist", element: <UserList /> },
  { path: "/showuserlist", element: <ShowUserList /> },
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
