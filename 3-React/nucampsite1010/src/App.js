import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import DirectoryCls from './components/DirectoryComponent'
import Directory from './components/functionalApproach/DirectoryComp'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color={'primary'}>
        <div className={'container'}>
          <NavbarBrand href={'/'}>Nucamp</NavbarBrand>
        </div>
      </Navbar>
      <DirectoryCls />
      <Directory />
    </div>
  );
}

//Nucamp
// class AppCls extends React.Component {
//   render() {
//     return (
//       <div className="App">
//       <Navbar dark color={'primary'}>
//         <div className={'container'}>
//           <NavbarBrand href={'/'}>Nucamp</NavbarBrand>
//         </div>
//       </Navbar>
//     </div>
//     )
//   }
// }

export default App;
