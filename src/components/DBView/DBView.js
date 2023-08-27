
import React from 'react';
import { getUsersCollection } from '../../services/database';

function DBView() {
  const users = getUsersCollection();

  return (
    <div>
      <h2>Database Details</h2>
      <ul>
        {users?.data.map((user, index) => (
          <li key={index}>
            Email: {user.email}, Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DBView;
