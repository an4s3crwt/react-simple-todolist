import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete , handleEdit} = this.props;
    return (
      <ul className="list-group">
        {items.map(item => (
          <TodoItem 
          key={item.id} 
          title={item.title}
          handleDelete={()=> handleDelete(item.id)}
          handleEdit={() => handleEdit(item.id)}
           />
        ))}
        <button type="button" className="btn btn-secondary w-100 mt-3"
        onClick={clearList}>
          Clear List
        </button>
      </ul>
    );
  }
}
