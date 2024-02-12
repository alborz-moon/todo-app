// TodoItem.js
import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useTodoContext } from '../context/TodoContext';

function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    const { removeTodo, editTodo } = useTodoContext();

    const handleRemove = () => {
        removeTodo(todo.id);
    };

    const handleEdit = () => {
        if (isEditing) {
            editTodo(todo.id, newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span>{todo.text}</span>
            )}
            <div className="icons">
                <button onClick={handleEdit}>
                    {isEditing ? 'Save' : <FaEdit />}
                </button>
                <button onClick={handleRemove}>
                    <FaTrash />
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
