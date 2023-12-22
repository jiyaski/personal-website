
import './styles/App.css'

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (

    <div className='flex flex-col min-h-screen'>
      <main className='flex flex-col flex-grow justify-center w-full bg-gray-100'>
        <div className='flex flex-col flex-grow items-center w-2/3 mx-auto bg-white'>

          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          
          {/* spacing before footer */}
          <div className='flex-grow'></div>
          
          <Footer />

        </div>
      </main>
    </div>
  )
}

export default App
