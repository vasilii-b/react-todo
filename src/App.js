import React from 'react'

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import TodoContextProvider from './provider/TodoContextProvider';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const App = () => {
    return (
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center">
                Todo List
            </Typography>

            <TodoContextProvider>
                <TodoForm />
                <TodoList />
            </TodoContextProvider>
        </Container>
    )
}

export default App;
