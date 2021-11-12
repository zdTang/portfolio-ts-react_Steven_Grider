import ReactDOM from "react-dom";
import React from "react";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./classes/UserSearch";
import EventComponent from "./events/EventComponent";

const dataCollection = [
  { name: "sarah", age: 100 },
  { name: "mike", age: 100 },
  { name: "peter", age: 100 },
  { name: "michael", age: 100 },
];

export const App = () => {
  return (
    <div>
      <UserSearch users={dataCollection} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
