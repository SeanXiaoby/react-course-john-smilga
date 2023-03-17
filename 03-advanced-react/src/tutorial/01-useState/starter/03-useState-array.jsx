import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id} style={{ margin: "1rem auto" }}>
            <h4>{person.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(person.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={clearAllItems}
      >
        Remove All
      </button>
    </div>
  );
};

export default UseStateArray;
