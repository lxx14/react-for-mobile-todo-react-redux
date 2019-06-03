import React, { Component } from 'react';

class AddNew extends Component {

  constructor() {
    this.state = {
      title: '',
      text: ''
    }
  }

  addNewTitle = (e) => {
    this.setState ({
      title: e.target.value
    })
  }
  addNewText = (e) => {
    this.setState ({
      text: e.target.value
    })
  }
  submitNew = (e) => {
    e.preventDefault();
    console.log('title', this.state.title);
    console.log('text', this.state.text);
  }

  render() {
    return (
      <div className='add-new-container'>
        <i className="fas fa-plus-circle"></i>
        <form className='add-new-form' onSubmit={this.submitNew}>
          <input type='text' onChange={this.addNewTitle}/>
          <textarea className="text-container" onChange={this.addNewText}>
          </textarea>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddNew;