import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//please set the zoom webinar id, password and apikey and api secret in the signature.js file

export default class App extends Component {

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
          {Component ?
            <Component /> : null}
      </div>
    );
  }
}