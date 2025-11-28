import React from 'react';
import styles from './page.module.css';
import TodoList from '../components/TodoList';

export default function List() {
    return (
        <div className={styles.list}>
            <h1>My Tasks</h1>
            <TodoList />
        </div>
    );
}
