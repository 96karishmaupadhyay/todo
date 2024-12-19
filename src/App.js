import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './Todo';

function App() {
  const [todo,setTodo]=useState("")
  const [TodoList,setTodoList]=useState([])
  const handleTodo=(e)=>{
    console.log(todo)
    setTodo(e.target.value)
  }
  const handlesubmit=()=>{
    console.log(TodoList)
    setTodoList([...TodoList,todo])
     setTodo("")
  }
  return (
    <div className="app">
     
      <div className='todobox'>
        <h1>Todo</h1>
        <div className='todoitem'>
        <input type='text' value={todo} onChange={handleTodo} placeholder='Add your task here'/>
        <button onClick={handlesubmit} className="submitbtn">Submit</button>
        </div>
      <div className='container'>
      {
        TodoList.map((item,index)=>{
          return(
            <Todo todo={item} todoList={TodoList} setTodoList={setTodoList} key={index} />
          )
        })
      }
      </div>
       </div>
      </div>
  );
}

export default App;
