import React, { Component } from 'react';
import AddNew from './AddNew';
import Search from './Search';
import './style.scss';

class MainPage extends Component {


  render() {
    return (
      <div className='page'>
        <Search />
        <div>
          <h2>MainPage</h2>
        </div>
        <AddNew />
      </div>
    );
  }
}

export default MainPage;