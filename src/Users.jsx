import React from 'react';

function Users({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Generation: {user.gen}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;