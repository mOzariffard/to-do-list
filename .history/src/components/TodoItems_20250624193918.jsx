import React from 'react'

const TodoItems = ({text , id , isComplete , deleteTodo , toggle}) => {
  return (
    <div className=' bg-white flex flex-col items-start gap-3 p-3.5 rounded-none '>
        <div onClick={()=>{toggle(id)}}  className=' flex items-center cusror-pointer '>

            <img src={isComplete ? "/images/radio.svg": "/images/not-click.svg" } alt="tick" className='w-7' />
            
            <p className='text-slate-700 ml-4 text-[17px]'>
            {text}
            </p> 

            <img onClick={()=>{deleteTodo(id)}} src="/images/trash.svg" alt="trash" className='w-3.5 cursor-pointer ml-105 fixed'/>
        </div>
        
    </div>
  )
}

export default TodoItems