import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <Child color="green" clickHandler={() => console.log("hello")}>
      content of props.children
    </Child>
  );
};

export default Parent;
