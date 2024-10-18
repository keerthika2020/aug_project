import React, { useState } from 'react';

export default function Register() {
    const [userList ,setUserList] = useState([]);
    async function getData(){
        let res = await fetch("https://reqres.in/api/users?page=1",{method:"GET"});
        let json = await res.json();
        setUserList(json['data']);
    }
 
  

  return (
    
    <div>
        
      <button onClick={getData}>GET NAMES</button>
      {
        userList.map((obj,index) =>{
            return(
                <div>
                    <h1>{obj.first_name}</h1>
                </div>
            )
        })
      }
    </div>
  );
}
