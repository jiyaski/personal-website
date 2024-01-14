import { useState } from 'react'; 
import DateParser from './DateParser'; 
import Tags from './Tags'; 
import MarkdownRenderer from './MarkdownRenderer';

function Project({ projectJson }) {

  const [isDescVisible, setIsDescVisible] = useState(false); 

  const bgColorClass = isDescVisible ? 'bg-slate-200' : ''; 

  const toggleDescVisible = () => {
    setIsDescVisible( !isDescVisible ); 
  }

  return (
    <>
      <div onClick={ toggleDescVisible } className={`px-2 py-4 ${bgColorClass} hover:bg-slate-200`}>
        <div className='flex justify-between items-center py-1'>
          <h2 className='text-2xl font-bold'>{ projectJson.title }</h2>
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