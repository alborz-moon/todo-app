// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import { useTodoContext } from '../context/TodoContext';

function TodoList() {
    const { todos } = useTodoContext();

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
