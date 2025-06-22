import React, { useState } from 'react'

const ToDoListForm = () => {
    const [input, setInput]=useState('');

    const handelChange= e=>{
        setInput(e.target.value);
    };

    const handelSubmit= e=>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text:input
        });

        setInput('');
    };


  return (
    <div className='min-h-screen flex items-center justify-center  absolute inset-0 z-10'>
  <div className='bg-gray-600 text-white p-4  rounded-t-lg shadow-lg'>
    <form className='' onSubmit={handelSubmit}>
      <input
        type="text"
        className='mr-2 p-2 rounded text-black'
        placeholder='Add a To Do'
        name='text'
        value={input}
        onChange={handelChange}
      />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Add to the list
      </button>
    </form>
  </div>
</div>
  )
}

export default ToDoListForm