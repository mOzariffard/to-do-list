import React, { useState } from 'react'

const ToDoListForm = () => {
    const [input, setInput]=useState('');

    const handelChange= e=>{
        setInput(e.target.value);
    };

    const handelSubmit= e=>{
        e.preventDefult();

        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text:input
        });
    };


  return (
    <div>
        <form>
            <input 
            type="text"
            placeholder='Add a To Do'
            name='text'
            className='' 
            />
        </form>
    </div>
  )
}

export default ToDoListForm