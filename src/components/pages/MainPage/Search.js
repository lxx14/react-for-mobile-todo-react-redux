import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchToDoActionType } from './actions';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }

  handlerChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  search = () => {
    this.props.searchString(this.state.searchValue);
  }

  render() {
    return (
      <div className='search-container'>
        <input type='text' placeholder='search by title' onChange={this.handlerChange} />
        <button type="button" onClick={this.search}><i className="fas fa-search"></i></button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  searchString: searchToDoActionType
}

export default connect(null, mapDispatchToProps)(Search);