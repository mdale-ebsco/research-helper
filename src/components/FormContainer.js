import React, { Component } from 'react';
import InputContainer from './InputContainer';
import Prompt from './Prompt';
import Button from './Button';
import '../css/App.css';

class FormContainer extends Component {
  render() {
    return (
      <div>
        <Prompt text="The Research Helper is a tool to assist you in finding resources for your class paper, project, discussions, or other assignments."/>
        <Prompt text="The Research Helper will ask you a few questions about your topic and the resources you need, then help you navigate the results. Ready to get started? Click 'Start my Research' below!"/>
      </div>
    );
  }
}

export default FormContainer;
