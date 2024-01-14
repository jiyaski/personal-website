import { useState } from 'react'; 
import DateParser from './DateParser'; 
import Tags from './Tags'; 
import MarkdownRenderer from './MarkdownRenderer';

function Project({ projectJson }) {

  const [isDescVisible, setIsDescVisible] = useState(false); 

  const clickedClass = isDescVisible ? 'border-l-4 border-lime-400' : ''; 

  const toggleDescVisible = () => {
    setIsDescVisible( !isDescVisible ); 
  }

  return (
    <>
      <div className='pt-3'></div>
      <div onClick={ toggleDescVisible } className={`px-2 py-2 ${clickedClass} hover:border-l-4 hover:border-lime-400`}>
        <div className='flex justify-between items-center py-1'>
          <h2 className='text-xl font-bold'>{ projectJson.title }</h2>
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