import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: 'asdfasf'
  }

  _handleChange = e => {

  }

  render() {
    return (
      <div className="App">
          <form className="App-intro">
            <input value={this.state.text} onChange={this._handleChange}type="text" name="text" placeholder="create a todo..."/>
          </form>
      </div>
    );
  }
}

export default App;
