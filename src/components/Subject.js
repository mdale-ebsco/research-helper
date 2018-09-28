import React, { Component } from 'react';
import { cleanTitle } from '../helpers';
import '../css/App.css';

class Subject extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }


  render() {

    return (
      <span class="rs-subject-ctn" onClick={()=> this.props.callbackFromParent(this.props.subject.SubjectFull)}>
        <span class="rs-subject">{this.props.subject.SubjectFull}</span>
      </span>
    );
  }
}

export default Subject;
