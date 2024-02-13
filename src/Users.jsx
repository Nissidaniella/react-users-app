import React from 'react';

function Users({ users, handleDeleteUser }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Generation: {user.gen}</p>
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Users;
