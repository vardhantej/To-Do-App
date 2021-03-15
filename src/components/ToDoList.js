import React, { Component } from 'react';


//Importing Components
import ToDo from "./ToDo";


const ToDoList = ({ToDoListItems, setToDoListItems, filteredToDos}) => {
    return (  
        <div className="todo-container">
            <ul className="todo-list">
                {filteredToDos.map((ToDoItem)=><ToDo key={ToDoItem.id} text={ToDoItem.text} id={ToDoItem.id} setToDoListItems={setToDoListItems} ToDoListItems={ToDoListItems} ToDoItem={ToDoItem}/>)}
            </ul>
        </div>
    );
}
 
export default ToDoList;