import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        const userJson = await response.json();
        if (response.ok) {
          setisLoading(false);
          setUser(userJson);
        } else {
          setisLoading(false);
          setisError(true);
        }
        // console.log(userJson);
      } catch (err) {
        console.log(err);
        setisError(true);
      }
    }, 1000);
  }, []);

  if (isError) {
    return <h2>Error occurred!</h2>;
  }

  if (isLoading) {
    return <h2>Loading user...</h2>;
  } else {
    const { avatar_url, login, company, bio } = user;
    return (
      <div>
        <img
          src={avatar_url}
          alt={login}
          style={{ width: "150px", borderRadius: "25px" }}
        ></img>
        <h2>{login}</h2>
        <h4>Works at {company}</h4>
        <p>Bio: {bio}</p>
      </div>
    );
  }
};
export default MultipleReturnsFetchData;
