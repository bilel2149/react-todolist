import React, {Component} from 'react';
import './bootstrap.min.css';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  state = {
    items : [
      {id:1, name:"Hamza", age:22},
      {id:2, name:"Mohammed", age:24},
      {id:3, name:"Ali", age:26}
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  render(){
    return (
      <div className="App">
        Todo App
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}  />
        <AddItem />
      </div>
    );
  }
}

export default App;
