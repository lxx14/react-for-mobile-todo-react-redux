import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Header = (props) => {
  return(
    <div className='header'>
    <h2><i className="fas fa-book"></i>notepad</h2>
    <p>Active deals: <span>{props.deals.length}</span></p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  deals: state.mainPage.toDos
})

export default connect(mapStateToProps)(Header);