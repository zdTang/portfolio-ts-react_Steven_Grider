import React from "react";
import { useState } from "react";

const GuestList: React.FC = () => {
  const [guest, setGuest] = useState("");
  const [guestList, setGuestList] = useState<string[]>([]);

  const addGuestHandler = () => {
    console.log(guest);
    setGuestList((prev) => [...prev, guest]);
    setGuest("");
  };

  const inputHandler = (e: any) => {
    setGuest(e.target.value);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <input type="text" value={guest} onChange={inputHandler} />
      <button onClick={addGuestHandler}>Add Guest</button>
    </div>
  );
};
export default GuestList;
