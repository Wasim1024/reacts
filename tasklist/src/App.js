import React, { useState } from "react"

function Task({ title, description, done, onToggle }) {
  return (
    <div 
      className='task' 
      style={{ 
        textDecoration: done ? "line-through" : "none",
        backgroundColor: done ? "#d4edda" : "white",
        padding: "1rem",
        margin: "0.5rem 0",
        borderLeft: "5px solid #007bff",
        borderRadius: "5px",
        cursor: "pointer"
      }}
      onClick={onToggle}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React Basics", description: "Understand what components are.", done: false },
    { id: 2, title: "Build First React Project", description: "Practice by making a small app.", done: false },
    { id: 3, title: "Explore React Props", description: "Pass data into components.", done: false }
  ])

  // State for input fields
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")

  function toggleTask(id) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  function clearCompleted() {
    setTasks(prevTasks => prevTasks.filter(task => !task.done))
  }

  function addTask(e) {
    e.preventDefault() // prevent page reload
    if (newTitle.trim() === "") return // prevent empty task

    const newTask = {
      id: Date.now(), // simple unique id
      title: newTitle,
      description: newDescription,
      done: false
    }

    setTasks(prevTasks => [...prevTasks, newTask])
    setNewTitle("")         // clear input
    setNewDescription("")   // clear input
  }

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <h1>My Task Tracker</h1>

      {/* Add Task Form */}
      <form onSubmit={addTask} style={{ marginBottom: "1rem" }}>
        <input 
          type="text" 
          placeholder="Task title" 
          value={newTitle} 
          onChange={e => setNewTitle(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <textarea 
          placeholder="Task description" 
          value={newDescription} 
          onChange={e => setNewDescription(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem", background: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Add Task
        </button>
      </form>

      {/* Task List */}
      {tasks.map(task => (
        <Task 
          key={task.id} 
          title={task.title} 
          description={task.description} 
          done={task.done} 
          onToggle={() => toggleTask(task.id)}
        />
      ))}

      <button 
        onClick={clearCompleted} 
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Clear Completed
      </button>
    </div>
  )
}

export default App
