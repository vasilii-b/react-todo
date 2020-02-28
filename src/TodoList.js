import React, { useContext } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';

import TodoContext from './context/TodoContext';

const TodoList = () => {
    const { todos, deleteTodo } = useContext(TodoContext);

    return (
        <List>
            {todos.map((todo, index) => (
                <>
                <ListItem key={index.toString()} dense button>
                    <Checkbox tabIndex={-1} disableRipple />
                    <ListItemText primary={todo} />
                    <Tooltip title="Deletes the item forever">
                        <ListItemSecondaryAction>
                            <IconButton
                                aria-label="Delete"
                                onClick={() => {
                                    deleteTodo(index);
                                }}
                            >
                                <DeleteOutlineRoundedIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </Tooltip>
                </ListItem>
                <Divider />
                </>
            ))}
        </List>
    );
}

export default TodoList;
