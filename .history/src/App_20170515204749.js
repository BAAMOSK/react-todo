import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: '',
  };

  _handleSubmit = e => {
    e.preventDefault();
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
      </div>
    );
  }
}

export default App;
