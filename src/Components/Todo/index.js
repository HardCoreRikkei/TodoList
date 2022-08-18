import React, { useCallback } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../Actions/TodoList";

import './styles.css';

const Todo = ({ text, complete, id, onClick, deleteTodo}) => {
    const onClickHandleDeleteBtn = useCallback((e) => {
        deleteTodo(id);
    },[])

    return (
        <li onClick = {onClick} className={complete ? "checked" : ""}> 
            <div className={complete ? "checked" : ""}>
                {text}
            </div>
            <div className="groupBtn">        
                <div className="editBtn">Edit</div>
                <div className="remoteBtn" onClick={onClickHandleDeleteBtn}>Delete</div>
            </div>
        </li>
    );
};
const filterTodos = (todos, filter) => {
    switch (filter) {
      case "DELETE_TODO":
        return todos.filter(todo => todo.complete);
      default:
        return todos;
    }
};

const mapStateToProps = state => ({
});
  
const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id))
});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Todo);