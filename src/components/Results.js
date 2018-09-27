import React, { Component } from 'react';
import { cleanTitle } from '../helpers';
import '../css/App.css';

class Results extends Component {
  constructor(props){
    super(props);

  }

  createTitle = () => {
    let title = [];
    Object.keys(this.props.result.Items).map(key =>  {
      if(this.props.result.Items[key].Label === 'Title' ) {
        var titlemarkup = cleanTitle(this.props.result.Items[key].Data);

        title = <span>{titlemarkup}</span>;
      }
    })
    return title;
  }

  render() {

    return (
      <div>
        <p><a onClick={this.props.loadSelectedStarter}>{this.createTitle()}</a></p>
      </div>
    );
  }
}

export default Results;
