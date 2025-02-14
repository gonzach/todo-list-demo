import React, {Component} from 'react';
import TodoInput from './TodoInput'
import Todos from './Todos'
import "./Todo.css"
import TodoResource from '../../api/TodoResource';

export default class TodoWrapper extends Component {

  componentDidMount() {
    TodoResource.getAll()
      .then(res => res.json())
      .then(res => {
        console.log("todos res:", res._embedded.todos);
        this.props.refreshTodos( res._embedded.todos)
      })
  }

  addNewTodo = newTodoContent => {
    if(newTodoContent) {
      this.props.createNewTodo(newTodoContent);
    }
  };

  updateTodoStatusWrapper = (id, status) => {
    this.props.updateTodo(id, status);
  }

  render() {
    return (
      <div className="todo-wrapper">
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todos} onChangeStatus = {this.updateTodoStatusWrapper}/>
      </div>
    )
  }
}
