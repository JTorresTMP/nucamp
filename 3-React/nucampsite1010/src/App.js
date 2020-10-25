import React from 'react';
import './App.css';
import MainCLS from './components/MainComponent'
import Main from './components/functionalApproach/Main'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <h4 className="text-center">
          You are viewing the Class Implementation
        </h4>
        <MainCLS />
      </div>
    </BrowserRouter>
  );
  }
}


const FuncApp = () => {
  return (
      <BrowserRouter>
        <div className="App">
          <h4 className="text-center">
            You are viewing the Functional Implementation
          </h4>
          <Main />
        </div>
      </BrowserRouter>
  );
}

export default App;