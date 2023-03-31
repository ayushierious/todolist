import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, {useState} from 'react';

function App() {
  const onDelete=(todo)=>{
console.log("I am on delete" , todo);
  
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
}
  const [todos, setTodos] = useState([
    {
    sno:1,
    title: "Go to market",
    desc: "you need to buy things"
  },
  {
    sno:2,
    title: "Go to bank",
    desc: "you need to deposit money"
  },
  {
    sno:3,
    title: "Go to park",
    desc: "you need to walk"
  }
    

  ])
  return (
    <>
  <Header title="MyTodosList" searchBar={false}/>
  
  <Todos todos={todos} onDelete={onDelete}/> 

  <Footer/>
 
    </>
  );
}

export default App;
