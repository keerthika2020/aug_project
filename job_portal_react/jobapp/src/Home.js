//import logo from './logo.svg';
import { Navigate } from 'react-router-dom';
import './App.css';
import React, { useRef, useState ,useEffect} from 'react';



function Home() {
    useEffect(() => {
        let token = localStorage.getItem("token");
        if(token == undefined || token == ""){
            Navigate('login');
        }else{
            getData();
        }
        
      }, []);
      
  //to update ui with a dynamic data ie to print the output value in the webpage we need useState to store the data and display it in the webpage
  const [jobList,setJobList] = useState([]);
  const [id,setId] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nameRef = useRef();
  const cnameRef = useRef();
  const rnameRef = useRef();
  const emailRef= useRef();
  const passwordRef = useRef();
 // Get token from localStorage or sessionStorage
  const token = localStorage.getItem('token');
  const createJob =async()=>{
    let token = localStorage.getItem("token")
    let requirementsArray = rnameRef.current.value.split(',').map(req => req.trim());
    let data = {
      "name":nameRef.current.value,
      "company_name":cnameRef.current.value,
      "requirements":requirementsArray,
      "email":emailRef.current.value,
      "password":passwordRef.current.value,
    }
    let res = await fetch("http://localhost:8080/api/createJob",{method:"POST",body:JSON.stringify(data),headers:{"content-type":"application/json","token":token}});
    let json = await res.json();

    console.log(json);
    getData();
  }
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
          }else{
          alert("login failed ");
          }
    
  }
  const getData = async()=>{
    let token = localStorage.getItem("token")
      let res = await fetch("http://localhost:8080/api/jobslist",{method:"GET",headers:{"content-type":"application/json","token":token}});
      let json = await res.json();
      console.log(json);
      setJobList(json);

  }
  const deleteJob = async(id)=>{
    let token = localStorage.getItem("token")
    let res = await fetch("http://localhost:8080/api/deleteJobsById?id="+id,{"method":"delete",headers:{"content-type":"application/json","token":token}})
    if(res.ok){
      alert("Job Deleted");
    }else{
      alert("Error while Deleting!!!");
    }
    getData();
  }
  const loadDataForUpdate = async(id)=>{
    let token = localStorage.getItem("token")
   let matchJob = await jobList.filter((j)=>id == j._id);
   console.log(matchJob);
   setId(id);
   nameRef.current.value = matchJob[0].name;
   cnameRef.current.value = matchJob[0].company_name;
   rnameRef.current.value = matchJob[0].requirements;
   emailRef.current.value = matchJob[0].email;
   passwordRef.current.value = matchJob[0].password;
  }
  const updateJob = async()=>{
    let token = localStorage.getItem("token")
    let data = {
      "id":id,
      "name":nameRef.current.value ,
      "company_name":cnameRef.current.value ,
      "requirements":rnameRef.current.value, 
      "email":emailRef.current.value,
      "password":passwordRef.current.value
    }
    let res = await fetch("http://localhost:8080/api/updateJobsById",{method:"POST",body:JSON.stringify(data),headers:{"content-type":"application/json","token":token}});
    let json = await res.json();
    console.log(json);
    if(res.ok){
      alert("Job updated");
    }else{
      alert("Error while updating!!!");
    }
    getData();

  }

  return (
    <div className="App">
     
      <div><button onClick={getData}>get Job List </button></div>
      {
        jobList.map((obj,index)=>{
            return(
              <div key={index}>
              <h2 >{obj.name}</h2>
              <h4>{obj.company_name}</h4>
              <h4 >{obj.requirements}</h4>
              <h4 >{obj.email}</h4>
              <h4 >{obj.password}</h4>
              <button onClick={()=> deleteJob(obj._id)}>DeleteData</button>
              <button onClick={()=> loadDataForUpdate(obj._id)}>Update</button>
              </div>
            )
        })
      }
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
      <div>
        <h1> create jobs form</h1>
        <div><input type ="name"  placeholder="NAME"  ref={nameRef}></input></div><br></br>
        <div><input type ="name" placeholder="COMPANY NAME" ref={cnameRef}></input></div><br></br>
        <div><input type ="name" placeholder="REQ(comma-separated)" ref={rnameRef}></input></div><br></br>
        <div><input type ="name" placeholder="Email" ref={emailRef}></input></div><br></br>
        <div><input type ="name" placeholder="Password" ref={passwordRef}></input></div><br></br>
       
        <div><input type ="button" value="Submit" onClick={createJob}></input></div>
        <button onClick={()=> updateJob()}>Update</button>
      </div>
    </div>
  );
}

export default Home;