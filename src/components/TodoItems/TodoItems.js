import React from 'react';
import './TodoItems.css'

const TodoItems = (props) => {

  const {items, deleteItem} = props;
  let length = items.length;
  const ListItems = length ? (
    items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td><span onClick={() => deleteItem(item.id)}>&times;</span></td>
        </tr>
      )
    })
  ) : (
    <tr>
      <td colSpan="3">Aucun element à afficher</td>
    </tr>
  )

    return (
      <div className="todoitems">
        <table className="table"> 
          <tbody>
            <tr>
              <td>Nom</td>
              <td>Age</td>
              <td>Action</td>
            </tr>
            {ListItems}
          </tbody>
        </table>
      </div>
    )
}

export default TodoItems