"use client";

import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('todos');
        if (saved) {
            setTodos(JSON.parse(saved));
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos, isLoaded]);

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newTodo: Todo = {
            id: Date.now(),
            text: inputValue.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleAddTodo} className={styles.inputGroup}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new task..."
                    className={styles.input}
                />
                <button type="submit" className={styles.addButton}>
                    Add
                </button>
            </form>

            {todos.length === 0 ? (
                <p className={styles.emptyState}>No tasks yet.</p>
            ) : (
                <ul className={styles.list}>
                    {todos.map((todo) => (
                        <li key={todo.id} className={styles.item}>
                            <div
                                className={styles.itemContent}
                                onClick={() => toggleTodo(todo.id)}
                            >
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    readOnly
                                    className={styles.checkbox}
                                />
                                <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
                                    {todo.text}
                                </span>
                            </div>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className={styles.deleteButton}
                                aria-label="Delete task"
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
