import React, { useState } from 'react'
import styles from "./todo.module.css"
const Todo = ({todoList,todo,setTodoList}) => {
    const [edit,setEdit]=useState(false)
    const [newTodo,setNewTodo]=useState(todo)
    const handleTodoChange=(e)=>{
        setEdit(true)
        setNewTodo(e.target.value)
    }
    const handleSave=()=>{
       let updateList=todoList.filter((todoItem)=>todoItem===todo?newTodo:todoItem)
       setTodoList(updateList)
        setEdit(false)
    }
    const handleCancle=()=>{
        setNewTodo(todo)
    }
    const handleEdit=()=>{
        setEdit(true)
    }
    const handleDelete=(val)=>{
       let updateList=todoList.filter((todo)=>todo!==val)
       setTodoList(updateList)
    }
  return (
    <>
    {
        edit?(<>
            <div className={styles.taskbox}>
            <input type='text' value={newTodo} onChange={handleTodoChange}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancle}>Cancle</button>
            </div>  
      </>  ):
      (
        <>
         <div  className={styles.taskbox}>
        <h1>{newTodo}</h1>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={()=>handleDelete(todo)}>Delete</button>    
        </div> 
        </>
      )
    }
    </>
  )
}

export default Todo
