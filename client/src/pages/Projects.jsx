import { useState, useEffect } from 'react'; 
import { marked } from 'marked'; 
import MarkdownRenderer from '../components/MarkdownRenderer';
import Tags from '../components/Tags'; 
import DateParser from '../components/DateParser'; 


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

          <div key={project._id} className='w-full max-w-[800px] px-6'>
            <h2>{ project.title }</h2>
            <span>
            <DateParser dateObject={project.startDate} />
            &nbsp; - &nbsp; 
            <DateParser dateObject={project.endDate} />
            </span>
            <Tags names={project.tags} />
            <div className='py-4'>
              <MarkdownRenderer markdownString={ project.desc } />
            </div>
          </div>

        ))}
    </>
  )
}

export default Projects