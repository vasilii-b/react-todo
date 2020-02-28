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
            
            let value = todoText.trim();

            if (!value) {
                return;
            }

            const todo = {
                title: todoText,
                isCompleted: false,
            }
            saveTodos([...todos, todo]);
        },
        deleteTodo: (todoIndex) => {
            const newTodos = todos.filter((_, index) => index !== todoIndex);

            saveTodos(newTodos);
        },
        markAsComplete: (todoIndex) => {
            const newTodos = todos.map((todoItem, index) => {
                if (index === todoIndex) {
                    todoItem.isCompleted = !todoItem.isCompleted;
                }

                return todoItem;
            });

            saveTodos(newTodos);
        }
    }
}
