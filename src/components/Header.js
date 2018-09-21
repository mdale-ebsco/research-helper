import React, { Component } from 'react';
import '../css/App.css';

const Header = (props) => (
  <header class="header">
    <h1>{props.heading}</h1>
  </header>
);

export default Header;
