

const { connectToMongo, applyCors } = require('../setup'); 

module.exports = async (req, res) => {

    applyCors(req, res);

    // Only proceed for POST requests
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
        return;
    }

    const secretKey = process.env.SECRET_KEY; 
    if (req.body.secretKey !== secretKey) {
        return res.status(401).send("Unauthorized"); 
    }

    delete req.body.secretKey; 

    try {
        const db = await connectToMongo(); 
        const collection = db.collection('blog-posts'); 
        const result = await collection.insertOne(req.body); 
        res.status(201).send("Blog post successfully added to database"); 
    } catch(error) {
        console.error(`Error adding blog post to database: ${error}`); 
        res.status(500).send("Error adding blog post to database"); 
    }
}