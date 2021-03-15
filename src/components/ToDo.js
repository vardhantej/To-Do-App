import React, { Component } from 'react';

const ToDo = ({ToDoItem,text, id, ToDoListItems, setToDoListItems}) => {

    //Events

    const deleteHandler=()=>{
       setToDoListItems( ToDoListItems.filter((item)=>item.id!==ToDoItem.id));
    }

    const completeHandler=()=>{
        setToDoListItems(ToDoListItems.map((element)=>{ 
        if(element.id===ToDoItem.id)
            return {
                ...element, completed: !element.completed //Doing this will overwrite the 'completed' property. 
            }
        return element;
        }
        ));
    }
   
     function completedClasses(){
        let classes="todo-item ";
        if(ToDoItem.completed===true){
            classes+="completed";
            return classes;
        }
        return classes;
    }

    return (  
        <div className="todo">
            <li className={completedClasses()}>{text}</li>
            <button onClick={completeHandler}  className="complete-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
        </div>
    );
}
 
export default ToDo;