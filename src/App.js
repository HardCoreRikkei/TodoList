import Home from './Components/Home';
import AddTodo from "./Container/AddTodo";
import TodoList from "./Container/TodoList";
import Footer from "./Container/Footer";

const App = () => {
    return (
        <>
            {/* <Home/> */}
            <AddTodo />
            <TodoList />
            <Footer />
        </>
    );
}

export default App;
 