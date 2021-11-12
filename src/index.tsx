import ReactDOM from "react-dom";
import React from "react";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";

export const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
