import React from "react";

const Ex47 = () => {
  const handleSubmit = () => {};
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">Enter a username:</label>
      <input name="user" type="text" onChange={handleInput} />
    </form>
  );
};

export default Ex47;
