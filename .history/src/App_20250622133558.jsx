import React from 'react'
import LiveBackground from './components/LiveBackGround'
import ToDoListForm from './components/ToDoListForm'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <LiveBackground/>
      <div className='flex flex-col items-center relative z-10'>
        <div className='absolute '>
        <ToDoListForm/>
        </div>
      </div>
    </div>
  )
}

export default App