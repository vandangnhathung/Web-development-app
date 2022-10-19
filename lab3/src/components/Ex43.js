import { logDOM } from "@testing-library/react";
import React from "react";

const Ex43 = () => {
  const smartPeople = [
    { name: "hunghung", age: 82, IQ: 199 },
    { name: "haha", age: 82, IQ: 199 },
    { name: "hihi", age: 82, IQ: 199 },
    { name: "haihai", age: 82, IQ: 199 },
    { name: "hoho", age: 82, IQ: 199 },
  ];
  return (
    <ul>
      {smartPeople.map((item, index) => (
        <>
          <li key={index}>{item.name}</li>
          <li key={index}>{item.age}</li>
        </>
      ))}
    </ul>
  );
};

export default Ex43;
