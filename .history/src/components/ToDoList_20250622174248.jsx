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
    <div className='min-h-screen place-self-center flex items-center justify-center absolute inset-0 z-10'>
      <div className='brightness-200' />        
    <div className='bg-white2 backdrop-blur-lg p-20 rounded-lg shadow-lg absolute '>
    <h1 className='text-4xl text-white mb-10'> What is Your Plan for Today? </h1>
    <ToDoListForm onSubmit={addToDo} />
    </div>
    </div>
    
    </>

  )
}

export default ToDoList