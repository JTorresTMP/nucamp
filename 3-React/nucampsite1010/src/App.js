import React from 'react';
import './App.css';
import MainCLS from './components/MainComponent'
import Main from './components/functionalApproach/Main'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         campsites: CAMPSITES
  //     };
  // }
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainCLS />
      </div>
    </BrowserRouter>
  );
  }
}


const FuncApp = () => {
  // const [campsites, setCampsites] = React.useState({
  //   campsites: CAMPSITES
  // })

  return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
  );
}

export default FuncApp;