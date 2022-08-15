import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <div style={{display:"flex", margin: "15px"}}>
      <button style={{marginRight: "20px"}}>Edit</button>
      <li
        onClick={onClick}
        style={{ 
            textDecoration: complete ? "line-through" : "none" , 
            listStyleType: 'none', 
            cursor: "pointer"
        }}
      > 
        {text}
      </li>
    </div>
  );
};

export default Todo;