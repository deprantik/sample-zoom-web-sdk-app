import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zoomModule: null
    }
  }

  componentDidMount() {
    import('./ZoomSDK').then(module => this.setState({ zoomModule: module.default}))
  }

  render() {
    let { zoomModule: Component } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
          {Component ?
            <Component /> : null}
        </body>
      </div>
    );
  }
}

export default App;
