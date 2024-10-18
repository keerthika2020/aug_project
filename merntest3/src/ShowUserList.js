
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveDetails } from './redux/Config'; 


function ShowUserList() {
  const userList = useSelector(state => state.myDetails);

  return (
    <div>
      <h1>Show User List</h1>
      <ul>
        {userList && userList.length > 0 ? (
          userList.map(user => (
            <li key={user.id}>
              {user.first_name} {user.last_name} - {user.email}
            </li>
          ))
        ) : (
          <li>No users found.</li>
        )}
      </ul>
    </div>
  );
}

export default ShowUserList;
