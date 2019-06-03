import React, { Component } from 'react';

class AddNew extends Component {

  addNewTitle = (e) => {
    
  }
  addNewText = (e) => {
    
  }
  submitNew = (e) => {
    e.preventDefault();
  }




  render() {
    return (
      <div className='add-new-container'>
        <i className="fas fa-plus-circle"></i>
        <form className='add-new-form' onSubmit={this.submitNew}>
          <input type='text' onChange={this.addNewTitle}/>
          <input type='textarea' onChange={this.addNewText}/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddNew;