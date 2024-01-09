
import { marked } from 'marked'; 

import MarkdownRenderer from '../components/MarkdownRenderer';
import profilePhoto from '/images/professional_portrait.jpg'; 




function Home() {

  console.log("Rendering Home component");

  // cannot indent this string or it will be interpreted as code by Marked
  var introText = `
I’m Jonathan, a computer science student at Georgia Tech and aspiring software engineer. 

I made this site partly to showcase my portfolio and partly on a whim. Maybe you can tell I got 
nostalgic for 2010 when making this (the *Frutiger Aero* aesthetic sparks joy)! 

<br>

###### About me: 
I used to study physics at the University of North Georgia. I originally intended to transfer 
to Georgia Tech to study electrical engineering (via a dual-degree transfer program). However, 
over time I found myself increasingly drawn to programming, so I eventually decided to transfer 
as a computer science major instead. 

So here I am, a busy jacket. Student by day, student by night. Student on the weekends. I also 
like hiking, gardening, drawing, and reading old books ~~, not that I actually do much of those~~. 
One day I will have time for hobbies! But for now, programming and math are my life, and I'm 
quite okay with that.
  `

  return (

    <>

      {/* Welcome text */} 
      <div className='my-6'></div>
      <div className='w-full text-center'>
        <h1 className='mx-auto text-6xl font-displayFont'>Welcome!</h1>
      </div>
      <div className='my-4'></div>

      {/* main body text */} 
      <div className='max-w-[800px] px-6'>
        <MarkdownRenderer jsonString={ introText } />     
      </div>

      {/* profile photo */} 
      <img src={profilePhoto} width="200px" alt="professional photo of me"
          className='mt-8 mb-4 item-center rounded-full border-2 border-gray-600'></img>
      
      {/* spacing before footer */}
      <div className='flex-grow'></div>

    </>

  )
}

export default Home
