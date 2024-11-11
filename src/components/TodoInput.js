import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit , editItem} = this.props;
    return (
      <div className="card my-3 retro-card">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control text-center retro-input"
              placeholder="Add a task"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem ? 
              "btn retro-btn-edit w-100 mt-3" 
              :
              "btn retro-btn-add w-100 mt-3"
            }
          >
            {editItem ? 'edit item' : 'add item'}
          
          </button>
        </form>
      </div>
    );
  }
}
