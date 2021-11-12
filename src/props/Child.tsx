import React from "react";
// in the child component, define a interface for props
interface ChildProps {
  color: string;
  onClick: () => void;
}

// Approach two: good options, can add optional property, but not arbitrarily
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      <h1>{children}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
