import React from 'react'
// import {TodoItem} from "../MyComponents/TodoItem"
import {TodoItem} from "./TodoItem" // Means in the same folder TodoItem is there, so I did ./TodoItem


export const Todos = (props) => {
  return (
    <div className='container'>
      {/* Todos! */}
      <h3 className='text-center my = 6' >Todos List</h3> {/* text-center will bring the text to the center of the web page. And my = 6 margin on y-axis is set to 6*/}
      {/*
      <TodoItem todo = {props.todos[0]}/>
      <TodoItem todo = {props.todos[1]}/>
      <TodoItem todo = {props.todos[2]}/>
     */}
     {/* You can render the above Todo Items using a for-loop  */}
     {/*
     {props.todos.map((todo)=>{
      return <TodoItem todo = {todo} onDelete = {props.onDelete}/>
     })}
     */}

    {/* If I want to display a message when all the tasks in the todo list are deleted or it is empty since beginning, then I can make use of this ternary operator.  */}
    {props.todos.length === 0?"No Todos to display ": 
    props.todos.map((todo)=>{
      return <TodoItem todo = {todo} key = {todo.sno}onDelete = {props.onDelete}/>
     })
    }


     
     {/*If you just write as above, you'll get this error message in Console (Right click in website -> Inspect->Console): Each child in a list should have a unique "key" prop. Check the render method of `div`. It was passed a child from Todos. See https://react.dev/link/warning-keys for more information........... So, this means: Jab bhi hum map method ko use karke UI ke andar koi bhi cheez character render karaate hai, jaise ki hum upar kar rahe hai props.todos ki help se, mujhe ek unique key bhej na padega. for eg. key = {todo.sno} where sno is unique key of todo.*/}
     {/*
     {props.todos.map((todo)=>{
      return <TodoItem todo = {todo} key = {todo.sno}onDelete = {props.onDelete}/>
     })}
     */}

     {/* map function returns an array.  */}
    </div>
  )
}

// export default Todos
