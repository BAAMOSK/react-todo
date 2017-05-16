import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <form className="App-intro">
            <input type="text" name="todo" placeholder="create a todo..."/>
          </form>
      </div>
    );
  }
}

export default App;
