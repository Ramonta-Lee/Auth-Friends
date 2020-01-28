import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { AddNewFriendForm } from "./AddNewFriendForm";
export const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const updateFriendsList = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      });
  };

  // This is managing the state for the component
  useEffect(() => {
    updateFriendsList();
  }, []);

  return (
    <div className="friendslist-container">
      <AddNewFriendForm updateFriendsList={updateFriendsList} />
      {friends.map(friend => {
        return (
          <div className="card-container">
            <div className="card">
              <h1>{friend.name}</h1>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
