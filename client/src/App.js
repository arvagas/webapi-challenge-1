import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState([])

  async function fetchProjects() {
    const res = await fetch('/projects')
    res
      .json()
      .then(res => setProjects(res))
      .catch(err => setErrors(err))
  }
  
  useEffect(() => {
    fetchProjects()
  }, [])

  if (!projects) return <h1>{errors}</h1>
  else return (
    <div className="App">
      {projects.map(project => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      ))}

    </div>
  )
}

export default App
