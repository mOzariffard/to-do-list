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
        <form className='' onSubmit={handelSubmit}>
            <input 
            type="text"
            className=''
            placeholder='Add a To Do'
            name='text'
            value={input}
            onChange={handelChange}
            />
            <button> add to the list</button>
        </form>
    </div>
  )
}

export default ToDoListForm