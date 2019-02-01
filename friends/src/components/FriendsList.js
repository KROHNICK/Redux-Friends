import React, { Component } from "react";
import styled from "styled-components";
import Friend from "./Friend";

const Friends = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const FriendCard = styled.div`
  width: 200px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const FriendsList = props => {
  return (
    <Friends>
      {props.friends.map(friend => {
        return (
          <FriendCard>
            <Friend
              deleteFriend={props.deleteFriend}
              key={friend.id}
              friend={friend}
            />
          </FriendCard>
        );
      })}
    </Friends>
  );
};

export default FriendsList;
