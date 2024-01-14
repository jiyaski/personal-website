
import { Link } from 'react-router-dom'; 
import DateParser from "./DateParser";

function BlogPostSummary({ summaryJson }) {

  
  return (
    <>
      <div className='mt-4'></div>
      <Link to={summaryJson.urlName}
        className='flex justify-between items-center py-1 hover:border-l-4 hover:border-lime-400'>
        <h2 className='px-2 my-0.5 text-large font-bold'>{ summaryJson.title }</h2>
        <DateParser dateObject={summaryJson.date} />
      </Link>    
    </>
  )
}

export default BlogPostSummary; 