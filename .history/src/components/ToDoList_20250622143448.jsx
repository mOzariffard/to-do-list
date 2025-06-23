import React from 'react'
import ToDoListForm from './ToDoListForm'
const ToDoList = () => {
  return (
    <>    
    <div className='min-h-screen flex items-center justify-center absolute inset-0 z-10'>        
    <p className='absolute mb-50'> What is Your Plan for Today? </p>
    <ToDoListForm />
    </div>
    </>

  )
}

export default ToDoList