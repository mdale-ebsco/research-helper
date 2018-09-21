import React, { Component } from 'react';
import Header from './Header';
import Text from './Text';
import Button from './Button';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div class="research-helper">
        <Header heading="Research Helper"/>
        <div class="content">
          <div class="description">
            <p>
            The Research Helper is a tool to assist you in finding resources for your class paper, project, discussions, or other assignments.</p>
            <p> The Research Helper will ask you a few questions about your topic and the resources you need, then help you navigate the results. Ready to get started? Click "Start my Research" below!
            </p>
          </div>
          <Button value="Get Started!"/>
        </div>
      </div>
    );
  }
}

export default App;
