import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit , editItem} = this.props;
    return (
      <div className="card my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Add a task"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem ? 
              "btn btn-secondary w-100 mt-3" 
              :
              "btn btn-primary w-100 mt-3"
            }
          >
            {editItem ? 'edit item' : 'add item'}
          
          </button>
        </form>
      </div>
    );
  }
}
