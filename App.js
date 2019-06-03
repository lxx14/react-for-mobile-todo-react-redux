import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './src/components/Header';
import MainPage from './src/components/pages/MainPage';
import Router from './src/components/Router';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Router />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
