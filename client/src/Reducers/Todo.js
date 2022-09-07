const Todo = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
            ...state,
            {
                id: action.id,
                completed: action.completed,
                description: action.description
            }
            ];
        case "TOGGLE_TODO":
            return state.map((todo) => 
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id)   
        case "EDIT_TODO":
            return state.map((todo) => 
                todo.id === action.id ? { ...todo, description: action.description } : todo  
            );
        default:
            return state;
    }
  };
  export default Todo;