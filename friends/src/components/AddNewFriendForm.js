import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const AddNewFriendForm = props => {
  const [newFriend, setNewFriend] = useState({
    id: Math.random(),
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    // console.log(newFriend)
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log(res);
        props.updateFriendsList();
      })
      .catch(err => console.log("Error Post", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={newFriend.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="age">Age:</label>

      <input
        type="text"
        name="age"
        placeholder="Age"
        value={newFriend.age}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={newFriend.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Friend</button>
    </form>
  );
};
