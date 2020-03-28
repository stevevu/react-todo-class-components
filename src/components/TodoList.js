import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        let todos = this.props.todoProps;

        return (
            <ul>
                {todos.map( todo => (
                    <TodoItem key={todo.id} todoProps={todo} handleChangeProps={this.props.handleChangeProps} handleDeleteProps={this.props.handleDeleteProps} />
                ))}
            </ul>
        )
    }
}

export default TodoList;