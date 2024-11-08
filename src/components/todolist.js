import React, { Component } from 'react'
import TodoItem from "./item";

export default class todolist extends Component {
  render() {
    return  (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        <TodoItem />
        <button type='button'
         className="btn btn-danger btn-block text-capitalize mt-5">
            clear list
        </button>
      </ul>
  
    )
  }
}
