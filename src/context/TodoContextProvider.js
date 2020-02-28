import React from 'react';
import useTodoState from '../useTodoState';
import TodoContext from './TodoContext';

const TodoContextProvider = props => {
    const { todos, addTodo, deleteTodo, markAsComplete } = useTodoState();

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, markAsComplete }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
