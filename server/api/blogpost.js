
const { connectToMongo, applyCors } = require('../setup'); 

module.exports = async (req, res) => {

    applyCors(req, res);

    // Only proceed for GET requests
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
        return;
    }

    try {
        const db = await connectToMongo(); 
        const collection = db.collection('blog-posts'); 
        const blogPost = await collection.findOne({urlName: req.query.urlName}); 
        res.json(blogPost); 
    } catch(err) {
        console.error(err); 
        res.status(500).send('Error fetching blog post from database'); 
    }
}