import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodo } from './actions/todos';
import './App.css';

class App extends Component {
  state = {
    text: '',
  };

  _handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state.text);
  }

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
};

  render() {
    return (
      <div className="App">
        <form className="App-intro" onSubmit={this._handleSubmit}>
          <input
            value={this.state.text}
            onChange={this._handleChange}
            type="text"
            name="text"
            placeholder="create a todo..."
          />
        </form>
        <br />
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}), { createTodo })(App);
