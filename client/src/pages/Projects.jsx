import React, { useState, useEffect } from 'react'; 
import Project from '../components/Project'; 


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
      <h1 className='text-4xl font-bold pt-8 pb-6'>My Projects</h1>
      <div className='w-full max-w-[800px] px-6'>

        {projects.map(project => (
          <Project key={ project._id} projectJson={project} />
        ))}

      </div>
    </>
  )
}

export default Projects