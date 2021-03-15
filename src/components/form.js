import React, { Component } from 'react';


 const Form = ({inputText,propSetInputText, ToDoListItems, setToDoListItems, setStatus}) => {

    const inputTextHandler= (e) => {
        //console.log(e.target.value);
        propSetInputText(e.target.value);
    }

    const submitToDoHandler=(e)=>{
        e.preventDefault();
        setToDoListItems(
            [...ToDoListItems, {text: inputText, completed: false, id: Math.random()*1000}]
        );
        propSetInputText("");
    }

    const statusHandler=(e)=>{
        setStatus(e.target.value);
    }

     return (  
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitToDoHandler} className="todo-button" type="submit">
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo"> 
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
      </form>
     );
 }
  
 export default Form ;

 //<select> is used to create a drop down list
 //<option> is the option inside the select-list

 
 