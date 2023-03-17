import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div style={{ margin: "2rem auto" }}>
      <h4>I clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateBasics;
