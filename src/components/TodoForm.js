// TodoForm.js
import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

function TodoForm() {
    const [text, setText] = useState('');
    const { addTodo } = useTodoContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;
