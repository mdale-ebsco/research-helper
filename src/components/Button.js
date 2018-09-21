import React from 'react';
import '../css/App.css';

const Button = (props) => (
  <button onClick={props.event}>{props.value}</button>
);

export default Button;
