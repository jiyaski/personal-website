
import './styles/App.css'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import AddProject from './pages/AddProject'; 
import AddBlogPost from './pages/AddBlogPost'; 
import BlogPost from './pages/BlogPost'; 
import ImageCredits from './pages/ImageCredits'; 

import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (

    <BrowserRouter>
      <main className='flex flex-col min-h-screen flex-grow justify-center w-full'
          style={{ 
            backgroundImage: "url('/images/frutiger-aero.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundAttachment: "fixed"
            // image sourced from: https://wallpaperswide.com/dreamscape_spring_7-wallpapers.html
          }}>
        <div className='flex flex-col flex-grow items-center w-2/3 mx-auto bg-white bg-opacity-97'>

          <Navbar />
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            
            <Route path='/add-project' element={<AddProject />} />
            <Route path='/add-blogpost' element={<AddBlogPost />} />
            <Route path='/blog/:urlName' element={<BlogPost />} /> 
            <Route path='/image-credits' element={<ImageCredits />} />
          </Routes>
          
          {/* spacing before footer */}
          <div className='flex-grow'></div>
          
          <Footer />

        </div>
      </main>
    </BrowserRouter>

  )
}

export default App
