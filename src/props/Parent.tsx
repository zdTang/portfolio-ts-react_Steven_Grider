import React from "react";
import Child from "./Child";

const Parent = () => {
  return <Child color="green" clickHandler={() => console.log("hello")} />;
};

export default Parent;
