import { combineReducers } from "redux";
import todos from "./Todo";
import filterTodo from "./FilterTodo";

export default combineReducers({
  todos,
  filterTodo
});
