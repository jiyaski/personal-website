import React from 'react'; 

const Navbar = () => {

  return (
    <nav className='bg-gray-200 p-4'>
      <ul className='flex justify-end'>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Résumé</a></li>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  )
}

export default Navbar; 