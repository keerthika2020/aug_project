import './App.css';
import Home from './Home';
import About from './About';



function App() {
  const getUser=async()=>{
    let res=await fetch('https://reqres.in/api/users/2');
    let serverres=await res.json();
    console.log(serverres['data']);
  }
  return (
    <div>
      <Home></Home>
      <About></About>
      <button onClick={getUser}>Click to get user list</button>
    </div>
  );
}

export default App;
