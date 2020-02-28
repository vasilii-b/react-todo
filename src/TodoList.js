import React, { useContext } from 'react'
import PropTypes from 'prop-types';

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
    const { todos, deleteTodo, markAsComplete } = useContext(TodoContext);

    todos.propTypes = PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired
        })
    ).isRequired;

    return (
        <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button>
                    <Checkbox
                        tabIndex={-1}
                        disableRipple
                        checked={todo.isCompleted}
                        value={todo.isCompleted.toString()}
                        name={'todo-item-' + index}
                        id={'todo-item-' + index}
                        onChange={() => { markAsComplete(index) }} />
                    <ListItemText primary={todo.title} />
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
                    <Divider />
                </ListItem>
            ))}
        </List>
    );
}

export default TodoList;
