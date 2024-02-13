// In App.js

import React, { useState } from 'react';
import Users from './Users'; // assuming Users component is in a separate file

function App() {
  const [users, setUsers] = useState([
    { name: 'John', email: 'john@example.com', gen: 1 },
    { name: 'Jane', email: 'jane@example.com', gen: 2 },
    { name: 'Alice', email: 'alice@example.com', gen: 1 },
  ]);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Generation: {user.gen}</p>
        </div>
      ))}
      <Users users={users} />
    </div>
  );
}

export default App;

