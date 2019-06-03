import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddNew from './AddNew';
import Search from './Search';
import './style.scss';

class MainPage extends Component {


  render() {
    const {toDos} = this.props;
    if (this.props.toDos.length>0) {
    const toDosList = toDos.map(item=><div key={item.id} className='todo-container'><h3>{item.title}</h3><p>{item.text}</p></div>)
    } else {
      const toDosList = <h2>Empty, let's change it! :)</h2>
    }
    return (
      <div className='page'>
        <Search />
        <div>
          {toDosList}
        </div>
        <AddNew />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  toDos: state.mainPage.toDos.filter(item=>item.title.includes(state.mainPage.searchString))
})

export default connect(mapStateToProps)(MainPage);