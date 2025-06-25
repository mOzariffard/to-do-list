import React, { useState } from 'react';
import WaveInput from './WaveInput';

const ToDoListForm = () => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim()) {
            console.log('Todo added:', input);
            props.onSubmit({
                id: Math.floor(Math.random() * 1000),
                text: input,
            });
            setInput('');
        }
    };

    return (
        <div>
            <div className="bg-white text-white p-4 rounded-t-lg shadow-lg">
                <form className="flex items-end" onSubmit={handleSubmit}>
                <WaveInput
                  type="text"
                  label="Add a To Do"
                  value={input}
                  onChange={handleChange}
                  required
                    />
                    <button
                        className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded p-2 ml-2 h-fit"
                    >
                        Add to the list
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ToDoListForm;