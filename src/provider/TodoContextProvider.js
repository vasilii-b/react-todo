import React from 'react';

import todoState from '../state/todoState';

import TodoContext from '../context/TodoContext';

const TodoContextProvider = props => {
    const { todos, addTodo, deleteTodo, markAsComplete } = todoState();

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, markAsComplete }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
