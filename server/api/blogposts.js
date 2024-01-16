
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
        const postSummaries = await collection.find({}, { projection: { _id: 0, content: 0 }}).toArray(); 
        res.status(200).json(postSummaries); 
    } catch(err) {
        console.error(err); 
        res.status(500).send('Error fetching blog post summaries from database'); 
    }
}