import React, { useEffect, useState } from 'react'
import ToDoListForm from './ToDoListForm'
import TodoItems from './TodoItems';

const ToDoList = () => {
  const [todos, setTodos]=useState([]);

  const addToDo = (todo) => {
    if(!todo.text|| /^\s*$/.test(todo.text)){
      return;
    }

    const newTodos=[todo, ...todos];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todos,
            isComplete: !todo.isComplete,
          };
        }
        return todo; // Ensure this is outside the `if` block but inside the `map` callback
      });
    });
  };

  useEffect(()=>{
    console.log(todos);
  },[todos])



  return (
    <>    
      <div className='brightness-200' />        
    <div className='min-h-[550px] w-11/12 rounded-xl p-7 place-self-center flex items-center justify-center absolute inset-0 z-10'>
        <div className='min-h-[800px] bg-white-20 backdrop-blur-lg p-20 rounded-lg shadow-lg absolute '>
        {/* ---------------------TITLE--------------------- */}
          <div className='flex items-center  mb-20 gap-2  '>
             <img className='w-12' src="/images/to-do-icon.png" alt="to-do-icon" />
              <h1 className='text-3xl text-white gap-2 font-semibold '> What is Your Plan for Today? </h1>
          </div>
        {/* ---------------------list-form---------------------*/}
            <ToDoListForm onSubmit={addToDo} />
      
      {/* ---------------------todo items--------------------- */}
      <div className='flex flex-col'>
        {todos.map((item , index)=>{
          return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
        })}

      </div>

      </div>
      
    </div>
    
    </>

  );
};
export default ToDoList