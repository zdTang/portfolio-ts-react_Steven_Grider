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

  const list =
    searchItem.trim().length === 0
      ? []
      : users.filter((item) => item.name.includes(searchItem));
  console.log(searchItem);
  console.log(list);

  const listItem = list.map((item, index) => <li key={index}>{item.name}</li>);
  return (
    <div>
      User Search
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <h4>List is here</h4>
      {listItem}
    </div>
  );
};

export default UserSearch;
