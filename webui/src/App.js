import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './confStore';
import Main from './components/main/Main';


const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
