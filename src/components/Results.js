import React, { Component } from 'react';
import '../css/App.css';

class Results extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }


  render() {
    const { result } = this.props;
    return (
      <div>
        Here are your results
      </div>
    );
  }
}

export default Results;
