
import React, {Component} from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/todolist";

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  //gestionar las interacciones con la lista
  state={
    items: [],//almacena las tareas
    id: 0, //con uuid se le dará un id único
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
  render () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">To Do Input</h3>
          
        <TodoInput item={this.state.item} handleChange={this.handleChange} />
        <TodoList />
        </div>
      </div>
    </div>

   
  
   
  );
  }
}

export default App;
