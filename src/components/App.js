import React, { Component } from 'react';
import Header from './Header';
import Results from './Results';
import ResearchStarter from './ResearchStarter';
import EDS from './EDS';
import { cleanTitle } from '../helpers';
import '../css/App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      searchTerm: '',
      isLoading: false,
      noResults: false,
      selectedStarter: '',
      title:'',
      selectedSubject:'',
      edsResults: [],
      edsRecords: [],
      hasRecords: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
  if (this.state.edsResults !== prevState.edsResults) {
     console.log(this.state.edsResults);
  }
}

  selectResult = (key) => {
    this.setState({selectedStarter:this.state.results[key]});
    var title = cleanTitle(this.state.results[key].Items[0].Data);

    this.setState({title:title});
  }

  handleSubjectClick = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({selectedSubject:dataFromChild});

    var query = dataFromChild;
    this.setState({searchTerm:query});
    var url = "https://widgets.ebscohost.com/prod/encryptedkey/eds/eds.php?k=eyJjdCI6IlhWa3kwbVg1TTk4M3JRQmVFSlhHM0p6R3owOE54WWhPMkZlTmNRY0YyZk09IiwiaXYiOiJjNmM0YmNkZTFhOTU4ZjM2ZWE1ZTYxOTIyYWU5NmU0NiIsInMiOiIxNDFjYWZlODViN2Q1MWY5In0=&p=bWFkYWxlLmFwcHMuYXBpLXNlYXJjaA==&s=0,1,1,0,0,0&q=search?query="+query;

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var edsRecords = data.SearchResult.Data.Records;
      var edsResults = data;
      this.setState({edsResults:edsResults});
      console.log(edsResults);
      this.setState({edsRecords:edsRecords});
    })
  }


  handleSubmit = (event) => {
    this.setState({isLoading: true});
    event.preventDefault();

    var query =  event.target.topic.value;
    var url = "https://widgets.ebscohost.com/prod/encryptedkey/eds/eds.php?k=eyJjdCI6IlhWa3kwbVg1TTk4M3JRQmVFSlhHM0p6R3owOE54WWhPMkZlTmNRY0YyZk09IiwiaXYiOiJjNmM0YmNkZTFhOTU4ZjM2ZWE1ZTYxOTIyYWU5NmU0NiIsInMiOiIxNDFjYWZlODViN2Q1MWY5In0=&p=bWFkYWxlLmFwcHMuYXBpLXNlYXJjaA==&s=0,1,1,0,0,0&q=search?query="+encodeURI(query)+"%26relatedcontent%3Drs";

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.SearchResult.RelatedContent);
        if(!data.SearchResult.RelatedContent){
          this.setState({isLoading:false});
          this.setState({noResults:true});
          return;
        }
        else if (data.SearchResult.RelatedContent){
          var rsResults = data.SearchResult.RelatedContent.RelatedRecords[0].Records;
          this.setState({results:rsResults});
          console.log(rsResults);
        }
        if(rsResults){
          this.setState({isLoading:false});
          this.setState({noResults:false});
        }
        else {
          return;
        }
    })


}

  render() {

    return (
      <div className="research-helper">
        <Header heading="Research Helper"/>
        <div className="content">
        <form onSubmit={this.handleSubmit}>
          <label for="topic">What topic would you like to search for?</label>
          <input type="text" id="topic" name="topic" required placeholder="Search..." />
          <button>Search!</button>
        </form>
      <div>
        {
          this.state.noResults &&
          <span><h3>Oops! There are no results for this topic.</h3></span>
        }
          {this.state.isLoading &&
            <img alt="loading spinner" src="http://widgets.ebscohost.com/prod/common/images/loader.gif"/>
          }
          {this.state.results.length > 0 &&
            <span>
            <h3>Select the topic you would like to explore</h3>
            <ul>
              {Object.keys(this.state.results).map(key => <Results key={key} result={this.state.results[key]} loadSelectedStarter={()=>this.selectResult(key)}/>)}
            </ul>
          </span>
          }
          { this.state.selectedStarter &&
            <span>
              <ResearchStarter selected={this.state.selectedStarter}  callbackFromParent={this.handleSubjectClick}/>
            </span>
          }
          {
            this.state.edsRecords.length > 0 &&
            <span>
            <EDS search={this.state.edsResults} term={this.state.searchTerm}/>
            </span>
          }
      </div>
    </div>
  </div>
    );
  }
}

export default App;
