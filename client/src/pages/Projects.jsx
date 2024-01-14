import React, { useState, useEffect } from 'react'; 
import Project from '../components/Project'; 
import MarkdownRenderer from '../components/MarkdownRenderer';
import { compareStartEndDates } from '../helpers/DateComparator'; 


function Projects() {

  const introText = `
This page contains all of my programming experience in reverse-chronological order, 
going all the way back to my first \`hello world\`! 

A list of computer science classes I've taken can be found at the bottom. Some 
of the projects here are class projects, although I include those only if I 
significantly over-achieved on them relative to the class requirements.
`

  const courseworkText = `
### **Coursework**:

### *Georgia Institute of Technology*: 
- **Design and Analysis of Algorithms (Spring 2024 - in progress)** 
- **High-Performance Computing (Spring 2024 - in progress)** 
- **Computer Systems & Networks (Spring 2024 - in progress)** 
- **Objects & Design (Fall 2023)** - covers Git/GitHub, the SDLC, development methodologies (Agile, Scrum, TDD, etc.), software architectures, UML, design principles (SOLID, GRASP), and design patterns. 
- **Computer Organization & Programming (Fall 2023)** - implementing basic computer elements using transistor and logic circuits (including the ALU, registers, memory, and finite state machines), writing microcode to implement a simple ISA, Assembly programming, I/O, interrupts, priority, and user vs. OS privilege, C programming, the compilation/assembly/linking process, calling conventions, and a brief intro to C++. 
- **Intro to Database Systems (Fall 2023)** - database design using Entity-Relationship diagrams, database schemas, constraint handling, implementing and querying databases using MySQL, procedures and views. 
- **Data Structures & Algorithms (Spring 2023):** - arrays, linked lists, stacks, queues, deques, binary search trees, heaps, hashmaps, skiplists, AVLs, 2-4 trees, sorting algorithms, string algorithms, graph algorithms, recursion, complexity analysis, intro to dynamic programming, intro to unit testing. All programming was in Java. 

### *University of North Georgia*: 
Note: the CS courses at UNG were generally of much lower quality than those at GaTech. 
- Computational Techniques in Physics (Fall 2022) 
- Machine Learning (Fall 2022) 
- Computer Organization & Architecture (Summer 2022) 
- Web Programming (Summer 2022) 
- Script Programming (Spring 2022) 
- Computer Science II (Fall 2021) 
- Computer Science I (Summer 2021) 
  `

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
      <h1 className='text-4xl font-bold pt-8 pb-6 mx-2'>My Projects & Experience</h1>
      <div className='w-full max-w-[800px] px-6'>

        <div className='py-4'>
          <MarkdownRenderer markdownString={ introText } />
        </div>

        {projects.sort(compareStartEndDates).reverse().map(project => (
          <Project key={ project._id} projectJson={project} />
        ))}

        <div className='pt-16 pb-8 mx-2'>
          <MarkdownRenderer markdownString={ courseworkText } />
        </div>

      </div>
    </>
  )
}

export default Projects

