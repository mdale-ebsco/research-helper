import React, { Component } from 'react';
import InputContainer from './InputContainer';
import Prompt from './Prompt';
import Button from './Button';
import { getAuthToken } from '../helpers';
import '../css/App.css';


class FormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      searchTerm: ''
    }
    console.log(this.props);
  }



  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    var query =  event.target.topic.value;
    console.log(query);
    var url = "https://widgets.ebscohost.com/prod/encryptedkey/eds/eds.php?k=eyJjdCI6IlhWa3kwbVg1TTk4M3JRQmVFSlhHM0p6R3owOE54WWhPMkZlTmNRY0YyZk09IiwiaXYiOiJjNmM0YmNkZTFhOTU4ZjM2ZWE1ZTYxOTIyYWU5NmU0NiIsInMiOiIxNDFjYWZlODViN2Q1MWY5In0=&p=bWFkYWxlLmFwcHMuYXBpLXNlYXJjaA==&s=0,1,1,0,0,0&q=search?query="+query+"%26relatedcontent%3Drs";

    fetch(url)
    .then((res) => res.json())
            .then((data) => {
              console.log('SEARCH RESULTS:', data.SearchResult.RelatedContent.RelatedRecords);
            })
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="topic">Topic:</label>
          <input type="text" id="topic" name="topic" required placeholder="What's your topic?" />
          <button>Search!</button>
        </form>
      </div>
    );
  }
}

export default FormContainer;
