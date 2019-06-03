import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const SinglePage = () => {
  return(
    <div className='page'>
    <h2>SinglePage</h2>
    <NavLink to='/'><i className="far fa-arrow-alt-circle-left"></i></NavLink>
    </div>
  )
}

export default SinglePage;