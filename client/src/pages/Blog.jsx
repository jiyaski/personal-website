import { useState, useEffect } from 'react'; 

import { compareSingleDate } from '../helpers/DateComparator'; 
import BlogPostSummary from '../components/BlogPostSummary'; 
import MarkdownRenderer from '../components/MarkdownRenderer';


function Blog() {

  const introText = `
A dumping ground for my thoughts. 
  `

  const [postSummaries, setPostSummaries] = useState([]); 
  const apiUrl = import.meta.env.VITE_API_URL; 


  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(`https://${apiUrl}/blogposts`); 
      const data = await response.json(); 
      setPostSummaries(data); 
    } catch(err) {
      console.error('Error fetching blog post summaries: ', err); 
    }
  }


  useEffect(() => {
    fetchBlogPosts(); 
  }, []); 


  return (
    <div className='w-full max-w-[800px] px-6'>
      <h1 className='text-center text-4xl font-bold pt-8 pb-6 mx-2'>Blog</h1>
      <div className='py-4'>
        <MarkdownRenderer markdownString={ introText } />
      </div>

      {postSummaries.sort(compareSingleDate).reverse().map(postSummary => (
        <BlogPostSummary key={postSummary.urlName} summaryJson={postSummary} />
      ))}
    </div>
  )

}

export default Blog
