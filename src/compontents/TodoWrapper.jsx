import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper () {

    const [todos ,setTodos] = useState([
        {content: 'wash' , id: Math.random()},
        {content: 'clean' , id: Math.random()},
    ]);

    const addTodo = (content) => {
        setTodos([...todos, {content, id: Math.random()}])
    }

  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo ={addTodo} />
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />
      })}
    </div>
  );
}

export default TodoWrapper;


