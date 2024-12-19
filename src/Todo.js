import React, { useState } from 'react'
import styles from "./todo.module.css"
const Todo = ({todoList,todo,setTodoList}) => {
    const [edit,setEdit]=useState(false)
    const [newTodo,setNewTodo]=useState(todo)
    const [currentPage,setCurrentPage]=useState(1)
    const userPerPage=3
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
            <input type='text' value={newTodo} onChange={handleTodoChange} />
            <button onClick={handleSave} className={styles.green}>Save</button>
            <button onClick={handleCancle} className={styles.red}>Cancle</button>
            </div>  
      </>  ):
      (
        <>
         <div  className={styles.taskbox}>
        <h2>{newTodo}</h2>
        <button onClick={handleEdit} className={styles.green}>Edit</button>
        <button onClick={()=>handleDelete(todo)} className={styles.red}>Delete</button>    
        </div> 
        </>
      )
    }
    </>
  )
}

export default Todo
