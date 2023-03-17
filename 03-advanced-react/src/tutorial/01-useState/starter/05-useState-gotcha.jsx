import React from "react";

const UseStateGotcha = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = (e) => {
    setTimeout(() => {
      setCount((currCount) => {
        return currCount + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
