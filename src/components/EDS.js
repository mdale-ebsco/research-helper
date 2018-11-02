import React, { Component } from 'react';
import DatabaseCallout from './DatabaseCallout';
import { cleanTitle, cleanHTML } from '../helpers';
import '../css/App.css';

class EDS extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  createEntry = () => {
    console.log("Got Here");
    let entry = [];
    let filter = '';

    Object.keys(this.props.search.SearchResult.Statistics.Databases).map(key1 =>  {
      if(this.props.search.SearchResult.Statistics.Databases[key1].Id === 'e000xna') {
        Object.keys(this.props.search.SearchResult.AvailableFacets).map(key2 => {
          if(this.props.search.SearchResult.AvailableFacets[key2].Id === 'ContentProvider'){
            Object.keys(this.props.search.SearchResult.AvailableFacets[key2].AvailableFacetValues).map(key3 => {
              if(this.props.search.SearchResult.AvailableFacets[key2].AvailableFacetValues[key3].Value === 'eBook Academic Collection (EBSCOhost)') {
                filter = this.props.search.SearchResult.AvailableFacets[key2].AvailableFacetValues[key3].AddAction
                console.log(filter);
              }
            })
          }
        })
      }
    })
      return <DatabaseCallout addFacet={filter} search={this.props.search}/>;
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
