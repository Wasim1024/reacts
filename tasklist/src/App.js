import React from "react"

function Task({title,description}) {
  const [done, setDone] = React.useState(false)

  function toggleDone(){
    setDone(prev => !prev)
  }
  return (
    <div className='task'
    style={{ textDecoration: done ? "line-through" : "none",
    backgroundColor: done ? "#d4edda" : "white" }}
    onClick={toggleDone}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

  const tasks = [
    { id: 1, title: "Learn React Basics", description: "Understand what components are." },
    { id: 2, title: "Build First React Project", description: "Practice by making a small app." },
    { id: 3, title: "Explore React Props", description: "Pass data into components." }
  ]


function App() {

  return (
    <div>
      <h1>My Task Tracker</h1>

      {tasks.map(task => (
        <Task 
          key={task.id} 
          title={task.title} 
          description={task.description} 
        />
      ))}
    </div>
  )
}

export default App
