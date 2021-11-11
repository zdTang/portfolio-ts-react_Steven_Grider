import React from "react";
// in the child component, define a interface for props
interface ChildProps {
  color: string;
  clickHandler: () => void;
  children?: any;
}

// Approach one: Has some downsides, add property to component is not allowed
const Child = ({ color, clickHandler, children }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
      {children}
      <button onClick={clickHandler}>click</button>
    </div>
  );
};

export default Child;

// Approach two: good options, can add optional property, but not arbitrarily
export const ChildAsFC: React.FC<ChildProps> = ({ color, clickHandler }) => {
  return (
    <div>
      {color}
      <button onClick={clickHandler}></button>
    </div>
  );
};
