
import profilePhoto from '../assets/professional_portrait.jpg'


function Home() {

  console.log("Rendering Home component");

  return (

    <>

      {/* Welcome text */} 
      <div className='my-8'></div>
      <div className='w-full text-center'>
        <h1 className='mx-auto text-6xl font-displayFont'>Welcome!</h1>
      </div>
      <div className='my-6'></div>

      {/* main body text */} 
      <div className='max-w-[800px] px-6'>
        <p className='text-center'>I’m Jonathan, a computer science student at Georgia Tech and aspiring software engineer.</p>
        <p className='text-center'>I originally studied physics at University of North Georgia, but the computers spoke to me. 
            “C̸om͂e̴̽ t̚ǭ̷̦̹ t͚͖he̵̡̱͊̃ d͒ar͒k ̷̦͆ͅsi͝d̉e,” they said. “W̷͘e ̀há̴v̵͓̀e̴̾͜  ̛͕̈̐c̸̼̰̓̎̕ͅo̍͜o̫͎͝ki̊̓e̷͑s̵͕̍,” they said. I couldn’t refuse.</p>
        <p className='text-center'>So here I am. Programmer by day, programmer by night. Math nerd on the weekends. 
            Occasionally I like to hike in the mountains or read old books.</p>
        <p className='text-center'>Anyway, feel free to look around. If you’re a potential employer, check out my résumé or see 
            a list of projects I’ve worked on. My blog contains random thoughts I decided to write down 
            - some applicable to programming and some not.</p>
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
