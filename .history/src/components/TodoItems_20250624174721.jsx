import React from 'react'

const TodoItems = () => {
  return (
    <div className=' bg-white flex flex-col items-start gap-3 p-3.5 rounded-b-lg '>
        <div className=' flex items-center cusror-pointer gap-2'>
            <img src="/images/click.svg" alt="tick" className='w-7' />
            <p className='text-slate-700  text-[17px]'>Learn Coding</p>
        </div>
    </div>
  )
}

export default TodoItems