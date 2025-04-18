import React, { useState } from "react";
import "./App.css";

const App = () => {
  
  const [tasks, setTasks] = useState([]);
 
  
  const [newTask, setNewTask] = useState("");


  const addTask = () => {
    if (newTask.trim() === "") return; 
    setTasks([...tasks, newTask]); 
    setNewTask(""); 
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks); 
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask} className="add-btn">Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => deleteTask(index)} className="delete-btn">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;