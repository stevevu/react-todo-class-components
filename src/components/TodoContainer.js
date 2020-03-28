import React, {Component} from 'react';
import uuid from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  toggleComplete = (id) => {
    //console.log(`Clicked on id: ${id}`);
    this.setState({
      todos: this.state.todos.map( todo => {
        if  (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    //console.log(`Deleting id: ${id}`);
    //this.setState({todos: []})
    this.setState(
      {todos: this.state.todos.filter( todo => {
        return todo.id === id ? false : true;
      })
    })
  }

  addTodo = (title) => {
    //console.log('Submit new todo: ' + title);
    if ( title) {
      const newTodo = {
        id: uuid.v4(),
        title: title,
        completed: false
      }
      this.setState({
        todos: [ ...this.state.todos, newTodo]
      })
    }
    else {
      alert("Please enter a title")
    }
  }

  render() { 

    let {todos} = this.state;

    return (
      <div className="container">
        <Header />
        <InputTodo handleSubmitProps={this.addTodo} />
        <TodoList todoProps={todos} handleChangeProps={this.toggleComplete} handleDeleteProps={this.deleteTodo} />
      </div>
    );
  }
}

export default TodoContainer;
