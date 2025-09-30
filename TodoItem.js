import React from 'react'

// The below code is named export, because we have not written "export default" instead we have just written "export". So while importing this you will write it in flower brackets as, import {TodoItem} in the file in which you are importing this.
// Destructuring I have done here: {todo,onDelete}. That is, I have destructured props and written the things present in props, which I'm using.
export const TodoItem = ({todo,onDelete}) => { 
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button  className = "btn btn-sm btn-danger" onClick = {()=>{onDelete(todo)}}>Delete</button>

    </div>
  )
}

 // onClick = {()=>{onDelete(todo)}} : Here, I'm putting the function inside arrow function
