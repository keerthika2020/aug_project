//import React from 'react';
import React, { useState } from 'react';

export default function UserList() {
  const [userList ,setUserList] = useState([]);
  const getPage = async (event) => {
    const page = event.target.value;
    let result = await fetch(`https://reqres.in/api/users?page=${page}`, { method: "GET" });
    let userData = await result.json();
    setUserList(userData['data']);
    console.log(userData); 
  };

  return (
    <div>
      <h1>USER LIST</h1><br />
      <select onChange={getPage}>
        <option>SELECT</option>
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
      </select>
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
