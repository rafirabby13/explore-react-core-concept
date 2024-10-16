/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Friend from "./Friend.jsx";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const users = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await api.json();
      setFriends(data);
    };
    users();
  }, []);
  return (
    <div>
      <h3>Friends : {friends.length}</h3>
      {
        friends.map((friend)=>( <Friend
            key={friend.id}
            friend={friend}
            ></Friend>))
      }
    </div>
  );
};

export default Friends;
