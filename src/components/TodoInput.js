import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const {item, handleChange, handleSubmit} = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary 
              text-white h-100">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize text-center"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          {/* Cambiado btn-block a w-100 para todo el ancho en Bootstrap 5 */}
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3 text-capitalize"
          >
            add item
          </button>
        </form>
      </div>
    );
  }
}
