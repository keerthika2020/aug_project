import { useState } from 'react';

export default function Login(){
    const[email,setEmail] = useState('');
    const[password,setPass] = useState('');
    const validate =()=> {
        if(email === ''){
          alert("please enter a email id");
        }else if(password === ''){
          alert("please enter a password");
        }else{
          alert("submitted successfully..");
        }
  }
    
    return(
        <div className='container'>
      <h4>{email}</h4>
      <h4>{password}</h4>
      
      <p><input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)}/><br></br><br></br>
      <input type='text' placeholder='password' onChange={(e) => setPass(e.target.value)}/><br></br><br></br>
      <button onClick={()=>validate()}>LOGIN</button></p>
    </div>
    )
}