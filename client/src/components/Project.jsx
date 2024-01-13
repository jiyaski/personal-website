import { useState } from 'react'; 
import DateParser from './DateParser'; 
import Tags from './Tags'; 
import MarkdownRenderer from './MarkdownRenderer';

function Project({ projectJson }) {

  const [isDescVisible, setIsDescVisible] = useState(false); 

  const toggleDescVisible = () => {
    setIsDescVisible( !isDescVisible ); 
  }

  return (
    <>
      <div onClick={ toggleDescVisible } className='hover:bg-slate-200 p-2'>
        <div className='flex justify-between items-center py-2'>
          <h2 className='text-3xl font-bold'>{ projectJson.title }</h2>
          <span className='flex items-center'>
            <DateParser dateObject={projectJson.startDate} />&nbsp;-&nbsp;<DateParser dateObject={projectJson.endDate} />
          </span>
        </div>
        <Tags names={projectJson.tags} />
      </div>
      
      { isDescVisible && (
        <div className='py-4'>
          <MarkdownRenderer markdownString={ projectJson.desc } />
      </div>
      )}
      
    </>
  ); 
}

export default Project; 