import React, { Component } from 'react';
import '../css/App.css';

class Prompt extends Component {
  render() {
    return (
        <p>{this.props.text}</p>
    );
  }
}

export default Prompt;
