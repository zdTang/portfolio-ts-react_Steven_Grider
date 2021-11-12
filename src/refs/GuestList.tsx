import React from "react";
import { useState, useRef, useEffect } from "react";

const GuestList: React.FC = () => {
  const [guest, setGuest] = useState("");
  const [guestList, setGuestList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null); //  if not use inputRef, it will be null

  /// run only one time
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const addGuestHandler = () => {
    setGuestList((prev) => [...prev, guest]);
    setGuest("");
  };

  const inputHandler = (e: any) => {
    setGuest(e.target.value);
  };

  const guests = guestList.map((item, index) => <p key={index}>{item}</p>);

  return (
    <div>
      <h3>Guest List</h3>
      {guests}
      <input type="text" ref={inputRef} value={guest} onChange={inputHandler} />
      <button onClick={addGuestHandler}>Add Guest</button>
    </div>
  );
};
export default GuestList;
