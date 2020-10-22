import React from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap'
// import DirectoryCls from './components/DirectoryComponent'
// import Directory from './components/functionalApproach/Directory'
import './App.css';
// import { CAMPSITES } from './shared/campsites';
import MainCLS from './components/MainComponent'
// import NavbarComponent from './components/functionalApproach/NavbarComp'
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

export default App;