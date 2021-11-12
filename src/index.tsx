import ReactDOM from "react-dom";
import React from "react";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

export const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
