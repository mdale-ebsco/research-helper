import React, { Component } from 'react';
import Subject from './Subject';
import { cleanTitle } from '../helpers';
import '../css/App.css';

class Subjects extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }


  render() {

    return (
      <div class="rs-subjects">
        <h3>Related Subjects</h3>
        {Object.keys(this.props.subjects).map(key => <Subject key={key} subject={this.props.subjects[key]} callbackFromParent={this.props.callbackFromParent}/>)}
      </div>
    );
  }
}

export default Subjects;
