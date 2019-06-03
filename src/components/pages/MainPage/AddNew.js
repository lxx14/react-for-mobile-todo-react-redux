import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddNew extends Component {

  constructor() {
    this.state = {
      title: '',
      text: ''
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
    console.log('title', this.state.title);
    console.log('text', this.state.text);
  }

  render() {
    const { isOpened } = this.props;
    console.log(isOpened);
    return (
      <div className={isOpened ? "add-new-container open-new-container" : "add-new-container"}>
        <i className={isOpened ? "fas fa-minus-circle open" : "fas fa-plus-circle"}></i>
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

export default connect(mapStateToProps)(AddNew);