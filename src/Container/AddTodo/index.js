import React, { useState, useCallback } from "react";
import { addTodo } from "../../Actions/TodoList";
import { connect } from "react-redux";
import './styles.css';
 
const AddTodo = ({ dispatch }) => {
    const [input, setInput] = useState("");

    const handleChange = useCallback((e) => {
        setInput(e.target.value.trim());
    },[]); 
    
    const onClick = useCallback( (e) => {
        if (input) {
            dispatch(addTodo(input));
        }
    },[dispatch, input]);

  return (
    <React.Fragment>
        <div className="header">
            <h1 styles={{margin: "5px"}}>My To Do List</h1>
            <input type="text" value={input} onChange={handleChange}/>
            <button type="submit" className="addBtn" onClick={onClick}>
                Add Todo
            </button>
        </div>
    </React.Fragment>
  );
};

export default connect()(AddTodo);
