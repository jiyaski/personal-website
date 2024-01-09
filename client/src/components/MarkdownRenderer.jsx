import { marked } from 'marked'; 


function MarkdownRenderer({ jsonString }) {

  // JSON strings are always single-line - must restore original multiline string 
  const markdownString = jsonString.replace(/\\n/g, '\n'); 

  // render the markdown 
  const htmlContent = marked(markdownString || ''); 

  // this is the rendered markdown 
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
  ); 

}

export default MarkdownRenderer; 