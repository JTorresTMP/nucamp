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
        <h1>You are viewing the Class Implementation</h1>
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
          <h1>You are viewing the Functional Implementation</h1>
          <Main />
        </div>
      </BrowserRouter>
  );
}

export default App;