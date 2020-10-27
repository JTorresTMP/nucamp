import React from 'react';
import './App.css';
import MainCLS from './components/MainComponent'
import Main from './components/functionalApproach/Main'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore();

class App extends React.Component {
  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <h4 className="text-center">
            You are viewing the Class Implementation
          </h4>
          <MainCLS />
        </div>
      </BrowserRouter>
    </Provider>
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