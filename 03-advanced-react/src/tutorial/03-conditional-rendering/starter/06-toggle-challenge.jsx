import { useState } from "react";

const ToggleChallenge = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <button type="button" className="btn" onClick={handleClick}>
        toggle
      </button>
      {display && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello sean!</div>;
};

export default ToggleChallenge;
