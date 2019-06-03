import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeDataActionType } from './actions';
import './style.scss';

class SinglePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      valueTitle: this.props.singleItem.title,
      valueText: this.props.singleItem.text
    }
  }

  changeTitle = (e) => {
    this.setState({
      valueTitle: e.target.value
    })
  }
  changeText = (e) => {
    this.setState({
      valueText: e.target.value
    })
  }

  confirmChanges = (e) => {
    e.preventDefault();
    const newToDo = {
      id: this.props.singleItem.id,
      title: this.state.valueTitle,
      text: this.state.valueText
    };
    this.props.changeData(newToDo);
  }

  render() {
    return (
      <div className='page' onSubmit={this.confirmChanges}>
        <h2>SinglePage</h2>
        <form className='change-form'>
          <input type='text' value={this.state.valueTitle} onChange={this.changeTitle} />
          <textarea value={this.state.valueText} onChange={this.changeText}></textarea>
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

const mapDispatchToProps = {
  changeData: changeDataActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);