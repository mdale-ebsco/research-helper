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
        <Header/>
        <div class="content">
          <Text/>
          <Button/>
        </div>
      </div>
    );
  }
}

export default App;
