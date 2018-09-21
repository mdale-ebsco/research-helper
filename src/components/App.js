import React, { Component } from 'react';
import Header from './Header';
import FormContainer from './FormContainer';

import '../css/App.css';

const machine = {
  start: {
    BACKGROUND: 'researchstarter',
    RESEARCH: 'eds'
  },
  researchstarter: {
    SUBMITQUERY: 'rsResults',
  },
  eds: {
    ANSWERQUESTION: 'edsResults',
    SUBMITQUERY: 'edsResults'
  }
};

const initialState = 'start';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentState: 'start',
          query: '',
          items: []
        };
    }

    command(nextState, action) {
    switch (nextState) {
      case 'researchstarter':
        alert("Research Starter");
        break;
      case 'eds':
        alert("EDS");
        break;
      case 'null':
        if (action.item) {
          // update the state with the selected photo item
          return { items: action.item };
        }
        break;
      default:
        break;
    }
  }

  transition(action) {
   const currentHelperState = this.state.currentState;
   const nextHelperState =
     machine[currentHelperState][action.type];

   if (nextHelperState) {
     const nextState = this.command(nextHelperState, action);

     this.setState({
       currentState: nextHelperState,
       ...nextState
     });
   }
 }

 handleSubmit(e) {
    e.persist();
    e.preventDefault();
    this.setState({currentState: e.target.helperState});  
    this.transition({ type: e.target.name});
  }

  renderStartPage(state){
    return(
      <div>
        <p>Are you looking for background information on a subject? Or do you have something specific you would like to research?</p>
        <p><span className="example">An example of a specific research topic might be 'College Student Use of Snapchat'.</span><span className="example">An example of a topic you might find background information about might be 'Flower Arranging'.</span></p>
        <button
            name="BACKGROUND"
            helperState="researchstarter"
            onClick={e => this.handleSubmit(e)}
            >
            Background Information
          </button>
          <button
            name="RESEARCH"
            helperState="eds"
            onClick={e => this.handleSubmit(e)}
            >
            Specific Research
          </button>
        </div>
    )
  }

  render() {
    const helperState = this.state.currentState;
    return (
      <div className="research-helper">
        <Header heading="Research Helper"/>
        <div className="content">
          <FormContainer/>
           {this.renderStartPage(helperState)}
        </div>
      </div>
    );
  }
}

export default App;
