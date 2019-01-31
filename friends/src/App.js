import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import { getFriends, addFriend, updateFriend, deleteFriend } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  deleteFriend = id => {
    if (this.props.deletingFriend === false) {
      this.props.deleteFriend(id);
    }
  };

  render() {
    {
      console.log(this.props.friends);
    }
    return (
      <div className="App">
        <FriendForm
          addFriend={this.props.addFriend}
          savingFriends={this.props.savingFriends}
          friendsSaved={this.props.friendsSaved}
          error={this.props.error}
        />
        {this.props.error ? <h2>Could Not Fetch Friends</h2> : null}
        <FriendsList
          friends={this.props.friends}
          deleteFriend={this.deleteFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friendsFetched: state.friendsReducer.friendsFetched,
    friendsSaved: state.friendsReducer.friendsSaved,
    savingFriends: state.friendsReducer.savingFriends,
    updatingFriend: state.friendsReducer.updatingFriend,
    friendUpdated: state.friendsReducer.friendUpdated,
    deletingFriend: state.friendsReducer.deletingFriend,
    friendDeleted: state.friendsReducer.friendDeleted
  };
};

export default connect(
  mapStateToProps,
  {
    getFriends,
    addFriend,
    updateFriend,
    deleteFriend
  }
)(App);
