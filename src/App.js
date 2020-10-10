import logo from './logo.svg';
import React, { useState } from 'react';
import CreateTask from './Components/CreateTask'
import TodoIndex from './Components/Index'
import './App.css';
function App() {

  const [todos, setTodos] = useState([
    { description: 'Tarea 1', status: 'pending' }, 
    { description: 'Tarea 2', status: 'pending' }, 
    { description: 'Tarea 3', status: 'pending' }
  ])

  const addTodo = (description) => {
    let cTodos = Object.assign([], todos);
    cTodos.push({ description: description, status: 'pending' });
    console.log(cTodos)
    setTodos(cTodos);
  }

  const markDone = (index) => {
    let cTodos = Object.assign([], todos)
    cTodos[index].status = 'done'
    setTodos(cTodos)
  }

  const deleteTodo = (index) => {
    let cTodos = Object.assign([], todos)
    cTodos.splice(index, 1)
    setTodos(cTodos)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <CreateTask addTodo={addTodo}/>
      <TodoIndex todos={todos} markDone={markDone} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
