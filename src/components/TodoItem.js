import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { title , handleDelete} = this.props;
    return (
      <li className="list-group-item">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2">
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
