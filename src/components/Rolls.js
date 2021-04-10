import React from "react";
import Roll from "./Roll";

const Rolls = () => {
  let pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {pins.map((pin, index) => (
        <Roll pin={index} />
      ))}
    </>
  );
};

export default Rolls;
