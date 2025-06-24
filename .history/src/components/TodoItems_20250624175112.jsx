import React from 'react'

const TodoItems = () => {
  return (
    <div className=' bg-white flex flex-col items-start gap-3 p-3.5 rounded-b-lg '>
        <div className=' flex items-center cusror-pointer '>
            <img src="/images/click.svg" alt="tick" className='w-7' />
            <p className='text-slate-700 ml-4 text-[17px]'>Learn Coding</p>
        </div>
        <img src="/images/trash.svg" alt="trash" className='w-3.5 cursor-pointer'/>
        
    </div>
  )
}

export default TodoItems