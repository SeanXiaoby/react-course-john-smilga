import { useState } from "react";

const UseStateObject = () => {
  const people = [
    { id: 1, name: "Peter", age: "24", hobby: "read book" },
    { id: 2, name: "John", age: "45", hobby: "Play guitar" },
  ];

  const [person, setPerson] = useState(people[0]);
  const [otherName, setOtherName] = useState(people[1].name);

  const changePerson = (id) => {
    console.log(id);
    const newPerson = people.filter((person) => person.id !== id)[0];
    setPerson(newPerson);
    setOtherName(people.filter((person) => person.id === id)[0].name);
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys to: {person.hobby}</h4>
      <button
        type="button"
        className="btn"
        onClick={() => changePerson(person.id)}
      >
        show {otherName}
      </button>
    </div>
  );
};

export default UseStateObject;
