import React from "react";
import './styles.css';

const Todo = ({ text, complete, onClick }) => {
  return (
      <li
        onClick = {onClick}
        style = {{ 
            listStyleType: 'none', 
            cursor: "pointer"
        }}
        className={complete ? "checked" : ""}
      > 
        {text}
      </li>
  );
};

export default Todo;