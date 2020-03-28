import React, {Component} from 'react';

class TodoItem extends Component {
    render () {
        const {id, title, completed} = this.props.todoProps;
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
          }

        return (
            <li className="todo-item">
                <input type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)}/>
                <button onClick={() => this.props.handleDeleteProps(id)}>delete</button>
                <span style={ completed ? completedStyle : null}>{title}</span>
            </li>
        )
    }
}

export default TodoItem;