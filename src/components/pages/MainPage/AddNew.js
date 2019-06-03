import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isOpenedChangeActionType, addToDoActionType } from './actions';


class AddNew extends Component {

  constructor() {
    this.state = {
      title: '',
      text: '',
      id: 0
    }
  }

  addNewTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  addNewText = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  submitNew = (e) => {
    e.preventDefault();
    this.setState({
      id: this.state.id + 1
    })
    const newToDo = {
      id: this.state.id,
      title: this.state.title,
      text: this.state.text
    }
    this.props.addNewToDo(newToDo);
    this.props.isOpenedChange();

  }

  openHandler = () => {
    this.props.isOpenedChange();
  }

  render() {
    const { isOpened } = this.props;
    return (
      <div className={isOpened ? "add-new-container open-new-container" : "add-new-container"}>
        <i className={isOpened ? "fas fa-minus-circle open" : "fas fa-plus-circle close"} onClick={this.openHandler}></i>
        <form className='add-new-form' onSubmit={this.submitNew}>
          <input type='text' onChange={this.addNewTitle} />
          <textarea className="text-container" onChange={this.addNewText}>
          </textarea>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isOpened: state.mainPage.isOpened
  }
}

const mapDispatchToProps = {
  isOpenedChange: isOpenedChangeActionType,
  addNewToDo: addToDoActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);