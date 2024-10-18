import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useState } from 'react';

function App() {
  let firstname = "Keerthika";
  //let email = "kiki@gmail.com";
  const[email,setEmail] = useState('');
  const[mobile,setMobile]=useState('');
  const[address,setAddress] = useState("no:89, 7th block , mugappair west , chennai -37");
  const valid =()=> {
    if(email == ''){
      alert("please enter a email id");
    }else if(mobile == ''){
      alert("please enter a mobile number");
    }else{
      alert("submitted successfully..")
    }

  }
  return (
    <div className="container">
      <h3>this is app component</h3>
      <h3>{firstname}</h3>
      <h4>{email}</h4>
      <h4>{mobile}</h4>
      <h4>{address}</h4>
      <Home/>
      <p><input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)}/><br></br><br></br>
      <input type='text' placeholder='mobile' onChange={(e) => setMobile(e.target.value)}/><br></br><br></br>
      <button onClick={()=>valid()}>SUBMIT</button></p>
        
    </div>
  );
}

export default App;
