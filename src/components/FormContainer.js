import React, { Component } from 'react';
import InputContainer from './InputContainer';
import Results from './Results';
import Button from './Button';
import { getAuthToken } from '../helpers';
import '../css/App.css';


class FormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      searchTerm: '',
      isLoading: false
    }
    console.log(this.props);
  }



  handleSubmit = (event) => {
    this.setState({isLoading: true});
    event.preventDefault();
    const data = new FormData(event.target);
    var query =  event.target.topic.value;
    console.log(query);
    var url = "https://widgets.ebscohost.com/prod/encryptedkey/eds/eds.php?k=eyJjdCI6IlhWa3kwbVg1TTk4M3JRQmVFSlhHM0p6R3owOE54WWhPMkZlTmNRY0YyZk09IiwiaXYiOiJjNmM0YmNkZTFhOTU4ZjM2ZWE1ZTYxOTIyYWU5NmU0NiIsInMiOiIxNDFjYWZlODViN2Q1MWY5In0=&p=bWFkYWxlLmFwcHMuYXBpLXNlYXJjaA==&s=0,1,1,0,0,0&q=search?query="+query+"%26relatedcontent%3Drs";

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        var rsResults = data.SearchResult.RelatedContent.RelatedRecords[0].Records;
        this.setState({results:rsResults});
        console.log(rsResults);
        if(rsResults){
          this.setState({isLoading:false});
        }
        else {
          return;
        }
    })


}

  render() {

    return (
      <div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="topic">What topic would you like to search for?</label>
          <input type="text" id="topic" name="topic" required placeholder="Search..." />
          <button>Search!</button>
        </form>
      </div>
      <div>
          {this.state.isLoading &&
            <img src="http://widgets.ebscohost.com/prod/common/images/loader.gif"/>
          }
          {this.state.results.length > 0 &&
            <ul>
            {Object.keys(this.state.results).map(key => <Results key={key} result={this.state.results[key]}/>)}
          </ul>
          }
      </div>
    </div>
    );
  }
}

export default FormContainer;
