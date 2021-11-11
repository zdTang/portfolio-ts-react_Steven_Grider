import React from "react";
// in the child component, define a interface for props
interface ChildProps {
  color: string;
}

const Child = ({ color }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );
};

export default Child;

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
