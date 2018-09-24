import React, { Component } from 'react';
import Header from './Header';
import FormContainer from './FormContainer';

import '../css/App.css';

const machine = {
  start: {
    RS_BTN: 'rsStart',
    EDS_BTN: 'edsStart'
  },
  rsStart: {
    TOPIC_INPUT: 'rsSuccess',
  },
  rsSuccess: {
    EDS_BTN: 'edsStart',
    SOURCES: 'biblio',
    RELATED: 'rsSuccess'
  },
  edsStart: {
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
      case 'rsStart':
        alert("Research Starter");
        break;
      case 'edsStart':
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


  renderStartPage(state){
    return(
      <div>
        <p>Are you looking for background information on a subject? Or do you have something specific you would like to research?</p>
        <p><span className="example">An example of a specific research topic might be 'College Student Use of Snapchat'.</span><span className="example">An example of a topic you might find background information about might be 'Flower Arranging'.</span></p>
        <button
            onClick={() => this.transition({type: 'RS_BTN'})}
            >
            Background Information
          </button>
          <button
            onClick={() => this.transition({type: 'EDS_BTN'})}
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
           {this.renderStartPage(helperState)}
        </div>
      </div>
    );
  }
}

export default App;
