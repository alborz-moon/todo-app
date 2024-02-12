// TodoContext.js
import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, { text, id: Date.now() }]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodoContext() {
    return useContext(TodoContext);
}
