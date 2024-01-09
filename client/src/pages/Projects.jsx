import { useState, useEffect } from 'react'; 
import { marked } from 'marked'; 


function Projects() {

  const [projects, setProjects] = useState([]); 


  // get JSON projects from server endpoint 
  async function fetchProjects() {
    try {
      const response = await fetch('http://localhost:3000/projects'); 
      const data = await response.json(); 
      setProjects(data); 
    } catch (err) {
      console.error('Error fetching projects: ', err); 
    }
  }


  // runs when component first mounts 
  useEffect(() => {
    fetchProjects(); 
  }, []); 


  return (
    <>
      <h1>Projects</h1>

        {projects.map(project => (
          <div key={project._id}>
            <h2>Title: { project.title }</h2>
            <p>Description: { project.desc }</p>
          </div>
        ))}
    </>
  )
}

export default Projects