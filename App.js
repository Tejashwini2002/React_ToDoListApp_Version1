// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import TodoItem from "./MyComponents/TodoItem"
import {Footer} from './MyComponents/Footer';

import React, {useState} from 'react'


// function App() {
//   let myVariable = 345;
//   return (
//     // The below code is not HTML. It is JSX (JavaScript Syntax Extension)
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <div>{myVariable}</div>
//         <div>2+5 = {2+5}</div>
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {/* Learn React */}
//           Learn React with harry
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  /*
  const onDelete = (todo)=>{
    console.log("I'm on Delete");
    let index = todos.indexOf(todo);
    todos.splice(index,1);
    // In react you need to make use of use State Hook if you want to delete the task from Todo list.
  }
  */
  const onDelete = (todo)=>{
    // console.log("I'm on Delete");
    /*
    // Deleting this way in react doesn't work. Instead you need to make setTodos() function.

    let index = todos.indexOf(todo);
    todos.splice(index,1);
    
    */

    // In react you need to make use of use State Hook if you want to delete the task from Todo list. 
    // For that we need to import React, {useState} from 'react' and also we need to declare and define tods variable similar to this count variable:const [count, setCount] = useState(0); 

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
   }

   /*
  // An array of todos I'm defining with the help of let keyword
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1."
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done2."
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat to get this job done3."
    }
    
  ]
  */
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1."
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done2."
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat to get this job done3."
    }
    
  ]);
  return (
    <>
      {/* <Header></Header> */}
      {/* <Header/> */}
       {/* <Header title="My Todos List"/> */}
       <Header title="My Todos List" searchBar = {true}/>
       {/* <Header title="My Todos List" searchBar = {true}/> */}
        {/*If you pass any integer instead of string for title in this line, then this error occours at the backend. Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. */}
       {/* <Header title="My Todos List" searchBar = {false}/> */}
       {/* <Header title = "My Todos List" searchBar = {false}/> */}
        {/*The above tag was used to demonstrate default props*/}
      {/* <Todos></Todos> */}
      <Todos todos = {todos} onDelete={onDelete}/> {/* I'm passing JS object todos here, and I'll get it in Todos.js file. And also I'm passing {onDelete} to Todos.js file. Note that App.js is a parent file and Todos.js is a child file. Todos.js will take them under props and uses wherever required.  */}
      <Footer/>
    </>
  );
}

export default App;
// So you can also refer to the React Bootstrap Documentation: https://react-bootstrap.netlify.app/docs/components/navbar 

/*
<li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
<li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>s
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
*/