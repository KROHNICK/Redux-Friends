import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  margin: 0 auto;
`;

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    };
    this.props.addFriend(newFriend);
    this.setState({
      name: "",
      email: "",
      age: ""
    });
  };

  render() {
    return (
      <Form>
        <label>Name</label>
        <input
          onChange={this.handleChanges}
          value={this.state.name}
          type="text"
          placeholder="name"
          name="name"
        />
        <label>Email</label>
        <input
          onChange={this.handleChanges}
          value={this.state.email}
          type="text"
          placeholder="email"
          name="email"
        />
        <label>Age</label>
        <input
          onChange={this.handleChanges}
          value={this.state.age}
          type="text"
          placeholder="age"
          name="age"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </Form>
    );
  }
}

export default FriendForm;
