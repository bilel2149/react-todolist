import React, { Component } from 'react';
import './TodoItems.css'

const TodoItems = (props) => {

  const {items} = props;
  const ListItems = items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>&times;</td>
      </tr>
    )
  })

    return (
      <div className="todoitems">
        <table className="table"> 
          <thead>
            <th>Nom</th>
            <th>Age</th>
            <th>Action</th>
          </thead>
          <tbody>
            {ListItems}
          </tbody>
        </table>
      </div>
    )
}

export default TodoItems