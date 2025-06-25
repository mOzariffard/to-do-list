import React from 'react'
import ToDoListForm from './ToDoListForm'
const ToDoList = () => {
  return (
    <>    
    <div className='min-h-screen flex items-center justify-center absolute inset-0 z-10'>        
    <div className='bg-white inset-shadow-sm inset-shadow-indigo-500/50 backdrop-blur-lg p-20 rounded-lg shadow-lg absolute '>
    <h1 className='text-4xl mb-10'> What is Your Plan for Today? </h1>
    <ToDoListForm />
    </div>
    </div>
    
    </>

  )
}

export default ToDoList