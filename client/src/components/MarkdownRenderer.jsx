import { marked } from 'marked'; 


function MarkdownRenderer({ markdownString }) {

  // strings in database are stored as a single line - must parse literal "\n"s to restore multiline string 
  markdownString = markdownString.replace(/\\n/g, '\n'); 
  // parse "- " into a tab and bullet character, but only if it follows a <br> 
  // markdownString = markdownString.replace(/<br>- /, "\n\n\u2022 "); 

  // render the markdown 
  const htmlContent = marked(markdownString || ''); 

  console.log(htmlContent); 

  // this is the rendered markdown - `prose` class applies @tailwindcss/typography default styles 
  return (
    <div className='prose' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
  ); 

}

export default MarkdownRenderer; 