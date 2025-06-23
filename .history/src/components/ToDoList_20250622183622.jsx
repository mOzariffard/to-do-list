import React, { useState } from 'react'
import ToDoListForm from './ToDoListForm'




const ToDoList = () => {
  const [todos, setTodos]=useState([]);

  const addToDo = todo => {
    if(!todo.text|| /^\s*$/.test(todo.text)){
      return;
    }

    const newTodos=[todo, ...todos];
    setTodos(newTodos);
    
  };
  return (
    <>    
    <div className='min-h-[550px] w-11/12 rounded-xl p-7 place-self-center flex items-center justify-center absolute inset-0 z-10'>
      <div className='brightness-200' />        
    <div className='bg-white-20 backdrop-blur-lg p-20 rounded-lg shadow-lg absolute '>
      {/* ---------------------TITLE------------------------------ */}
      <div className='flex items-center mt-7 mb-20 gap-2  '>
      <img className='w-9' src="public/images/todo_icon.png" alt="to-do-icon" />
    <h1 className='text-2xl text-white gap-2 font-semibold '> What is Your Plan for Today? </h1>
      </div>
    <ToDoListForm onSubmit={addToDo} />
    </div>
    </div>
    
    </>

  )
}

export default ToDoList