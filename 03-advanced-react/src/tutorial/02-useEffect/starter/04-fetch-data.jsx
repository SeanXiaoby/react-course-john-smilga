import { useEffect, useState } from "react";

const url = "https://api.github.com/users?per_page=100";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let currUsers = users;
      try {
        const response = await fetch(url);
        currUsers = await response.json();
        if (Array.isArray(currUsers)) {
          setUsers(currUsers);
        } else {
          currUsers = [currUsers];
        }
      } catch (err) {
        console.log(`Error: ${err}`);
      }

      console.log(currUsers);
    };

    fetchUsers();
  }, []);

  return (
    <section>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          return (
            <li className="user" key={user.id}>
              <img src={user.avatar_url} alt={user.login}></img>
              <div>
                <h5>{user.login}</h5>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
