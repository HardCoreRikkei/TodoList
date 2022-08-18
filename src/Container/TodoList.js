import React from "react";
import Todo from "../Components/Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../Actions/TodoList";

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul>
        {todos != null &&
            todos.map(todo => (
                    <Todo key={todo.id} {...todo} onClick={(e) => {
                        toggleTodo(todo.id);
                    }}/>
            ))
        }
        </ul>
    );
};

const filterTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETE":
      return todos.filter(todo => todo.complete);
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.complete);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.filterTodo)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
