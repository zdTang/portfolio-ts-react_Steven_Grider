import React from "react";
import { useState } from "react";

const users = [
  { name: "sarah", age: 100 },
  { name: "mike", age: 100 },
  { name: "peter", age: 100 },
  { name: "michael", age: 100 },
];

const UserSearch: React.FC = () => {
  const [searchItem, setSearchItem] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const search = () => {
    const foundUser = users.find((user) => {
      return user.name === searchItem;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button onClick={search}>Search</button>
      <h4>List is here</h4>
      {user && user.name}
    </div>
  );
};

export default UserSearch;
