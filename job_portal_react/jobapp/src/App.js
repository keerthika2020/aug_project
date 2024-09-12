//import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  //to update ui with a dynamic data ie to print the output value in the webpage we need useState to store the data and display it in the webpage
  const [jobList,setJobList] = useState([]);
  const [id,setId] = useState([]);
  const nameRef = useRef();
  const cnameRef = useRef();
  const rnameRef = useRef();

  const createJob =async()=>{
    let requirementsArray = rnameRef.current.value.split(',').map(req => req.trim());
    let data = {
      "name":nameRef.current.value,
      "company_name":cnameRef.current.value,
      "requirements":requirementsArray,
    }
    let res = await fetch("http://localhost:8080/createJob",{method:"POST",body:JSON.stringify(data),headers:{"content-type":"application/json"}});
    let json = await res.json();

    console.log(json);
    getData();
  }
  const getData = async()=>{
      let res = await fetch("http://localhost:8080/jobslist",{method:"GET"});
      let json = await res.json();
      console.log(json);
      setJobList(json);

  }
  const deleteJob = async(id)=>{
    let res = await fetch("http://localhost:8080/deleteJobsById?id="+id,{"method":"delete"})
    if(res.ok){
      alert("Job Deleted");
    }else{
      alert("Error while Deleting!!!");
    }
  }
  const loadDataForUpdate = async(id)=>{
   let matchJob = await jobList.filter((j)=>id == j._id);
   console.log(matchJob);
   setId(id);
   nameRef.current.value = matchJob[0].name;
   cnameRef.current.value = matchJob[0].company_name;
   rnameRef.current.value = matchJob[0].requirements;
  }
  const updateJob = async()=>{
    let data = {
      "id":id,
      "name":nameRef.current.value ,
      "company_name":cnameRef.current.value ,
      "requirements":rnameRef.current.value, 
    }
    let res = await fetch("http://localhost:8080/updateJobsById",{method:"POST",body:JSON.stringify(data),headers:{"content-type":"application/json"}});
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
              <button onClick={()=> deleteJob(obj._id)}>DeleteData</button>
              <button onClick={()=> loadDataForUpdate(obj._id)}>Update</button>
              </div>
            )
        })
      }
      <div>
        <h1> create jobs form</h1>
        <div><input type ="name"  placeholder="NAME"  ref={nameRef}></input></div><br></br>
        <div><input type ="name" placeholder="COMPANY NAME" ref={cnameRef}></input></div><br></br>
        <div><input type ="name" placeholder="REQ(comma-separated)" ref={rnameRef}></input></div><br></br>
        <div><input type ="button" value="Submit" onClick={createJob}></input></div>
        <button onClick={()=> updateJob()}>Update</button>
      </div>
    </div>
  );
}

export default App;
