import React from "react";
import './styles.css';

const Todo = ({ text, complete, onClick }) => {
  return (
      <li
        onClick = {onClick}
        style = {{ 
            listStyleType: 'none', 
            cursor: "pointer",
            display:"flex",
            justifyContent: "space-between",
        }}
        className={complete ? "checked" : ""}
      > 
        {text}
        <div>        
            <div className="editBtn">Edit</div>
            <div className="remoteBtn">Delete</div>
        </div>
      </li>
  );
};

export default Todo;