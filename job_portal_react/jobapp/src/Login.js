import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation


export default function Login(){
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook for navigation
  const loginapi = async () => {
    let data = {
      "email": email,
      "password": password,
    };
      let res = await fetch("http://localhost:8080/login",{method:"POST",body:JSON.stringify(data),headers:{"content-type":"application/json"}})
      if(res.ok){
          let json = await res.json();
          console.log(json);
          // Store token received after job creation
          localStorage.setItem('token', json.token); 
          navigate('/home');          
          }else{
          alert("login failed ");
          }
    
  }
    
    return(
        <div>
        <h1>LOGIN</h1>
        
        
        <div>
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div><br/>
  
        <div>
          <input 
            type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div><br/>
  
        <div>
        
          <input type="button" value="Submit" onClick={loginapi} />
        </div>
    </div>
    )
}