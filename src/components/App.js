import React, { Component } from 'react';
import Header from './Header';
import FormContainer from './FormContainer';

import '../css/App.css';

const machine = {
  start: {
    GETSTARTED: 'input_topic'
  },
  input_topic: {
    BACKGROUND: 'researchstarter',
    RESEARCH: 'eds',
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
      case 'input_topic':
          alert("Hello from the command!");
        break;
      case 'researchstarter':
        if (action.items) {
          // update the state with the found items
          return { items: action.items };
        }
        break;
      case 'eds':
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
    this.transition({ type: 'GETSTARTED'});
  }

  renderStartPage(state){
    return(
        <button
            onClick={e => this.handleSubmit(e)}
            >
            Get Started
          </button>
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
