import React, { Component } from "react";

import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="Friends">
      {props.friends.map(friend => {
        return (
          <Friend
            deleteFriend={props.deleteFriend}
            key={friend.id}
            friend={friend}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
