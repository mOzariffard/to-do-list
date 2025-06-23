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
    <div>
  <div className='bg-white-600 text-white p-4  rounded-t-lg shadow-lg'>
    <form className='' onSubmit={handelSubmit}>
      <input
        type="text"
        className='mr-2 p-2 rounded bg-white-70'
        placeholder='Add a To Do'
        name='text'
        value={input}
        onChange={handelChange}
      />
      <button className='bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded p-2'>
        Add to the list
      </button>
    </form>
  </div>
</div>
  )
}

export default ToDoListForm