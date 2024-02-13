import React, { Component } from 'react';

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gen: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen
    };
    this.props.handleAddUser(newUser);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        <input type="text" name="gen" value={this.state.gen} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UsersForm;