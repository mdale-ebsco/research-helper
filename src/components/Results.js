import React, { Component } from 'react';
import '../css/App.css';

class Results extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }


  render() {
    const { result } = this.props;
    var title = result.Items[0].Data;
    title = title.replace("&lt;highlight&gt;", "");
    title = title.replace("&lt;/highlight&gt;", "");
    console.log(title);
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default Results;
