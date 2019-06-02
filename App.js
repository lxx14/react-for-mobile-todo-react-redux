import React, { Component } from 'react';
import Header from './src/components/Header';
import MainPage from './src/components/pages/MainPage';

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
