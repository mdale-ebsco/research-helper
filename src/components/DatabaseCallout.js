import React, { Component } from 'react';
import { cleanTitle } from '../helpers';
import '../css/App.css';

class DatabaseCallout extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  searchDatabase = () => {
    var url = "https://widgets.ebscohost.com/prod/encryptedkey/eds/eds.php?k=eyJjdCI6IlhWa3kwbVg1TTk4M3JRQmVFSlhHM0p6R3owOE54WWhPMkZlTmNRY0YyZk09IiwiaXYiOiJjNmM0YmNkZTFhOTU4ZjM2ZWE1ZTYxOTIyYWU5NmU0NiIsInMiOiIxNDFjYWZlODViN2Q1MWY5In0=&p=bWFkYWxlLmFwcHMuYXBpLXNlYXJjaA==&s=0,1,1,0,0,0&q=search?"+this.props.search.SearchRequestGet.QueryString+"&action="+this.props.addFacet;

    console.log("URL:", url);

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

    })
  }


  render() {

    return (
    <div class="ebookCarousel">
      <h3>eBooks</h3>
        {this.searchDatabase()}
    </div>
    );
  }
}

export default DatabaseCallout;
