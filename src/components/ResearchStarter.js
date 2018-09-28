import React, { Component } from 'react';
import Subjects from './Subjects';
import { cleanTitle, cleanHTML } from '../helpers';
import '../css/App.css';

class ResearchStarter extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  createEntry = () => {
    let i = 0;
    let entry = [];
    var plink = this.props.selected.PLink;
    var thumbnail;
    let header = [];
    let content = [];

    Object.keys(this.props.selected.ImageInfo).map(key =>  {
      if(this.props.selected.ImageInfo[key].Size === 'thumb') {
        thumbnail = <img className="rs-thumb" alt="Research Starter Thumbnail" src={this.props.selected.ImageInfo[key].Target} />
      }
    })

    Object.keys(this.props.selected.Items).map(key =>  {
      if(this.props.selected.Items[key].Label === 'Title' ) {
        var titlemarkup = cleanTitle(this.props.selected.Items[key].Data);

        header.push(<h4 className="rs-heading" key={key}>{titlemarkup}</h4>);
        header.push(thumbnail);

      }
      // if(this.props.selected.Items[key].Label === 'Source' ) {
      //   var sourcemarkup = cleanHTML(this.props.selected.Items[key].Data);
      //   entry.push(<h5 key={key}>{sourcemarkup}</h5>);
      // }

      if(this.props.selected.Items[key].Label === 'Abstract' ) {
        var abstractmarkup = cleanHTML(this.props.selected.Items[key].Data);
        content.push(<p key={key}>{abstractmarkup}<a href={plink}> Read More</a></p>);
      }
    })

    entry.push(<div class="rs-header">{header}</div>);
    entry.push(<div class="rs-content">{content}</div>);

    var subjects = this.props.selected.RecordInfo.BibRecord.BibEntity.Subjects;
    if(subjects && subjects.length > 0){
      entry.push(<Subjects subjects={this.props.selected.RecordInfo.BibRecord.BibEntity.Subjects} callbackFromParent={this.props.callbackFromParent}/>)
    }

    return entry;
  }

  render() {

    return (
      <div class="rs-entry">
        {this.createEntry()}
      </div>
    );
  }
}

export default ResearchStarter;
