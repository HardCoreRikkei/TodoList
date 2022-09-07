
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes
} from 'react-router-dom'

import Home from './Components/Home';
import AddTodo from "./Container/AddTodo";
import TodoList from "./Container/TodoList";
import Footer from "./Container/Footer";

const Navbar = () => (
    <div className="navbar">
        <NavLink className = "navbar_item" to='/'>Home</NavLink>
        <NavLink className = "navbar_item" to='/todolist'>TodoList</NavLink>
    </div>
)
const TodoListApp = () => {
    return <>
        <AddTodo />
        <TodoList />
        <Footer />
    </>
}

const NotFound = (props) => <h1>The page your looking for not found</h1>

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar/>  
                <Routes>
                    <Route path='/todolist' element={<TodoListApp/>} />
                    <Route exact path='/' element={<Home/>} />
                    <Route component={NotFound} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
 