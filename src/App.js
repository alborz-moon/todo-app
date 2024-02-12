// App.js
import React, { useState } from 'react';
import './sass/App.scss';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './context/TodoContext';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <TodoProvider>
                <header>
                    <h1>Todo List</h1>
                    <button onClick={toggleDarkMode}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </header>
                <div className="container">
                    <TodoForm />
                    <TodoList />
                </div>
            </TodoProvider>
        </div>
    );
}

export default App;
