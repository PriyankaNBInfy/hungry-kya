import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(1);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h3>Name:{name}</h3>
      <p>Location:{location}</p>
    </div>
  );
};

export default User;
