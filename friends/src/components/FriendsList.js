import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
export const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      });
  }, []);

  return (
    <div className="friendslist-container">
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
