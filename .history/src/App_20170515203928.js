import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <form>
            <input type="text" name="todo" placeholder="create a todo"/>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
