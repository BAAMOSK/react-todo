import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <div className="App">
          <form className="App-intro">
            <input type="text" name="text" placeholder="create a todo..."/>
          </form>
      </div>
    );
  }
}

export default App;
