import React, { useState, useEffect } from 'react';

function EditUsersForm({ users, handleEditUser }) {
  const [editUser, setEditUser] = useState({ id: null, name: '', email: '', gen: '' });

  useEffect(() => {
    if (users.length > 0) {
      setEditUser(users[0]);
    }
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditUser(editUser);
  };

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={editUser.name} onChange={handleChange} />
      <input type="text" name="email" value={editUser.email} onChange={handleChange} />
      <input type="text" name="gen" value={editUser.gen} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditUsersForm;