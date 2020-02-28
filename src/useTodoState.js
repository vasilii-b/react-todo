import { useState } from 'react';

export default () => {
    const localStorageData = localStorage.getItem('todos');
    let data = [];
         
    if (localStorageData) {
        data = JSON.parse(localStorageData);
    }

    const [ todos, setTodos ] = useState(data),
        saveTodos = (todos) => {
            localStorage.setItem('todos', JSON.stringify(todos));
            setTodos(todos);
        }

    return {
        todos,
        addTodo: (todoText) => {
            saveTodos([...todos, todoText]);
        },
        deleteTodo: (todoIndex) => {
            const newTodos = todos.filter((_, index) => index !== todoIndex);

            saveTodos(newTodos);
        }
    }
}
