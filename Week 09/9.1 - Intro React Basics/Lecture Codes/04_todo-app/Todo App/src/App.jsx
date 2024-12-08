import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Hit the gym regularly",
      done: false,
    },
  ]);

  // Function to add a new todo item
  function addTodo() {
    setTodos([
      ...todos,
      {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        done: false,
      },
    ]);


    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }

  // Return the JSX to render the component
  return (
    <div className="main">
      <h1 className="header">Todo App</h1>
      <div className="form-container">
        <input
          id="title"
          className="input-field"
          type="text"
          placeholder="Enter Todo Title"
        />
        <input
          id="description"
          className="input-field"
          type="text"
          placeholder="Write Todo Description"
        />
        <button className="add-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            title={todo.title}
            description={todo.description}
            done={todo.done}
          />
        ))}
      </div>
    </div>
  );
}

function Todo({ title, description, done }) {
  return (
    <div className="todo-item">
      <h3 className="todo-title">{title}</h3>
      <p className="todo-description">{description}</p>
      <p className="todo-status">{done ? "✅ Task is Done" : "❌ Task is Not Done"}</p>
    </div>
  );
}

export default App;
