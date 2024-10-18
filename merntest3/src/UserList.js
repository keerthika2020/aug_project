import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveDetails } from './redux/Config';





function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => {
        dispatch(saveDetails(data.data));
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, [dispatch]);

  return (
    <div>
      <h1>User List</h1>
      <p>Fetching and storing user data...</p>
    </div>
  );
}

export default UserList;
