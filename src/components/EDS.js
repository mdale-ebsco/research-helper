import React, { Component } from 'react';
import Subjects from './Subjects';
import { cleanTitle, cleanHTML } from '../helpers';
import '../css/App.css';

class EDS extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  createEntry = () => {
      return <div>Hello</div>;
  }

  render() {

    return (
      <div class="rs-entry">
        {this.createEntry()}
      </div>
    );
  }
}

export default EDS;
