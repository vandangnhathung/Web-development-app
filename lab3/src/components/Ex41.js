import React from "react";

const Ex41 = () => {
  return (
    <div>
      <button
        className="element"
        style={{
          margin: "0 auto",
          fontSize: "15px",
          backgroundColor: " #d0f0c0",
          border: "1px green solid",
          alignItems: "center",
        }}
        onClick={() => {
          alert("Alert!!!!");
        }}
      >
        Green is the prime color of the world{" "}
      </button>
    </div>
  );
};

export default Ex41;
