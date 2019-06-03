import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItemActionType } from './actions';
import AddNew from './AddNew';
import Search from './Search';
import './style.scss';

class MainPage extends Component {

  deleteToDo = (e) => {
    console.log(e.target.id);
    this.props.deleteItem(e.target.id);
  }

  render() {
    const {toDos} = this.props;
    if (this.props.toDos.length>0) {
    const toDosList = toDos.map(item=><div key={item.id} className='todo-container'><h3>{item.title}</h3><p>{item.text}</p><i className="fas fa-plus" onClick={this.deleteToDo} id={item.id}></i></div>)
    } else if (this.props.searchString&&this.props.toDos.length===0) {
      const toDosList = <h2>Oops... here is nothing with your request</h2>
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
  toDos: state.mainPage.toDos.filter(item=>item.title.toLowerCase().includes(state.mainPage.searchString)),
  searchString: state.mainPage.searchString
})

const mapDispatchToProps = {
  deleteItem: deleteItemActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);