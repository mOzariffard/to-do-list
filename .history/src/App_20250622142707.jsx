import React from 'react'
import LiveBackground from './components/LiveBackGround'
import ToDoList from './components/ToDoList'
// import ToDoListForm from './components/ToDoListForm'

const App = () => {
  return (
    <div>
      <LiveBackground/>
      <ToDoList/>
      {/* <ToDoListForm/> */}
    </div>
  )
}

export default App