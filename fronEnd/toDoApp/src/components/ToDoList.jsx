import React, { useState } from "react";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");



  const addTask = () => {
    setTasks([...tasks,newtask])
    setNewTask('')
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const moveUp = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 0, newTasks.splice(index - 1, 1)[0])
    setTasks(newTasks)
  }

  return <div>
    <h1>to do list</h1>
    <div>
      <input type="text"  placeholder='Enter a task...' value={newtask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
    </div>

    <ol>
      {tasks.map((task, index)=>
        <li key={index}>
          <span>{task}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      )}
    </ol>
  </div>;
};
