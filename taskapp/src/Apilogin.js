
import { useState } from 'react';
export default  function Apilogin(){
  const[email,setEmail] = useState('');
    const[password,setPass] = useState('');
    const validate =async()=> {
      
      if(email === ''){
        alert("please enter a email id");
      }else if(password === ''){
        alert("please enter a password");
      }else{
        alert("submitted successfully..");
      }
      let data = {
        "email":"",
        "password": ""
      }
      let response = await fetch("https://reqres.in/api/login",{"method":"POST",body:JSON.stringify(data),headers:{"content-type": "application/json"}});
      let userData = await response.json();
      if(response.ok){
          alert("you are correct");
      }else{
          alert("you are wrong");
      }
      console.log(userData);
}
   
    
    
      
    
      
      return(
          <div className='container'>
        <h4>{email}</h4>
      <h4>{password}</h4>
      
      <p><input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)}/><br></br><br></br>
      <input type='text' placeholder='password' onChange={(e) => setPass(e.target.value)}/><br></br><br></br>
      <button onClick={()=>validate()}>SUBMIT</button></p>
        
      </div>
      )
  }