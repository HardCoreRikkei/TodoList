import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../../Actions/TodoList";

import './styles.css';

const Todo = ({ text, complete, id, onClick, deleteTodo, editTodo}) => {
    const [editMode, setEditMode] = useState(false);
    const [textEdit, setTextEdit] = useState(text);

    const onClickHandleDeleteBtn = useCallback((e) => {
        deleteTodo(id);
    },[deleteTodo,id])

    const onClickSwitchEditMode = useCallback((e) => {
        if(!complete) {
            setEditMode(!editMode);
        }
        setTextEdit(text);
    },[editMode, text, setTextEdit, setEditMode, complete])

    const onChangeInput = useCallback((e) => {
        setTextEdit(e.target.value);
    },[setTextEdit])

    const onClickUpdateTodo = useCallback(() => {
        editTodo(id,textEdit);
        setEditMode(!editMode);    
    },[setEditMode, editMode, id, textEdit, editTodo])

    return (
        editMode ?
        <li  className={complete ? "checked" : ""}> 
            <input value={textEdit} onChange={onChangeInput}>
            </input>
            <div className="groupBtn">        
                <div className="updateBtn btn" onClick={onClickUpdateTodo}>Update</div>
                <div className="remoteBtn btn " onClick={onClickSwitchEditMode}>Cancel</div>
            </div>
        </li> : 
        <li  className={complete ? "checked" : ""}> 
            <div onClick = {onClick} >
                {text}
            </div>
            <div className="groupBtn">        
                <div className="editBtn btn" style={{display: complete ? "none" : ""}} onClick={onClickSwitchEditMode}>Edit</div>
                <div className="remoteBtn btn" onClick={onClickHandleDeleteBtn}>Delete</div>
            </div>
        </li>
    );
};

const mapStateToProps = state => ({
});
  
const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: (id, text) => dispatch(editTodo(id,text))
});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Todo);