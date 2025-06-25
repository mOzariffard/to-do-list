import React from 'react'
import LiveBackground from './components/LiveBackGround'
import ToDoListForm from './components/ToDoListForm'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <LiveBackground/>
      <ToDoListForm/>
    </div>
  )
}

export default App