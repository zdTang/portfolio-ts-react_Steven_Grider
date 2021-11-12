import React from "react";
import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
      hi, this is children of ChildAsFC
    </ChildAsFC>
  );
};

export default Parent;
