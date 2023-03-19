import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name: name || "Sean" });
  const logout = () => setUser(null);

  return (
    <div>
      {user ? <h4>Hello! {user.name}</h4> : <h4>Please Log in</h4>}
      <button
        className="btn"
        onClick={() => {
          user ? logout() : login("John");
        }}
      >
        {user ? "Log out" : "Log in"}
      </button>
    </div>
  );
};

export default UserChallenge;
