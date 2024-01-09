
import resume_pdf from '/assets/resume_default_2024-1-5.pdf' 

function Resume() {

  return (

    <div className='flex flex-col w-3/4 py-4 h-[88vh]'> 
      <iframe src={resume_pdf} 
          className='w-full h-full' 
          title="Resume">
      </iframe>
    </div>
  )
}

export default Resume