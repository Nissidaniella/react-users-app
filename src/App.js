import React, { useState } from 'react';
import UsersForm from './UsersForm';

function App() {
  const [users, setUsers] = useState([
    { name: 'John', email: 'john@example.com', gen: 1 },
    { name: 'Jane', email: 'jane@example.com', gen: 2 },
    { name: 'Alice', email: 'alice@example.com', gen: 1 },
  ]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Generation: {user.gen}</p>
        </div>
      ))}
      <UsersForm handleAddUser={handleAddUser} />
    </div>
  );
}

export default App;

