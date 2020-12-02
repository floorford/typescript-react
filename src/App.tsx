import React, { Component } from "react";

class App extends Component {
  sum(a: number, b: number): number {
    return a + b;
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>{this.sum(2, 3)}</p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
