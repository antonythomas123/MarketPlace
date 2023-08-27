import React from "react";
import { getUsersCollection } from "../../services/database";

function DBView() {
  const users = getUsersCollection();

  return (
    <div>
      <h2>Database Details</h2>
      <ul>
        {users.data.map((user, index) => (
          <li key={index}>
            <strong>Email:</strong> {user.email}, <strong>Password:</strong>{" "}
            {user.password}
            <br />
            {user.cart ? (
              <>
                <strong>Cart Items:</strong>
                <ul>
                  {user.cart.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.name} - ${item.price}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No cart items</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DBView;
