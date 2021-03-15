import React, { Component, useState,useEffect } from 'react';
import './App.css';

//Importing components:

import Form from "./components/form";
import ToDoList from "./components/ToDoList";

function App() {
  //States
  const [inputText, setInputText]= useState("");
  const [ToDoListItems, setToDoListItems]=useState([]);
  const [status, setStatus]=useState("All");
  const [filteredToDos, setFilteredToDos]=useState([]);

  //useEffect hook

  useEffect(()=>{
    filterHandler();
  },[ToDoListItems,status]); //useEffect() takes two arguments, a function and an array. The first argument, i.e the 
                      //the function runs if the value of items in the array(second argument) changes

  //Functions
  const filterHandler=()=>{
    switch(status){
      case 'Completed': setFilteredToDos(ToDoListItems.filter((item)=>item.completed===true));
      break;
      case 'Incomplete': setFilteredToDos(ToDoListItems.filter((item)=>item.completed===false));
      break;
      default: setFilteredToDos(ToDoListItems);
    }
  }

  /*For Saving to Local
  const saveLocalTodos=()=>{
    localStorage.setItem("ToDoListItems",JSON.stringify(ToDoListItems));
  };
  const getLocalTodos=()=>{
    if(localStorage.getItem("ToDoListItems")===null){
      localStorage.setItem("ToDoListItems",JSON.stringify([]));
    }else{
      let todoLocal=JSON.parse(localStorage.getItem("ToDoListItems"));
      setToDoListItems(todoLocal);
    }
  }*/


  return (
    <div className="App">
      <header>
        <h1 className="heading">To Do</h1>
      </header>

      <Form ToDoListItems={ToDoListItems} setToDoListItems={setToDoListItems} propSetInputText={setInputText} inputText={inputText} setStatus={setStatus} />
      <ToDoList setToDoListItems={setToDoListItems} ToDoListItems={ToDoListItems} filteredToDos={filteredToDos}/>

    </div>
  );
}

export default App;
