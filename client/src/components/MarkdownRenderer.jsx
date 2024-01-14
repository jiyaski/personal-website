import { marked } from 'marked'; 


function MarkdownRenderer({ markdownString }) {

  // strings in database are stored as a single line - must parse literal "\n"s to restore multiline string 
  const processedString = markdownString.replace(/\\n/g, '\n'); 

  // render the markdown 
  const htmlContent = marked(processedString || ''); 

  // this is the rendered markdown - `prose` class applies @tailwindcss/typography default styles 
  return (
    <div className='prose' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
  ); 

}

export default MarkdownRenderer; 