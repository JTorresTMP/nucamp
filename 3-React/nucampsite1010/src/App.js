import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import DirectoryCls from './components/DirectoryComponent'
import Directory from './components/functionalApproach/DirectoryComp'
import './App.css';
import { CAMPSITES } from './shared/campsites';
import MainCLS from './components/MainComponent'
import NavbarComponent from './components/functionalApproach/NavbarComp'


class App extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         campsites: CAMPSITES
  //     };
  // }
  render() {
  return (
    <div className="App">
      <MainCLS />
      {/* <Navbar dark color={'primary'}>
        <div className={'container'}>
          <NavbarBrand href={'/'}>Nucamp</NavbarBrand>
        </div>
      </Navbar>
      <DirectoryCls campsites={this.state.campsites}/> */}
    </div>
  );
  }
}


const FuncApp = () => {
  const [campsites, setCampsites] = React.useState({
    campsites: CAMPSITES
  })

  return (
    <div className="App">
      <NavbarComponent />
      <Directory campsites={campsites.campsites}/>
    </div>
  );
}

export default App;
