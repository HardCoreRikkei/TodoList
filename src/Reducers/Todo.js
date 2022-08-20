const Todo = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
            ...state,
            {
                id: action.id,
                complete: action.complete,
                text: action.text
            }
            ];
        case "TOGGLE_TODO":
            return state.map((todo) => 
                todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
            );
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id)   
        case "EDIT_TODO":
            return state.map((todo) => 
                todo.id === action.id ? { ...todo, text: action.text } : todo  
            );
        default:
            return state;
    }
  };
  export default Todo;