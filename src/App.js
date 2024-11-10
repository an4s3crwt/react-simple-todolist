
import React, {Component} from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/todolist";

import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from 'uuid';

class App extends Component {
  //gestionar las interacciones con la lista
  state={
    items: [],//almacena las tareas
    id: uuidv4(), //con uuid se le dará un id único
    item: '',//el valor se actualizará en tiempo real con handleChange
    editItem:false //se inicializa en false porque en principio no se está editando 
  }

  /*
  Manejador de eventos que se activa cada vez que ocurre un cambio en el campo
  de entrada de texto, como cuando el usuario escribe en él
  */
  handleChange = (e) =>{//recibe el e vento 
    this.setState({
      item: e.target.value  //target representa el elemetno html donde ocurrió el evento(el input)
      //value contiene el valor actual del texto(lo que el usuario ha escrito)
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    //representa la tarea  actual que el usuario ha escrito
    const newItem = {
      id: this.state.id, //llama al método uuid() que le asigna el id
      item: this.state.item //contiene el texto
    }

    console.log(newItem); //verificar que se crea

    //array nuevo que contiene las tareas anteriores(this.state.items) con el spread operador para separarlas y agregar la nueva(newItem)
    const updatedItems = [...this.state.items,newItem];

    //actualizar el estado del componente
    this.setState({
      items: updatedItems, //se actualiza con los valores del nuevo array
      item: "", //limpia el input
      id: uuidv4(),//se reinicia con un nuevo id para la proóxima tarea
      editItem: false //sigue siendo false porque no se está editando

    })

  }
  render () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">To Do Input</h3>
          
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <TodoList />
        </div>
      </div>
    </div>

   
  
   
  );
  }
}

export default App;
