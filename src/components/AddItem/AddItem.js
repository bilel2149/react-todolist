import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
  state = {
      name : '',
      age  : ''
  }

  handleChange = (e) => {
      this.setState({
        [e.target.id] : e.target.value
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state)
      this.setState({
          name : '',
          age : ''
      })
  }
  
  render() {
    return (
      <div className="additem">
          <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Entrer votre nom" id="name" onChange={this.handleChange} value={this.state.name} />
              <input type="number" placeholder="Entrer votre age" id="age" onChange={this.handleChange} value={this.state.age}/>
              <input type="submit" value="Ajouter" />
          </form>
      </div>
    )
  }
}

export default AddItem