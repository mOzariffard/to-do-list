import React from 'react'
import ToDoListForm from './ToDoListForm'
const ToDoList = () => {
  return (
    <h1 className='text-amber-50'>What is your Plan for Today!</h1>
    <div className='min-h-screen flex items-center justify-center absolute inset-0 z-10'>
        
        <ToDoListForm />
    </div>
  )
}

export default ToDoList