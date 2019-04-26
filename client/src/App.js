import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/api/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }
  
  render() {
    const { users } = this.state;

    let userItems = users.map(({ name, phone, email }, i) => (
      <li key={i}>{name} | {phone} | {email}</li>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <h4>Users</h4>
        {users.length ? (
          <ul>
            {userItems}
          </ul>
        ) : (
          <h5>Loading users...</h5>
        )}
        </header>
      </div>
    );
  }
}

export default App;
