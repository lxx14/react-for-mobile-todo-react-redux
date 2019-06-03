import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

class SinglePage extends Component {

  render() {
    const { id, title, text } = this.props.singleItem;
    console.log(id, title, text);
    return (
      <div className='page'>
        <h2>SinglePage</h2>
        <form className='change-form'>
          <input type='text' value={title}/>
          <textarea value={text}></textarea>
          <button>Apply</button>
        </form>
        <NavLink to='/'><i className="far fa-arrow-alt-circle-left"></i></NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    singleItem: state.mainPage.toDos.find(item => item.id === parseInt(id))
  }
}

export default connect(mapStateToProps)(SinglePage);