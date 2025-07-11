import React from 'react'
import ToDoListForm from './ToDoListForm'
const ToDoList = () => {
  return (
    <>    
    <div className='min-h-screen flex items-center justify-center absolute inset-0 z-10'>        
    <div className='bg-white bg-opacity-20 backdrop-blur-lg p-50 rounded-lg shadow-lg relative'>
    <h1 className='text-4xl  absolute mb-50'> What is Your Plan for Today? </h1>
    <ToDoListForm />
    </div>
    </div>
    
    </>

  )
}

export default ToDoList