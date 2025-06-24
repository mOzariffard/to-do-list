import React, { useState } from 'react';
import WaveInput from './WaveInput';

const ToDoListForm = (props) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim()) {
            console.log('Todo added:', input);
            props.onSubmit({
                id: Date.now(),
                text: input,
                isComplete: false,
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
                  label="Adda To Do"
                  value={input}
                  onChange={handleChange}
                  required
                    />
                    
                    <button
                        className="bg-gray-500 hover:bg-gray-700 focus:outline-1 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-800 rounded p-3  ml-25 h-fit "
                    >
                    Add to the list
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ToDoListForm;