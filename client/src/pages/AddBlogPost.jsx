import { useState } from 'react'; 

function AddBlogPost() {

  const [secretKey, setSecretKey] = useState('');
  const [title, setTitle] = useState(''); 
  const [urlName, setUrlName] = useState(''); 
  const [content, setContent] = useState('');

  const [year, setYear] = useState(''); 
  const [month, setMonth] = useState(''); 
  const [day, setDay] = useState('');

  const [isSubmitted, setIsSubmitted] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL; 


  const handleSubmit = async (e) => {

    e.preventDefault(); 

    const formData = {
      "secretKey": secretKey.trim(), 
      "title": title.trim(), 
      "urlName": urlName.trim(), 
      "date": {
        "year": year.trim(), 
        "month": month.trim(), 
        "day": day.trim()
      }, 
      "content": content.replace(/\n/g, "\\n").trim()
    }

    try {
      const response = await fetch(`https://${apiUrl}/add-blogpost`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(formData)
      }); 

      if (!response.ok) {
        throw new Error(`HTTP error. Status: ${response.status}`); 
      } else {
        setIsSubmitted(true); 
        setTimeout(() => setIsSubmitted(false), 3000); 
        const responseText = await response.text(); 
        console.log(responseText); 
      }
    
    } catch (error) {
      console.log(`AddBlogPost: error sending data to server: ${error.message}`); 
    }
  }



  return (
    <>
      <h1 className='pt-10 pb-2 text-xl font-bold'>Enter a blog post to the database: </h1>

      {isSubmitted && 
        <p className='w-full text-center text-xl m-4 bg-green-200 text-green-800'>Form submitted!</p>
      }

      <form onSubmit={handleSubmit} className='py-6'>

        <label htmlFor='title'>Post Title: </label>
        <input type='text' className='m-2 border-2'
          name='title' id='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor='urlName'>URL name: </label>
        <input type='text' className='m-2 border-2' 
          name='urlName' id='urlName' 
          value={urlName} 
          onChange={(event) => setUrlName(event.target.value)}
        />

        <p>Date (enter only numeric values): </p>
        <div>
          <label htmlFor='year'>Year: </label>
          <input type='text' className='m-2 border-2'
            name='year' id='year'
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
          <label htmlFor='month'>Month: </label>
          <input type='text' className='m-2 border-2'
            name='month' id='month'
            value={month}
            onChange={(event) => setMonth(event.target.value)}
          />
          <label htmlFor='day'>Day: </label>
          <input type='text' className='m-2 border-2'
            name='day' id='day'
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
        </div>

        <br/>
        <label htmlFor='content'>Enter content (markdown text): </label>
        <textarea className='w-full h-96 border-2 leading-normal'
          name='content' id='content'
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <br/>
        <label htmlFor='secretKey'>Secret key: </label>
        <input type='password' className='m-2 border-2 border-blue-700'
          name='secretKey' id='secretKey' 
          value={secretKey} 
          onChange={(event) => setSecretKey(event.target.value)} 
        />

        <br/>
        <button type='submit' className='m-2 py-2 px-4 text-bold border-black border-2'>Submit</button>

      </form>
    </>
  )
}

export default AddBlogPost; 