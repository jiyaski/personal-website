import React from 'react'; 
import { Link } from 'react-router-dom'; 


const Footer = () => {

  return (
    <>
      <div className='py-4'></div>
      <div className='bg-gray-300 h-20 w-full text-center'>
        <p className='text-xs mt-4'>&copy; Jonathan Hopkins, 2023</p>
        <Link to="/image-credits" className='text-xs underline'>Image credits</Link>
      </div>
    </>

  )
}

export default Footer; 