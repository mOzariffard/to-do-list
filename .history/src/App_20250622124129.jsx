import React from 'react'
import LiveBackground from './components/LiveBackGround'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <LiveBackground/>

      <div className='flex flex-col items-center relative z-10'>
        <h1 className='text-white'>
          Just for test the message
        </h1>
      </div>
    </div>
  )
}

export default App