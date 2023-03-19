import { useState } from "react";

const ShortCircuitOverview = () => {
  const [first, setFirst] = useState("Sean");
  const [second, setSecond] = useState("");

  return (
    <div>
      <h4>falsy OR: {second || "Hello"}</h4>
      <h4>falsy AND: {second || "Hello"}</h4>
      <h4>trusy OR: {first || "Hello"}</h4>
      <h4>trusy AND: {first || "Hello"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
