
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import MarkdownRenderer from '../components/MarkdownRenderer';

function BlogPost() {

  const { urlName } = useParams(); 
  const [blogPost, setBlogPost] = useState(null); 
  const apiUrl = import.meta.env.VITE_API_URL; 


  const fetchBlogPost = async () => {

    const queryString = encodeURIComponent(urlName); 

    try {
      const response = await fetch(`https://${apiUrl}/blogpost?urlName=${queryString}`); 
      setBlogPost(await response.json()); 
    } catch(err) {
      console.error('Error fetching projects: ', err); 
    }
  }

  useEffect(() => {
    fetchBlogPost(); 
  }, []); 


  return ( 
    <> 
      {blogPost && (
        <div className='w-full max-w-[800px] px-6 pb-24'>
          <h1 className='text-center text-3xl font-bold pt-12 pb-8'>{ blogPost.title }</h1>
          <MarkdownRenderer markdownString={blogPost.content} />
        </div>
      )}
    </>
  )
}

export default BlogPost; 