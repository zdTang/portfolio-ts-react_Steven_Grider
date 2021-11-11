import ReactDOM from "react-dom";
import React from "react";
import Parent from "./props/Parent";

export const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <Parent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
