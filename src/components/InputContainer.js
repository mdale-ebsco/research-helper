import React, { Component } from 'react';
import Input from './Input';

import '../css/App.css';

class InputContainer extends Component {
  render() {
    return (
      <div>
        <Input/>
        <Input/>
      </div>
    );
  }
}

export default InputContainer;
