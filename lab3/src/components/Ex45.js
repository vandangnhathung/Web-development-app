import React from "react";

const user = {
  name: "elon musk",
  age: 49,
};
const Ex45 = () => {
  return (
    <div>
      {user.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <span>{item.age}</span>
        </div>
      ))}
    </div>
  );
};

export default Ex45;
