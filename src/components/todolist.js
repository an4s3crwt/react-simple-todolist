import React, { Component } from 'react'
import TodoItem from "./item";

export default class todolist extends Component {
  render() {
    const {items} = this.props;
    return  (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>

        {
          items.map(i =>{
            return (
              <TodoItem  key={i.id} title={i.title}/>
            )
          })
        }

      
        <button type='button'
         className="btn btn-danger btn-block text-capitalize mt-5">
            clear list
        </button>
      </ul>
  
    )
  }
}
