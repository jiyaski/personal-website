import { useState } from 'react'; 



function AddProject() {

  const [secretKey, setSecretKey] = useState(''); 
  const [title, setTitle] = useState(''); 
  const [tags, setTags] = useState(''); 
  const [desc, setDesc] = useState(''); 

  const [startYear, setStartYear] = useState(''); 
  const [startMonth, setStartMonth] = useState(''); 
  const [startDay, setStartDay] = useState(''); 

  const [endYear, setEndYear] = useState(''); 
  const [endMonth, setEndMonth] = useState(''); 
  const [endDay, setEndDay] = useState(''); 

  const [isSubmitted, setIsSubmitted] = useState(false); 
  const apiUrl = import.meta.env.VITE_API_URL; 


  const handleSubmit = async (e) => {

    e.preventDefault(); 

    const formData = {
      "secretKey": secretKey.trim(), 
      "title": title.trim(), 
      "tags": tags.split(',').map(tag => tag.trim()), 
      "startDate": {
        "year": +startYear.trim(), 
        "month": +startMonth.trim(), 
        "day": +startDay.trim()
      }, 
      "endDate": {
        "year": +endYear.trim(), 
        "month": +endMonth.trim(), 
        "day": +endDay.trim()
      }, 
      "desc": desc.replace(/\n/g, "\\n").trim()
    }

    try {
      const response = await fetch(`https://${apiUrl}/add-project`, {
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
      console.log("AddProject: error sending data to server"); 
    }
  }


  return (
    <>
      <h1 className='pt-10 pb-2 text-xl font-bold'>Enter a project to the database: </h1>

      {isSubmitted && 
        <p className='w-full text-center text-xl m-4 bg-green-200 text-green-800'>Form submitted!</p>
      }

      <form onSubmit={handleSubmit} className='py-6'>
        <label htmlFor='title'>Project Title: </label>
        <input type='text' className='m-2 border-2'
          name='title' id='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <p>Start Date (enter only numeric values - can omit day): </p>
        <div>
          <label htmlFor='startYear'>Year: </label>
          <input type='text' className='m-2 border-2'
            name='startYear' id='startYear'
            value={startYear}
            onChange={(event) => setStartYear(event.target.value)}
          />
          <label htmlFor='startMonth'>Month: </label>
          <input type='text' className='m-2 border-2'
            name='startMonth' id='startMonth'
            value={startMonth}
            onChange={(event) => setStartMonth(event.target.value)}
          />
          <label htmlFor='startDay'>Day: </label>
          <input type='text' className='m-2 border-2'
            name='startDay' id='startDay'
            value={startDay}
            onChange={(event) => setStartDay(event.target.value)}
          />
        </div>

        <p>End Date (enter only numeric values - can omit day): </p>
        <div>
          <label htmlFor='endYear'>Year: </label>
          <input type='text' className='m-2 border-2'
            name='endYear' id='endYear'
            value={endYear}
            onChange={(event) => setEndYear(event.target.value)}
          />
          <label htmlFor='endMonth'>Month: </label>
          <input type='text' className='m-2 border-2'
            name='endMonth' id='endMonth' 
            value={endMonth}
            onChange={(event) => setEndMonth(event.target.value)}
          />
          <label htmlFor='endDay'>Day: </label>
          <input type='text' className='m-2 border-2'
            name='endDay' id='endDay'
            value={endDay}
            onChange={(event) => setEndDay(event.target.value)}
          />
        </div>

        <label htmlFor='tags'>Enter tags (separate with commas): </label>
        <input type='text' className='m-2 border-2'
          name='tags' id='tags'
          value={tags}
          onChange={(event) => setTags(event.target.value)}
        />
        <br/>
        <label htmlFor='desc'>Enter description (markdown text): </label>
        <textarea className='w-full h-64 border-2 leading-normal'
          name='desc' id='desc'
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
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

export default AddProject; 