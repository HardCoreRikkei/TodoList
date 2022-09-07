let nextTodoId = 0;

export const addTodo = description => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  completed: false,
  description
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});

export const filter = filter => ({
  type: "FILTER_TODO",
  filter
});

export const editTodo = (id, description) => ({
  type: "EDIT_TODO",
  id,
  description
});

export const typeFilter = {
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL"
};
