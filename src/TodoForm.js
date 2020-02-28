import React, { useState, useContext } from 'react';
import TodoContext from './context/TodoContext';

import TextField from '@material-ui/core/TextField';

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext),
        [ value, setValue ] = useState('');

    /**
     * Save the todo item when form submitted
     * 
     * @param {Event} event 
     */
    const handleFormSubmit = (event) => {
        event.preventDefault();
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <TextField
                value={value}
                label="Add a new to-do"
                placeholder="E.g.: Make the most of React native"
                margin="normal"
                variant="filled"
                fullWidth
                onChange={(event) => { setValue(event.target.value) }} />
        </form>
    )
}

export default TodoForm;
