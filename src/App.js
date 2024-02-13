import React, { useState } from 'react';
import Users from './Users';
import EditUsersForm from './EditUsersForm';

function App() {
  const initialUsers = [
    { id: 1, name: 'John', email: 'john@example.com', gen: 1 },
    { id: 2, name: 'Jane', email: 'jane@example.com', gen: 2 },
    { id: 3, name: 'Alice', email: 'alice@example.com', gen: 1 },
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleEditUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <Users users={users} handleDeleteUser={handleDeleteUser} />
      <EditUsersForm users={users} handleEditUser={handleEditUser} />
    </div>
  );
}

export default App;

