import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../../Actions/TodoList";

import './styles.css';

const Todo = ({ description, completed, id, onClick, deleteTodo, editTodo}) => {
    const [editMode, setEditMode] = useState(false);
    const [textEdit, setTextEdit] = useState(description);

    const onClickHandleDeleteBtn = useCallback((e) => {
        deleteTodo(id);
    },[deleteTodo,id])

    const onClickSwitchEditMode = useCallback((e) => {
        if(!completed) {
            setEditMode(!editMode);
        }
        setTextEdit(description);
    },[editMode, description, setTextEdit, setEditMode, completed])

    const onChangeInput = useCallback((e) => {
        setTextEdit(e.target.value);
    },[setTextEdit])

    const onClickUpdateTodo = useCallback(() => {
        editTodo(id,textEdit);
        setEditMode(!editMode);    
    },[setEditMode, editMode, id, textEdit, editTodo])

    return (
        editMode ?
        <li  className={completed ? "checked" : ""}> 
            <input value={textEdit} onChange={onChangeInput}>
            </input>
            <div className="groupBtn">        
                <div className="updateBtn btn" onClick={onClickUpdateTodo}>Update</div>
                <div className="remoteBtn btn " onClick={onClickSwitchEditMode}>Cancel</div>
            </div>
        </li> : 
        <li  className={completed ? "checked" : ""}> 
            <div onClick = {onClick} >
                {description}
            </div>
            <div className="groupBtn">        
                <div className="editBtn btn" style={{display: completed ? "none" : ""}} onClick={onClickSwitchEditMode}>Edit</div>
                <div className="remoteBtn btn" onClick={onClickHandleDeleteBtn}>Delete</div>
            </div>
        </li>
    );
};

const mapStateToProps = state => ({
});
  
const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: (id, description) => dispatch(editTodo(id,description))
});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Todo);