import ReactDOM from "react-dom";
import React from "react";

export const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
