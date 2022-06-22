import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const clients = {
    user1: {
      name: "paul",
      password: "password",
    },
    user2: {
      name: "orok",
      password: "password1",
    },
    user3: {
      name: "eku",
      password: "password2",
    },
  };

  function showData() {
    let data = Object.values(clients);
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <p>
        {data.map((client) => (
          <p>
            {client.name} {client.password}
          </p>
        ))}
      </p>

      <input />
    </div>
  );
};

export default Users;
