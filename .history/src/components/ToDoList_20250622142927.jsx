import React from 'react'
import ToDoListForm from './ToDoListForm'
const ToDoList = () => {
  return (
    <>    
    <div className='min-h-screen flex items-center justify-center absolute inset-0 z-10'>        
    <h1 className='text-white-80'> What is Your Plan for Today! </h1>
    <ToDoListForm />
    </div>
    </>

  )
}

export default ToDoList