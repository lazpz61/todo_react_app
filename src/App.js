import React, { useRef, useState } from 'react';
import Button from './button';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const inputRef = useRef([]);

  function handleClick(){
    inputRef.current.focus()
  }


  const handleInputChange = (e) => {
    e.preventDefault();
    setTaskInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTasks([taskInput, ...tasks]);
      setTaskInput('');
    }
  };
  
  // Function to delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove the task at the given index
  };


  const rightSideHeader = {
    color: 'magenta'
};

  return (
    <div className="main-container">
      <div className="left-side">
        <div className="header">
          <h1>Task Manager</h1>
        </div>
        <form onSubmit={handleAddTask}>
        <input 
          type="text" 
          value={taskInput} 
          onChange={handleInputChange} 
          placeholder="Enter a task"
          className="task-input"
          ref={inputRef}
        />
        <button type="submit" onClick={handleClick} className="add-task-button">Add Task</button>
        </form>
      </div>

      <div className="right-side">
        
            <div className="right-side-header" style={rightSideHeader}>
              <h2>
                  Tasks
              </h2>
            </div>
            <ul className="task-list">
              {tasks.map((task, index)=>(
                <li key={index} className="task-item">{task}
                <button type="button" onClick={() =>deleteTask(index)} 
                className="delete-task-button">Remove</button>
                </li>))}
            </ul>
      </div>
        
    </div>
  );
}

export default App;