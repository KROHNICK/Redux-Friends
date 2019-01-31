import React, { Component } from "react";

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    };
  }

  handleDelete = () => {
    this.setState({ deleting: true }, () => {
      this.props.deleteFriend(this.props.friend);
    });
  };

  render() {
    return (
      <div className={`friend ${this.props.name}`}>
        <p>{this.props.friend.name}</p>
        <p>{this.props.friend.age}</p>
        <p>{this.props.friend.email}</p>
        <button id={this.props.friend.id} onClick={this.props.deleteFriend}>
          Delete
        </button>
      </div>
    );
  }
}

export default Friend;
