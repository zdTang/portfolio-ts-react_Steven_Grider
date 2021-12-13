import React from "react";
// in the child component, define a interface for props
// this interface need a object and have a key called COLOR
interface ChildProps {
  color: string;
}

//const Child = (color: ChildProps) => {// wrong
// here , the props we need is an object
// here, by using destruct, we can use color directly
const Child = ({ color }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );
};

export default Child;
