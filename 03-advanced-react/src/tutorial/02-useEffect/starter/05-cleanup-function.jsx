import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <SomeComponent />}
    </div>
  );
};

const SomeComponent = () => {
  useEffect(() => {
    console.log("hmmm..");
  }, []);
  return <h1>Hello from sean!</h1>;
};

export default CleanupFunction;
