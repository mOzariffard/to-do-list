import React, { useState } from 'react'
import WaveInput from './WaveInput'
const ToDoListForm = (props) => {
    const [input, setInput]=useState('');

    const handelChange= e=>{
        setInput(e.target.value);
    };

    const handelSubmit= e=>{
        e.preventDefault();
        if (input.trim()) {
          console.log('Todo added:', input);
        }
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text:input
        });

        setInput('');
    };


  return (
    <div>
  <div className='bg-white text-white p-4  rounded-t-lg shadow-lg'>
    <form className='' onSubmit={handelSubmit}>
    <WaveInput
            type="text"
            label="Add a To Do"
            name='text'
            value={input}
            onChange={handelChange}
            required
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