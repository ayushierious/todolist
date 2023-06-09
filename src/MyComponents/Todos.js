import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin: "40 px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>

        <h3 className='my-3'>Todos List</h3>
        {console.log(props.todos.length)}
        {props.todos.length===0? "No Todos to display": 
     props.todos.map((todo)=>{
      return( 
        <>
      <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
      <hr />
      </>
      )

     })
     }
     
    </div>
  )
}

export default Todos

