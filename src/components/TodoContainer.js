import React, {Component} from 'react';
import uuid from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import axios from 'axios'

class TodoContainer extends Component {
  state = {
    todos: []
  };

  /*------------------------------------
   * handle marking a todo item as 
   * completed or not completed
   *------------------------------------*/
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

  /*------------------------------------
   * delete an item
   *------------------------------------*/
  deleteTodo = (id) => {
    //console.log(`Deleting id: ${id}`);
    document.querySelector('#cover-spin').style.display = 'block';
    axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    ).then( response => {
      // with this fake DELETE request, the API sends bak
      // an empty todo object in response.data; manually
      // remove the todo with the matching id

      //console.log(response);
      this.setState({
        todos: this.state.todos.filter( todo => {
          return todo.id === id ? false : true;
        })
      })
    }).then( () => {
      document.querySelector('#cover-spin').style.display = 'none';
    })
  }

  /*------------------------------------
   * add an item
   *------------------------------------*/
  addTodo = (title) => {
    //console.log('Submit new todo: ' + title);
    if ( title ) {
      document.querySelector('#cover-spin').style.display = 'block';
      axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title: title,
          completed: false
        }
      ).then( response => {
        // with this fake PUT request, the API sends back
        // the todo item in response.data; modify the `id`
        // to be unique before adding to the `todos` state

        //console.log(response);
        let newTodo = response.data;
        newTodo.id = uuid.v4();
        this.setState({todos: [newTodo, ...this.state.todos]})
      }).then( () => {
        document.querySelector('#cover-spin').style.display = 'none';
      });
    }
    else {
      alert("Please enter a title")
    }
  }

  /*------------------------------------
   * get list of todos from API on
   * page loading
   *------------------------------------*/
  componentDidMount = () => {
    document.querySelector('#cover-spin').style.display = 'block';
    axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    ).then(response => {
      //console.log(response);
      this.setState({todos: response.data});
    }).then( () => {
      document.querySelector('#cover-spin').style.display = 'none';
    }).catch(err => console.log("ERROR retrievin data", err));
  }

  componentDidUpdate = (prevProps, prevState) => {
  }


  render() { 

    let {todos} = this.state;

    return (
      <React.Fragment> {/* React.Fragment allows a wrapping element that doesn't render any HTML */}
        <div id="cover-spin"></div>
        <div className="container">
          <Header />
          <InputTodo handleSubmitProps={this.addTodo} />
          <TodoList todoProps={todos} handleChangeProps={this.toggleComplete} handleDeleteProps={this.deleteTodo} />
        </div>
      </React.Fragment>
    );
  }
}

export default TodoContainer;
