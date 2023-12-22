import React from 'react'; 

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
          <li key={item.name} className='w-36 h-12 hover:bg-red-200'>
            <a href={item.path} className='flex h-full w-full hover:scale-110 transition-transform items-center justify-center'>
              {item.name}
            </a>
          </li>
        ))}

      </ul>
    </nav>
  )
}

export default Navbar; 