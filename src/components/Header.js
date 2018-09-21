import React from 'react';
import '../css/App.css';

const Header = (props) => (
  <header className="header">
    <h1>{props.heading}</h1>
  </header>
);

export default Header;
