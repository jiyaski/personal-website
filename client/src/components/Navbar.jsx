import React from 'react'; 
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navbarItems = [
    { name: 'Blog', path: '/blog' }, 
    { name: 'Projects', path: '/projects' }, 
    { name: 'Résumé', path: '/resume' }, 
    { name: 'Home', path: '/' }
  ]

  return (
    <nav className='bg-gray-200 w-full'>
      <ul className='flex h-full justify-end'>

        {navbarItems.map((item) => (
          <li key={item.name} className='w-36 h-[5vh] hover:bg-red-200'>
            <Link to={item.path} className='flex h-full w-full hover:scale-110 transition-transform items-center justify-center'>
              {item.name}
            </Link>
          </li>
        ))}

      </ul>
    </nav>
  )
}

export default Navbar; 