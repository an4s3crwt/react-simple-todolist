import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="list-group">
        {items.map(item => (
          <TodoItem key={item.id} title={item.title} />
        ))}
        <button type="button" className="btn btn-secondary w-100 mt-3">
          Clear List
        </button>
      </ul>
    );
  }
}
